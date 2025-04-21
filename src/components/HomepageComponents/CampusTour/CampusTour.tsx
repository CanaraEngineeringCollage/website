"use client"
import React, { useState } from 'react';
import { BiPause } from 'react-icons/bi';
import { PiLayout } from 'react-icons/pi';

const CampusTour: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'yFyIBKK361E'; // Replace with your actual YouTube video ID

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="w-full bg-[#0e3b5e] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white mb-6">
        <h2 className="text-4xl font-normal mb-3">Experience the Campus</h2>
        <p className="text-base text-gray-300">
          Explore the campus with a virtual tour & discover one among the<br />
          best college in the region.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Campus Tour Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          ) : (
            <>
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer group"
                onClick={handlePlay}
              >
                <div className="absolute left-4 bottom-4">
                  <img 
                    src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo_white.svg"
                    alt="YouTube"
                    className="h-5"
                  />
                </div>
                <div className="absolute right-4 bottom-4 flex items-center gap-2">
                  <button 
                    className="bg-white/90 text-gray-900 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-white transition-colors"
                  >
                    Watch the Full Video
                    <PiLayout size={16} />
                  </button>
                  <button 
                    className="bg-white/90 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <BiPause size={16} className="text-gray-900" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CampusTour;