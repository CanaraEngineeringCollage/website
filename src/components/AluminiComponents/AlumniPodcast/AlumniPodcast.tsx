"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface AlumniPodcast {
  id: number;
  url: string;
  createdAt: string;
}

const getYoutubeThumbnail = (url?: string) => {
  if (!url) return "/placeholder.jpg";

  const match = url.match(
    /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/,
  );

  if (!match || !match[1]) return "/placeholder.jpg";

  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
};

export default function AlumniPodcast() {
  const [podcasts, setPodcasts] = useState<AlumniPodcast[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/alumni/podcast`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setPodcasts(data);
      } catch (error) {
        console.error("Failed to fetch alumni podcasts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading podcasts...</p>;
  }

  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto pb-10">
      {/* Heading */}\
      <div className="flex justify-center lg:justify-between items-center pb-5 lg:pb-10">
      <h2 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl text-center font-bold text-[#1D1D1F] ">
        Alumni Podcast
      </h2>
      <button onClick={() => window.open("https://www.instagram.com/cec.nexus/", "_blank")} className="text-[#2884CA] hidden font-bold text-[17px] bg-[#d9ebff] 
               px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3 
               items-center min-w-[250px] justify-center">
  Follow us on Instagram
      </button>
      </div>

      {/* Podcast Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg2:gap-10 items-start">
        {podcasts.map((podcast) => (
          <a
            key={podcast.id}
            href={podcast.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer h-[180px] lg:h-[300px] rounded-3xl overflow-hidden group"
          >
            {/* Thumbnail */}
            <Image
              src={getYoutubeThumbnail(podcast.url)}
              alt="Alumni Podcast"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-end justify-end px-6 pb-6">
              <span className="px-5 py-2 bg-white rounded-full text-sm lg:text-base font-semibold text-primary hover:bg-gray-200 transition whitespace-nowrap">
                Watch Now
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-10 lg:hidden flex justify-center">
<button onClick={() => window.open("https://www.instagram.com/cec.nexus/", "_blank")} className="text-[#2884CA]   font-bold text-[17px] bg-[#d9ebff] 
               px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3 
               items-center min-w-[250px] justify-center">
  Follow us on Instagram
      </button>
      </div>
      {/* ✅ Instagram Link */}
    </section>
  );
}
