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
        <section className="relative z-10 px-12 py-32 sm:px-12 md:py-36 md:px-20 xl:py-36 xl:px-44 min-h-screen w-full">
          <article className="snap-mandatory snap-y">
            {/* Hello Section */}
            <div className="snap-start grid grid-cols-8 text-lg md:text-xl lg:text-2xl xl:text-4xl font-normal">
              {/* Text Section */}
              <div className="col-span-8 lg:col-span-4 xl:col-span-5">
                <div className="animate-slidein300 opacity-0 text-neutral-50 leading-relaxed tracking-wide dark:text-neutral-900 break-words">
                  <h2 className="text-4xl sm:5xl xl:text-7xl font-semibold mb-4">Hello!</h2>
                  <p className="pt-24 text-xl leading-loose xl:text-3xl">
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
              <div className="ml-7 md:ml-0 md:col-span-3 leading-relaxed text-md sm:text-lg md:text-xl lg:col-span-4">
              <p className="text-pretty indent-2 mt-6">
                  I have built my foundation through various projects, specializing in JavaScript (React, Node.js), Python (Django), and database management (PostgreSQL, MySQL). I recently completed advanced courses in technologies such as{" "}
                  <LinkPreview url="https://nextjs.org/" className="font-bold text-teal-200 dark:text-teal-700">Next.js</LinkPreview>,{" "}
                  <LinkPreview url="https://www.typescriptlang.org/" className="font-bold text-teal-200 dark:text-teal-700">TypeScript</LinkPreview>, and{" "}
                  <LinkPreview url="https://www.chaijs.com/" className="font-bold text-teal-200 dark:text-teal-700">Chai</LinkPreview> and Mocha for Quality Assurance testing, which have equipped me with the skills to create reliable and high-performing applications. My recent projects have involved implementing real-time communication, data visualization with{" "}
                  <LinkPreview url="https://d3js.org/" className="font-bold text-teal-200 dark:text-teal-700">D3.js</LinkPreview>, and ensuring best practices in responsive design and accessibility.
                </p>
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
                    <li><LinkPreview url="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" className="font-bold text-teal-200 dark:text-teal-700">JavaScript (ES6)</LinkPreview></li>
                    <li><LinkPreview url="https://www.typescriptlang.org/" className="font-bold text-teal-200 dark:text-teal-700">TypeScript</LinkPreview></li>
                    <li><LinkPreview url="https://www.python.org/" className="font-bold text-teal-200 dark:text-teal-700">Python</LinkPreview></li>
                    <li><LinkPreview url="https://sass-lang.com/" className="font-bold text-teal-200 dark:text-teal-700">CSS/Sass</LinkPreview></li>
                    <li><LinkPreview url="https://html.spec.whatwg.org/" className="font-bold text-teal-200 dark:text-teal-700">HTML</LinkPreview></li>
                    <li><LinkPreview url="https://www.w3.org/TR/sql/" className="font-bold text-teal-200 dark:text-teal-700">SQL</LinkPreview></li>
                    <li><LinkPreview url="https://www.w3.org/TR/xml/" className="font-bold text-teal-200 dark:text-teal-700">XML</LinkPreview></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold  text-lg uppercase mb-2">Frameworks</h3>
                  <ul className="space-y-1">
                    <li><LinkPreview url="https://nextjs.org/" className="font-bold text-teal-200 dark:text-teal-700">Next.JS</LinkPreview></li>
                    <li><LinkPreview url="https://www.djangoproject.com/" className="font-bold text-teal-200 dark:text-teal-700">Django</LinkPreview></li>
                    <li><LinkPreview url="https://nodejs.org/" className="font-bold text-teal-200 dark:text-teal-700">Node</LinkPreview></li>
                    <li><LinkPreview url="https://expressjs.com/" className="font-bold text-teal-200 dark:text-teal-700">Express.js</LinkPreview></li>
                    <li><LinkPreview url="https://getbootstrap.com/" className="font-bold text-teal-200 dark:text-teal-700">Bootstrap</LinkPreview></li>
                    <li><LinkPreview url="https://tailwindcss.com/" className="font-bold text-teal-200 dark:text-teal-700">Tailwindcss</LinkPreview></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg uppercase mb-2">Libraries</h3>
                  <ul className="space-y-1">
                    <li><LinkPreview url="https://reactjs.org/" className="font-bold text-teal-200 dark:text-teal-700">React & Redux</LinkPreview></li>
                    <li><LinkPreview url="https://socket.io/" className="font-bold text-teal-200 dark:text-teal-700">Socket.io</LinkPreview></li>
                    <li><LinkPreview url="https://d3js.org/" className="font-bold text-teal-200 dark:text-teal-700">D3</LinkPreview></li>
                    <li><LinkPreview url="https://axios-http.com/" className="font-bold text-teal-200 dark:text-teal-700">Axios</LinkPreview></li>
                    <li><LinkPreview url="https://jquery.com/" className="font-bold text-teal-200 dark:text-teal-700">jQuery</LinkPreview></li>
                    <li><LinkPreview url="https://numpy.org/" className="font-bold text-teal-200 dark:text-teal-700">NumPy</LinkPreview></li>
                    <li><LinkPreview url="https://pandas.pydata.org/" className="font-bold text-teal-200 dark:text-teal-700">Pandas</LinkPreview></li>
                    <li><LinkPreview url="https://www.crummy.com/software/BeautifulSoup/" className="font-bold text-teal-200 dark:text-teal-700">BeautifulSoup</LinkPreview></li>
                    <li><LinkPreview url="https://www.sqlalchemy.org/" className="font-bold text-teal-200 dark:text-teal-700">SQLAlchemy</LinkPreview></li>
                    <li><LinkPreview url="https://scrapy.org/" className="font-bold text-teal-200 dark:text-teal-700">Scrapy</LinkPreview></li>
                    <li><LinkPreview url="https://github.com/seatgeek/fuzzywuzzy" className="font-bold text-teal-200 dark:text-teal-700">fuzzywuzzy</LinkPreview></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg snap-center uppercase mb-2">Tools</h3>
                  <ul className="space-y-1">
                    <li><LinkPreview url="https://www.gnu.org/software/bash/" className="font-bold text-teal-200 dark:text-teal-700">Bash</LinkPreview></li>
                    <li><LinkPreview url="https://git-scm.com/" className="font-bold text-teal-200 dark:text-teal-700">Git & GitHub</LinkPreview></li>
                    <li><LinkPreview url="https://www.chaijs.com/" className="font-bold text-teal-200 dark:text-teal-700">Chai</LinkPreview></li>
                    <li><LinkPreview url="https://www.kali.org/" className="font-bold text-teal-200 dark:text-teal-700">Kali Linux</LinkPreview></li>
                    <li><LinkPreview url="https://developer.chrome.com/docs/devtools/" className="font-bold text-teal-200 dark:text-teal-700">Chrome DevTools</LinkPreview></li>
                    <li><LinkPreview url="https://www.postman.com/" className="font-bold text-teal-200 dark:text-teal-700">Postman</LinkPreview></li>
                    <li><LinkPreview url="https://www.docker.com/" className="font-bold text-teal-200 dark:text-teal-700">Docker & Kubernetes</LinkPreview></li>
                    <li><LinkPreview url="https://www.mongodb.com/" className="font-bold text-teal-200 dark:text-teal-700">MongoDB</LinkPreview></li>
                    <li><LinkPreview url="https://mongoosejs.com/" className="font-bold text-teal-200 dark:text-teal-700">Mongoose</LinkPreview></li>
                    <li><LinkPreview url="https://www.postgresql.org/" className="font-bold text-teal-200 dark:text-teal-700">PostgreSQL</LinkPreview></li>
                    <li><LinkPreview url="https://www.mysql.com/" className="font-bold text-teal-200 dark:text-teal-700">MySQL</LinkPreview></li>
                    <li><LinkPreview url="https://www.sqlite.org/index.html" className="font-bold text-teal-200 dark:text-teal-700">Sqlite3</LinkPreview></li>
                    <li><LinkPreview url="https://www.atlassian.com/software/jira" className="font-bold text-teal-200 dark:text-teal-700">Jira</LinkPreview></li>
                    <li><LinkPreview url="https://www.wrike.com/" className="font-bold text-teal-200 dark:text-teal-700">Wrike</LinkPreview></li>
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
                  <h3 className="font-semibold uppercase text-lg mb-2">freeCodeCamp.com</h3>
                  <ul className="space-y-1">
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/responsive-web-design" className="font-bold text-teal-200 dark:text-teal-700">Responsive Web Design</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/javascript-algorithms-and-data-structures-v8" className="font-bold text-teal-200 dark:text-teal-700">JS Algorithms and Data Structures</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/front-end-development-libraries" className="font-bold text-teal-200 dark:text-teal-700">Front End Development Libraries Certification</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/data-visualization" className="font-bold text-teal-200 dark:text-teal-700">Data Visualization</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/back-end-development-and-apis" className="font-bold text-teal-200 dark:text-teal-700">Back End Development and APIs</LinkPreview></li>
                    <li><LinkPreview url="https://www.freecodecamp.org/certification/agmt/quality-assurance-v7" className="font-bold text-teal-200 dark:text-teal-700">Quality Assurance & Advanced Node</LinkPreview></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold  text-lg uppercase mb-2">Dr.Chuck U-Mich</h3>
                  <ul className="space-y-1">
                    <li><LinkPreview url="https://www.dj4e.com/" className="font-bold text-teal-200 dark:text-teal-700">DJ4E</LinkPreview></li>
                    <li>Django For Everybody</li>
                    <li><LinkPreview url="https://www.pg4e.com/" className="font-bold text-teal-200 dark:text-teal-700">PG4E</LinkPreview></li>
                    <li>Postgres For Everybody</li>
                    <li><LinkPreview url="https://www.py4e.com/" className="font-bold text-teal-200 dark:text-teal-700">PY4E</LinkPreview></li>
                    <li><LinkPreview
                        url="/templates"
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
                    <li><LinkPreview url="https://www.adobe.com/products/photoshop-lightroom.html" className="font-bold text-teal-200 dark:text-teal-700">Lightroom</LinkPreview></li>
                    <li><LinkPreview url="https://www.adobe.com/products/photoshop.html" className="font-bold text-teal-200 dark:text-teal-700">Photoshop</LinkPreview></li>
                    <li><LinkPreview url="https://www.apple.com/final-cut-pro/" className="font-bold text-teal-200 dark:text-teal-700">Final Cut</LinkPreview></li>
                    <li><LinkPreview url="https://www.image-line.com/fl-studio/" className="font-bold text-teal-200 dark:text-teal-700">FL Studio</LinkPreview></li>
                    <li><LinkPreview url="https://www.adobe.com/products/audition.html" className="font-bold text-teal-200 dark:text-teal-700">Audition</LinkPreview></li>
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