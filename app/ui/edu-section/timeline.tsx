"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export const experimental_ppr = true 

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const VideoComponent = ({ src }: { src: string }) => {
  return (
    <video
      className="absolute top-0 right-0 w-full h-[20rem] sm:h-[20rem] md:h-[30rem] object-cover z-0"
      autoPlay
      loop
      muted
      poster="/videos/child_astronaut.webp"
      playsInline
      webkit-playsinline="true"
      controlsList="nodownload"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative w-full bg-neutral-950 dark:bg-white font-sans md:px-10" ref={containerRef}>
      <Suspense fallback={
        <Image 
          src="/videos/child_astronaut.webp"
          alt="Child astronaut"
          width={1280}
          height={720}
          layout="responsive"
          className="absolute top-0 right-0 w-full h-[20rem] sm:h-[20rem] md:h-[30rem] object-cover z-0"
        />
      }>
        <VideoComponent src="/videos/child_astronaut.mp4" />
      </Suspense>
      <div className="absolute top-0 right-0 w-full h-[20rem] sm:h-[20rem] md:h-[30rem] bg-gradient-to-br from-black/70 to-black/10 z-10" />
      <div className="absolute top-[20rem] sm:top-[20rem] md:top-[30rem] left-0 w-full h-px bg-gradient-to-r from-slate-800 to-fuchsia-300 z-10" />

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-black max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-300 dark:text-neutral-700 text-sm md:text-base max-w-sm">
          I&apos;ve been a passionate amateur programmer from my early years and decided recently to embark on a professional pathway that can bring effective solutions to your problems. Here&apos;s
          a timeline of my recent journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 dark:bg-neutral-200 border border-neutral-700 dark:border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 dark:via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};