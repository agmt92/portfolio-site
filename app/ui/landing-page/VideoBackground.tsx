"use client";

import React, { useRef, useEffect } from 'react';
import { FlipWords } from '@/app/ui/components/flip-words';

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      if (video) {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollPosition / maxScroll;
        const adjustedScrollFraction = scrollFraction * 3;
    
        if (Number.isFinite(adjustedScrollFraction) && Number.isFinite(video.duration)) {
          video.currentTime = adjustedScrollFraction * video.duration;
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.01 }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const words = [
    "Responsive", "Fast", "Secure", "Tested", "Accessible",
    "Modern", "Dynamic", "Static", "Progressive"
  ];

  return (
    <div className="relative left-0 w-full h-auto z-[-1]">
      <video
        ref={videoRef}
        className=" w-full h-auto object-contain"
        muted
        playsInline
      >
        <source src="/videos/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mx-auto font-normal text-zinc-300"> 
          <span className="inline-block text-center subpixel-antialiased"> 
            <FlipWords words={words} duration={3000} className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-widest font-black text-white" />
          </span><br />Web Applications
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;