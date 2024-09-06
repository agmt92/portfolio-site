"use client";

import React, { useRef, useEffect, useState } from 'react';
import { FlipWords } from '@/app/ui/components/flip-words';
import Image from 'next/image';
import 'react-loading-skeleton/dist/skeleton.css';
import Loading from '@/app/ui/landing-page/loading/loading';
import '@/global.css'

const imageUrl = "/videos/vid1.webp";

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSmOrLarger, setIsSmOrLarger] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmOrLarger(window.innerWidth >= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!isLoading && video) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollPosition / maxScroll;
        const adjustedScrollFraction = scrollFraction * 3;

        if (Number.isFinite(adjustedScrollFraction) && Number.isFinite(video.duration)) {
          video.currentTime = adjustedScrollFraction * video.duration;
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

      observer.observe(video);

      return () => {
        observer.unobserve(video);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isSmOrLarger, isLoading]);

  const words = [
    "Responsive", "Fast", "Secure", "Tested", "Accessible",
    "Modern", "Dynamic", "Static", "Progressive"
  ];
  // 16:9 aspect ratio
  const skeletonHeight = `${0.375 * 100}vw`;

  return (
    <div className="relative left-0 w-full z-[-1]"
    style={{ height: skeletonHeight }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        isSmOrLarger && (
          <video
            ref={videoRef}
            className="hidden sm:block w-full h-auto object-contain"
            muted
            playsInline
          >
            <source src="/videos/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )}
      <Image
        src={imageUrl}
        className="block sm:hidden w-full h-auto object-contain"
        alt="Avatar"
        width={1080}
        height={405}
        sizes={"100vw"}
        quality={100}
        priority={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mx-auto font-normal text-zinc-300">
          <span className="inline-block text-center subpixel-antialiased">
            <FlipWords
              words={words}
              duration={3000}
              className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-widest font-black text-white"
            />
          </span><br />Web Applications
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;