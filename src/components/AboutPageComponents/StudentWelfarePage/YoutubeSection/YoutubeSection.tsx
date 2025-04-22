"use client"
import React, { useState } from 'react';
import { BiPause } from 'react-icons/bi';
import { PiLayout } from 'react-icons/pi';

const YoutubeSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = '7TWKKww-F30'; // Replace with your actual YouTube video ID

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="w-full  py-16 px-4">
     

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
                <div className="absolute left-10 bottom-7">
                  <img 
                    src="/svgs/logos/yt.svg"
                    alt="YouTube"
                    className="h-5"
                  />
                </div>
                <div className="absolute right-4 bottom-4 flex items-center gap-2">
                  <button 
                    className="bg-transparent text-white border-white border-[1px] backdrop:backdrop-blur-sm  rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    Watch the Full Video
                  </button>
                  <button 
                    className="bg-white rounded-full w-8 h-8 flex items-center justify-center  transition-colors"
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

export default YoutubeSection;