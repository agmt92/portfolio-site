"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { FaGithub } from "react-icons/fa";

export default function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 dark:bg-white sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-200 dark:text-neutral-700 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 dark:text-neutral-600 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.githubLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-gray-800 text-white flex items-center"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-600 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl my-6 mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-800 dark:hover:bg-neutral-50 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200 dark:text-neutral-800 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${id}-${index}`}
                  className="text-neutral-400 dark:text-neutral-600 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Full-Stack",
    title: "MedLb",
    src: "/projects/medlb.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.pythonanywhere.com/",
    githubLink: "https://github.com/agmt92/MedLb",
    tags: "django, mysql, python, pycharm",
    content: () => {
      return (
        <p>
          Full-stack application for a Medication and Pharmacies database.
        </p>
      );
    },
  },
  {
    description: "Full-Stack",
    title: "NextJS Dashboard",
    src: "/projects/dashboardapp.webp",
    ctaText: "Visit",
    ctaLink: "https://next-dashboard-app-gray.vercel.app/",
    githubLink: "https://github.com/agmt92/next-dashboard-app",
    tags: "nextjs, postgres, typescript",
    content: () => {
      return (
        <p>
          A dashboard app based on a NextJS boilerplate.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "Drum Machine",
    src: "/projects/drummachine.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/drum-machine/",
    githubLink: "https://github.com/agmt92/drum-machine",
    tags: "react, redux, javascript",
    content: () => {
      return (
        <p>
          A drum machine built using React.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "QT Machine",
    src: "/projects/quote.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/qt_machine/",
    githubLink: "https://github.com/agmt92/qt_machine",
    tags: "react, nodejs, javascript",
    content: () => {
      return (
        <p>
          An app that random fetches quotes from an API.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "Markdown Previewer",
    src: "/projects/markdown.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/markdown-previewer/",
    githubLink: "https://github.com/agmt92/markdown-previewer",
    tags: "react, javascript",
    content: () => {
      return (
        <p>
          A Markdown previewer built using React.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "JavaScript Calculator",
    src: "/projects/calc.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/js-calculator/",
    githubLink: "https://github.com/agmt92/js-calculator",
    tags: "react, redux, javascript",
    content: () => {
      return (
        <p>
          A calculator built using JavaScript, React, and Redux.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "US GDP Visualization",
    src: "/projects/usgraph.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/us-gdp-d3/",
    githubLink: "https://github.com/agmt92/us-gdp-d3",
    tags: "d3, svg, javascript",
    content: () => {
      return (
        <p>
          A D3.js project visualizing US GDP data.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "Kickstarter Pledges Treemap",
    src: "/projects/kickstarter.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/kickstarter-pledges-treamap-d3/",
    githubLink: "https://github.com/agmt92/kickstarter-pledges-treamap-d3",
    tags: "d3, svg, javascript",
    content: () => {
      return (
        <p>
          A D3.js project visualizing Kickstarter pledges.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "Heatmap",
    src: "/projects/globalwarm.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/heatmap-d3/",
    githubLink: "https://github.com/agmt92/heatmap-d3",
    tags: "d3, svg, javascript",
    content: () => {
      return (
        <p>
          A D3.js project visualizing heatmap data.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "US Education Map",
    src: "/projects/usedu.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/us-edu-map-d3/",
    githubLink: "https://github.com/agmt92/us-edu-map-d3",
    tags: "d3, svg, javascript",
    content: () => {
      return (
        <p>
          A D3.js project visualizing US education data.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "Cycling Doping Data",
    src: "/projects/doping.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/cycling-doping-d3/",
    githubLink: "https://github.com/agmt92/cycling-doping-d3",
    tags: "d3, svg, javascript",
    content: () => {
      return (
        <p>
          A D3.js project visualizing cycling doping data.
        </p>
      );
    },
  },
  {
    description: "Front-End",
    title: "30mins Clock (POMODORO)",
    src: "/projects/pomodoro.webp",
    ctaText: "Visit",
    ctaLink: "https://agmt92.github.io/30mins-clock/",
    githubLink: "https://github.com/agmt92/30mins-clock",
    tags: "react, redux, javascript",
    content: () => {
      return (
        <p>
          A clock application built using React.
        </p>
      );
    },
  },
  {
    description: "Back-End",
    title: "Request Header Parser",
    src: "/projects/headparser.webp",
    ctaText: "Visit",
    ctaLink: "https://headparser-513880413aff.herokuapp.com/",
    githubLink: "https://github.com/agmt92/boilerplate-project-headerparser",
    tags: "express, javascript",
    content: () => {
      return (
        <p>
          A microservice to parse request headers.
        </p>
      );
    },
  },
  {
    description: "Back-End",
    title: "Timestamp Microservice",
    src: "/projects/timestamp.webp",
    ctaText: "Visit",
    ctaLink: "https://timestamp-microservice-aaa1392706ce.herokuapp.com/",
    githubLink: "https://github.com/agmt92/boilerplate-project-timestamp",
    tags: "express, javascript",
    content: () => {
      return (
        <p>
          A microservice to convert timestamps.
        </p>
      );
    },
  },
  {
    description: "Back-End",
    title: "Exercise Tracker",
    src: "/projects/exercise.webp",
    ctaText: "Visit",
    ctaLink: "https://exercise-tracker-hrk-2942297fa708.herokuapp.com/",
    githubLink: "https://github.com/agmt92/-GitHub-b-boilerplate-project-exercisetracker-",
    tags: "express, javascript, mongodb",
    content: () => {
      return (
        <p>
          A microservice to track exercises.
        </p>
      );
    },
  },
  {
    description: "Back-End",
    title: "File Metadata Microservice",
    src: "/projects/filemetadata.webp",
    ctaText: "Visit",
    ctaLink: "https://filemetada-microservice-0402d86def70.herokuapp.com/",
    githubLink: "https://github.com/agmt92/filemetadata-microservice",
    tags: "express, javascript, mongodb",
    content: () => {
      return (
        <p>
          A microservice to get file metadata.
        </p>
      );
    },
  },
  {
    description: "Back-End",
    title: "URL Shortener",
    src: "/projects/urlshort.webp",
    ctaText: "Visit",
    ctaLink: "https://cut-2c183dc1c6a9.herokuapp.com/",
    githubLink: "https://github.com/agmt92/boilerplate-project-urlshortener",
    tags: "express, javascript, mongodb",
    content: () => {
      return (
        <p>
          A microservice to shorten URLs.
        </p>
      );
    },
  },
  {
    description: "Quality Assurance with Advanced Node and Express",
    title: "Metric-Imperial Converter",
    src: "/projects/metrconverter.webp",
    ctaText: "Visit",
    ctaLink: "https://metricimp-converter-f60d333613cf.herokuapp.com/",
    githubLink: "https://github.com/agmt92/metric-imp-converter?tab=readme-ov-file",
    tags: "nodejs, express, javascript",
    content: () => {
      return (
        <p>
          A web application to convert between metric and imperial units.
        </p>
      );
    },
  },
  {
    description: "Quality Assurance with Advanced Node and Express",
    title: "Issue Tracker",
    src: "/projects/issuetracker.webp",
    ctaText: "Visit",
    ctaLink: "https://tranquil-bayou-97588-ed0d7e6ffb37.herokuapp.com/",
    githubLink: "https://github.com/agmt92/issue-tracker",
    tags: "nodejs, express, mongodb, javascript",
    content: () => {
      return (
        <p>
          A web application to track issues.
        </p>
      );
    },
  },
  {
    description: "Quality Assurance with Advanced Node and Express",
    title: "Personal Book Library",
    src: "/projects/library.webp",
    ctaText: "Visit",
    ctaLink: "https://project-library-32705ad865b6.herokuapp.com/",
    githubLink: "https://github.com/agmt92/project-library",
    tags: "nodejs, express, mongodb, javascript",
    content: () => {
      return (
        <p>
          A web application to manage a personal book library.
        </p>
      );
    },
  },
  {
    description: "Quality Assurance with Advanced Node and Express",
    title: "Sudoku Solver",
    src: "/projects/soduku.webp",
    ctaText: "Visit",
    ctaLink: "https://sodoku-solver-8bd9620b34c6.herokuapp.com/",
    githubLink: "https://github.com/agmt92/sodoku-solver",
    tags: "nodejs, express, javascript",
    content: () => {
      return (
        <p>
          A web application to solve Sudoku puzzles.
        </p>
      );
    },
  },
  {
    description: "Quality Assurance with Advanced Node and Express",
    title: "American British Translator",
    src: "/projects/usbrittrans.webp",
    ctaText: "Visit",
    ctaLink: "https://eng-brit-translator-98c5db572423.herokuapp.com/",
    githubLink: "https://github.com/agmt92/us-brit-translator",
    tags: "nodejs, express, javascript",
    content: () => {
      return (
        <p>
          A web application to translate text between American and British English.
        </p>
      );
    },
  },
];