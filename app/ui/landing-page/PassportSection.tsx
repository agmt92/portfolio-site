import React from "react";
import Image from "next/image";
import imageUrl from "@/public/photos/ava.webp";
import Link from "next/link";
import { FaProjectDiagram, FaBriefcase, FaInfoCircle } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/app/ui/components/3d-card";
import { BackgroundBeamsWithCollision } from "@/app/ui/components/background-beams-with-collision";

export default function PassportSection() {

  return (
    <BackgroundBeamsWithCollision>
      <CardContainer className="inter-var">
        <CardBody className="snap-always snap-start flex flex-col bg-gradient-to-t from-stone-600 via-stone-800 to-english-walnut-900 dark:bg-gradient-to-b dark:from-stone-100 dark:to-slate-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem]  rounded-xl px-6 m-4 min-h-[80vh]">
          <CardItem
            translateZ="100"
            className="text-xl font-bold mt-4 text-white dark:text-neutral-600"
          >
            Mohamed Tarek AbdelGhani
          </CardItem>
          <CardItem
            as="p"
            translateZ="80"
            className="text-neutral-300 text-sm max-w-sm my-2 dark:text-neutral-500"
          >
            Passionate Software developer specializing in scalable web-apps. Learn more{" "}
            <span className="whitespace-pre"> </span>
            <Link href="/about" className="text-emerald-500 inline-flex dark:text-emerald-400 items-center">
                <FaInfoCircle className="mr-2 self-baseline" /> about me.
              </Link>
          </CardItem>
          <CardItem
            translateZ="150"
            rotateX={0}
            rotateZ={0}
            className="w-full my-2 min-h-[5vh] "
          >
            <Image
              src={imageUrl}
              placeholder="blur"
              className="object-cover object-[5%_30%] max-h-[50vh]  rounded-xl group-hover/card:shadow-xl"
              alt="Avatar"
            />
          </CardItem>
          <div className="flex justify-between h-24 items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={-40}
              as={Link}
              href="/experience"
              className="px-6 md:px-12 py-6 rounded-xl text-xs font-bold dark:text-black text-white dark:bg-white bg-black hover:bg-gray-800 dark:hover:bg-gray-300 transition-all duration-200"
            >
              <FaBriefcase className="inline-block mr-2" />
              Experience
            </CardItem>
            <CardItem
              translateZ={20}
              translateX={40}
              as={Link}
              href="/projects"
              className="px-6 md:px-16 py-6 rounded-xl text-xs font-semibold bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <FaProjectDiagram className="inline-block mr-2" />
              Projects
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </BackgroundBeamsWithCollision>
  );
}