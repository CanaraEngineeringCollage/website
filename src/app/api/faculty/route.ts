import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://cec.edu.in/api/faculty", {
      cache: "no-store",
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch faculty" }, { status: 500 });
  }
}
