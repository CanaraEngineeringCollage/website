import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) {
    return new NextResponse("Image ID is required", { status: 400 });
  }

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // Cache this fetch for a short duration or use revalidate tags if possible
    // For now, we fetch the list. Ideally, the backend should support fetching by ID directly.
    const res = await fetch(`${apiUrl}/home-page-images`, {
      next: { revalidate: 300 },// Cache for 1 hour to avoid hitting backend on every image request
    });

    if (!res.ok) {
      return new NextResponse("Failed to fetch images from backend", { status: 502 });
    }

    const images = await res.json();
    // Compare as strings to handle both numeric and UUID ids
    const targetImage = images.find((img: any) => String(img.id) === id);

    if (!targetImage || !targetImage.image || !targetImage.image.data) {
      return new NextResponse("Image not found", { status: 404 });
    }

    // Convert array buffer to standard Buffer
    const imageBuffer = Buffer.from(targetImage.image.data);

    // Determine content type (default to jpeg, but ideally should be dynamic if available)
    const contentType = targetImage.image.type || "image/jpeg";

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable", // Cache aggressively in browser
      },
    });
  } catch (error) {
    console.error("Error serving hero image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
