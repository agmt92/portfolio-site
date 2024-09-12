"use Client";

import React from "react";
import AuroraBG from "../ui/about-me/aurorobackground";
import Image from "next/image";
import { TypewriterEffect } from "../ui/about-me/TypewriterEffect";
import { LinkPreview } from "../ui/about-me/link-preview";

export default function Page() {
  const words = [
    {
      text: "Mohamed Tarek Abdelghani,",
    },
    {
      text: "AG,",
    },
  ];

  return (
    <main className="relative select-none flex-auto min-h-fit overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora-bg">
      <AuroraBG />
        <section className="relative z-10 px-6 py-32 sm:px-12 md:py-36 md:px-20 xl:py-36 xl:px-44 min-h-screen w-full">
          <article className="snap-mandatory snap-y">
            {/* Hello Section */}
            <div className="snap-start grid grid-cols-8 text-lg md:text-xl lg:text-2xl xl:text-4xl font-normal">
              {/* Text Section */}
              <div className="col-span-8 lg:col-span-4 xl:col-span-5">
                <div className="text-neutral-50 leading-relaxed tracking-wide dark:text-neutral-900 break-words">
                  <h2 className="text-4xl sm:5xl xl:text-7xl font-semibold mb-4">Hello!</h2>
                  <p className="pt-24 text-md sm:text-lg leading-loose xl:text-3xl">
                    I&apos;m{" "}
                    <span className="text-stone-50 xl:tracking-widest dark:text-neutral-900 font-black">
                      <TypewriterEffect words={words} />
                    </span><br />
                    a highly adaptable full-stack developer with expertise spanning diverse front-end and back-end technologies, with a strong emphasis on delivering efficient, scalable, and intuitive applications.
                  </p>
                  <p className="mt-4 tracking-wider pt-20">
                    Contact me at{" "}
                    <a
                      href="mailto:agmt@dr.com"
                      className="text-stone-50 underline decoration-teal-500 dark:text-neutral-900 font-black"
                    >
                      agmt@dr.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="hidden lg:col-start-7 lg:col-span-2 lg:pt-28 lg:block">
                <Image
                  src="/photos/ava.webp"
                  alt="Mohamed Tarek Abdelghani"
                  width={200}
                  height={200}
                  quality={100}
                  className="animate-slideleft opacity-0 rounded-full w-full"
                />
              </div>
            </div>

            {/* Background Section */}
            <div className="text-stone-50 dark:text-neutral-900 snap-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-44 lg:mt-80 animate-slidein700 opacity-0 md:gap-12">
              <h2 className="lg:col-span-1 text-2xl uppercase font-bold">
                Background
              </h2>
              <div className="md:ml-0 md:col-span-3 leading-relaxed text-md sm:text-lg md:text-xl lg:col-span-4">
                <div className="text-pretty indent-2 mt-6">
                  I have built my foundation through various projects, specializing in JavaScript (React, Node.js), Python (Django), and database management (PostgreSQL, MySQL). I recently completed advanced courses in technologies such as{" "}
                  <span className="font-bold ">Next.js</span>,{" "}
                  <span className="font-bold ">TypeScript</span>, and{" "}
                  <span className="font-bold ">Chai</span> and Mocha for Quality Assurance testing, which have equipped me with the skills to create reliable and high-performing applications. My recent projects have involved implementing real-time communication, data visualization with{" "}
                  <span className="font-bold ">D3.js</span>, and ensuring best practices in responsive design and accessibility.
                </div>
                <p className="mt-4 text-pretty">
                  My early exposure to programming languages as a child has allowed me to quickly adapt to new frameworks and technologies. I thrive on the challenge of adopting different tools based on the diverse needs of my projects, ensuring that I&apos;m always learning and pushing the boundaries of what I can achieve.
                </p>
                <p className="mt-4 text-pretty">
                  When I&apos;m not in front of a computer screen, I&apos;m probably out with my camera, hiking, walking, or just flaneuring another unknown alley in a city across the globe.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="text-stone-50 dark:text-neutral-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-72 md:mt-80 animate-slidein700 opacity-0 gap-12">
              <h2 className="uppercase tracking-widest text-2xl font-bold">Skills</h2>
              <div className="col-span-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold text-lg uppercase mb-2">Languages</h3>
                  <ul className="space-y-1">
                    <li>JavaScript (ES6)</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>CSS/Sass</li>
                    <li>HTML</li>
                    <li>SQL</li>
                    <li>XML</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold  text-lg uppercase mb-2">Frameworks</h3>
                  <ul className="space-y-1">
                    <li>Next.JS</li>
                    <li>Django</li>
                    <li>Socket.io</li>
                    <li>Express.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg uppercase mb-2">Libraries</h3>
                  <ul className="space-y-1">
                    <li>React & Redux</li>
                    <li>D3</li>
                    <li>Axios</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Tailwindcss</li>
                    <li>NumPy</li>
                    <li>Pandas</li>
                    <li>BeautifulSoup</li>
                    <li>SQLAlchemy</li>
                    <li>Scrapy</li>
                    <li>fuzzywuzzy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg snap-center uppercase mb-2">Tools</h3>
                  <ul className="space-y-1">
                    <li>Bash</li>
                    <li>Git & GitHub</li>
                    <li>Chai</li>
                    <li>Kali Linux</li>
                    <li>Chrome DevTools</li>
                    <li>Postman</li>
                    <li>Docker & Kubernetes</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>Sqlite3</li>
                    <li>Jira</li>
                    <li>Wrike</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="text-stone-50 dark:text-neutral-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-32 animate-slidein700 opacity-0 gap-12">
              <h2 className="uppercase tracking-widest md:tracking-widest lg:tracking-normal xl:tracking-wide text-2xl font-bold">
                Certificates & Badges
              </h2>
              <div className="col-span-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold uppercase text-lg mb-2">freeCodeCamp</h3>
                  <ul className="space-y-1">
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/responsive-web-design"
                     imageSrc="/certs/wd.webp"
                     isStatic
                     className="font-bold text-teal-200 dark:text-teal-700">Responsive Web Design</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/javascript-algorithms-and-data-structures-v8" 
                    imageSrc="/certs/js.webp"
                    isStatic
                    className="font-bold text-teal-200 dark:text-teal-700">JS Algorithms and Data Structures</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/front-end-development-libraries" 
                    imageSrc="/certs/front.webp"
                    isStatic
                    className="font-bold text-teal-200 dark:text-teal-700">Front End Development Libraries Certification</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/data-visualization" 
                    imageSrc="/certs/dv.webp"
                    isStatic
                    className="font-bold text-teal-200 dark:text-teal-700">Data Visualization</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/back-end-development-and-apis" 
                    imageSrc="/certs/back.webp"
                    isStatic
                    className="font-bold text-teal-200 dark:text-teal-700">Back End Development and APIs</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/quality-assurance-v7" 
                    imageSrc="/certs/qa.webp"
                    isStatic
                    className="font-bold text-teal-200 dark:text-teal-700">Quality Assurance & Advanced Node</LinkPreview></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold  text-lg uppercase mb-2">Dr.Chuck U-Mich</h3>
                  <ul className="space-y-1">
                    <li>DJ4E</li>
                    <li>Django For Everybody</li>
                    <li>PG4E</li>
                    <li>Postgres For Everybody</li>
                    <li>PY4E</li>
                    <li><LinkPreview
                        url="https://www.py4e.com/tsugi/badges/images/2f2f425332786238776c4e32674d4d4c45334451454e6955666f474c306b64354e537762705335786259374c6a646b68624b796559514f776632755a6b6d583041636956474770725076364561362b586651784f58365533763067754e59334d31665553317836546746773d.png"
                        imageSrc="/photos/6253354a692b62727166394a4342616f326749484b364e78416e6d424241784d463035714e4e4975514c666a596e525672506e5856422b2b53797a6c5a36775a4544382b4a362b5547324b4f74434b497446504142454646516b7049656465722f4c6568572b474d446b6f3d.png"
                        isStatic
                        className="font-bold text-teal-200 dark:text-teal-700"
                      > Python For Everybody</LinkPreview></li>
                    </ul>
                </div>
              </div>
            </div>

            {/* Other Section */}
            <div className="text-stone-50 dark:text-neutral-900 snap-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-24 animate-slidein700 opacity-0 gap-12">
              <h2 className="uppercase tracking-widest text-2xl font-bold">Other</h2>
              <div className="col-span-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 lg:gap-x-8 sm:gap-x-8">
                <div>
                  <h3 className="font-semibold uppercase mb-2 text-lg">I Speak</h3>
                  <ul className="space-y-1">
                    <li>English</li>
                    <li>عربي</li>
                    <li>Deutsch(B2)</li>
                    <li>Português(B1)</li>
                    <li>Русский(B1)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold uppercase mb-2 text-lg">Other Tools</h3>
                  <ul className="space-y-1">
                    <li>Lightroom</li>
                    <li>Photoshop</li>
                    <li>Final Cut</li>
                    <li>FL Studio</li>
                    <li>Audition</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}