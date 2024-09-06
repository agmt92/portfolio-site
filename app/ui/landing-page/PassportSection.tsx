import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/app/ui/components/3d-card";
import { BackgroundBeamsWithCollision } from "@/app/ui/components/background-beams-with-collision";

export default function PassportSection() {
  const imageUrl = "/photos/ava.webp";

  return (
    <BackgroundBeamsWithCollision>
      <CardContainer className="inter-var">
        <CardBody className="w-[18rem] h-[24rem] grid-flow-col sm:w-[30rem] sm:h-[40rem] md:w-[37rem] md:h-[48rem] md:flex-row lg:w-[50rem] lg:h-[30rem] lg:flex rounded-t-3xl rounded-b-full sm:rounded-bl-3xl sm:rounded-r-md bg-gradient-to-r from-english-walnut-900 via-english-walnut-700 to-english-walnut-800 relative group/card hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
          <div className="flex-1">
            <CardItem
              translateZ="60"
              className="mx-6 mt-6 lg:text-2xl md:text-xl sm:text-lg font-bold text-white animate-fade-in"
            >
              Mohamed Tarek AbdelGhani
            </CardItem>
            <CardItem
              as="p"
              translateZ="50"
              className="mx-6 mb-6 text-neutral-200 text-lg max-w-sm mt-2 dark:text-neutral-300 animate-slide-in"
            >
              Passionate Software developer specializing in web development and design. Let{`'`}s build something amazing together!
            </CardItem>
          </div>
          <CardItem
            translateZ="150"
            rotateX={0}
            rotateZ={0}
            className="w-full h-[22rem] sm:w-[30rem] sm:h-[30rem] md:w-[37rem] md:h-[38rem] lg:w-[25rem] lg:h-[30rem] rounded-full sm:rounded-bl-3xl sm:rounded-r-md shadow-xl relative"
          >
            <Image
              src={imageUrl}
              fill
              className="rounded-b-full sm:rounded-bl-3xl sm:rounded-r-md md:rounded-r-md lg:rounded-bl-sm md:h-[20rem] object-cover group-hover/card:shadow-xl"
              alt="Avatar"
              priority={false}
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </BackgroundBeamsWithCollision>
  );
}