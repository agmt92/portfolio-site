import React from "react";
import Image from "next/image";
import Lamp from "@/app/ui/components/lamp";

const logos = [
  "/dev-logos/bitwarden-svgrepo-com.svg",
  "/dev-logos/svgrepo-com.svg",
  "/dev-logos/chaijs-ar21.svg",
  "/dev-logos/jestjsio-icon.svg",
  "/dev-logos/kubernetes-ar21.svg",
  "/dev-logos/docker-ar21.svg",
  "/dev-logos/heroku-ar21.svg",
  "/dev-logos/codepen-ar21.svg",
  "/dev-logos/html-5-svgrepo-com.svg",
  "/dev-logos/css3-02-svgrepo-com.svg",
  "/dev-logos/sass-lang-ar21.svg",
  "/dev-logos/d3js-ar21.svg",
  "/dev-logos/github-svgrepo-com.svg",
  "/dev-logos/git-scm-ar21.svg",
  "/dev-logos/gnu_bash-official.svg",
  "/dev-logos/sqlite-ar21.svg",
  "/dev-logos/npmjs-ar21.svg",
  "/dev-logos/linux-icon.svg",
  "/dev-logos/express-svgrepo-com.svg",
  "/dev-logos/socketio-ar21.svg",
  "/dev-logos/mysql-horizontal.svg",
  "/dev-logos/mongodb-ar21.svg",
  "/dev-logos/django-icon-svgrepo-com.svg",
  "/dev-logos/nextjs-ar21.svg",
  "/dev-logos/react-svgrepo-com.svg",
  "/dev-logos/python.svg",
  "/dev-logos/javascript.svg",
  "/dev-logos/typescript.svg",
];

export default function LogosConveyer() {
  return (
    <div className="relative snap-always snap-start w-full h-auto bg-gray-900 overflow-hidden">
      {/* Container for Lamp and Logos */}
      <div className="relative w-full h-full">
        {/* Lamp component, lower z-index */}
        <Lamp />

        {/* Logos conveyor, higher z-index */}
        <div className="absolute bottom-24 h-auto gap-x-80 size-max flex justify space-x-12 animate-scroll z-10">
          {logos.map((logo, index) => (
            <div key={index} className="h-auto">
              <Image
                src={logo}
                alt={`Logo ${index}`}
                width={320}
                height={320}
                priority={false}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-contain dark:grayscale dark:invert dark:contrast-50"
                style={{ width: "10rem", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-full dark:bg-gradient-to-b dark:from-black/70 dark:to-zinc-300"/>
    </div>
  );
}