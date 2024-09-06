"use client";

import { Timeline } from "../ui/about-section/timeline";
import React from "react";
import Image from "next/image";

export const experimental_ppr = true

export default function Page() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="h-0 w-0"></div>
      ),
    },
    {
      title: "Recently",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Completed the Next.JS Canary course. Learning the latest features, technologies and best practices for Next.JS Prerelease 15 canary version and using TypeScript as a programming language. <br />
            Thanks to this collaboration between Facebook&#39;s React team and Vercel&#39;s Next JS team, those new features and solutions elevate the user experience, performance, SEO and accessibility of their website.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/timeline/nextjs.webp"
              alt="Next.JS Canary Logo"
              width={500}
              height={500}
              priority={true}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/typescript.webp"
              alt="TypeScript and Eslint Logo"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/unlighthouse.webp"
              alt="Unlighthouse Score"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/tailwindcss.webp"
              alt="Tailwind css logo"
              width={500}
              height={400}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
          As my programs and apps became complex, I wanted to make sure they are tested, to make sure any updates don&#39;t break their original functionality. <br /> 
To address this, I took the <strong>Quality Assurance Certification</strong> from freeCodeCamp, where I learned how to write tests using <strong>Chai</strong>, ensuring that my applications behaved exactly as I expected under different scenarios. <br /> 
One of the key projects in this certification was building a full-fledged chat application, where I gained hands-on experience with advanced concepts in <strong>Node.js</strong> and <strong>Express.js</strong>. I used <strong>Pug</strong> as the template engine for rendering dynamic content, implemented <strong>Passport</strong> for authentication, and integrated <strong>Socket.io</strong> for real-time communication between the server and clients. <br />
This comprehensive learning experience equipped me with practical tools and techniques to maintain the integrity and reliability of my web applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
            <Image
              src="/timeline/mocha_chai.png"
              alt="Chai Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/expressjs.webp"
              alt="Express Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/socketio.webp"
              alt="socket.io logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/nodejs.webp"
              alt="Node.JS logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Early August",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
          In a previous Django project, I used <strong>D3.js</strong> for data visualization but wanted to dive deeper into creating my own SVGs and mastering the art of displaying data beautifully. <br />
To refine my skills, I pursued the <strong>Data Visualization Certification</strong> from freeCodeCamp. Here, I learned to build charts, graphs, and maps using D3.js, as well as working with data online through APIs and JSON. <br />
This course gave me the best practices for transforming raw data into clear, engaging visualizations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
            <Image
              src="/timeline/d3.webp"
              alt="Build a heatmap with D3.js"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/datavisual_art.webp"
              alt="Data Visual Artwork"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/ajax.webp"
              alt="XML for AJAX Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/json.webp"
              alt="JSON logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "July",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
          Having already worked with HTML, CSS, and JavaScript, I aimed to enhance my front-end skills by learning the most popular libraries in the industry. <br />
Through the <strong>Front End Development Libraries Certification</strong> at freeCodeCamp, I learned how to style websites quickly and extend CSS with <strong>Scss & Sass</strong> for added logic and flexibility. <br />
I also built several projects, including a shopping cart, while mastering <strong>React</strong> and <strong>Redux</strong> to create powerful and complex Single Page Applications (SPAs).
          </p>
          <div className="grid grid-cols-2 gap-4">
            
            <Image
              src="/timeline/reactjs.webp"
              alt="React JS Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/redux.webp"
              alt="Redux Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/sass.webp"
              alt="SASS Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/scss.webp"
              alt="scss logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "June",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
          In my teenage years I coded extensively with Microsoft&#39;s legacy <strong>JScript</strong> (ECMAScript 3) to build Microsoft products, namely <strong>Messenger Plus</strong> plugins, I wanted to deepen my understanding of modern JavaScript. <br />
The <strong>JavaScript Algorithms and Data Structures Certification</strong> from freeCodeCamp extended my knowledge, particularly in implementing <strong>ES6</strong> features. <br />
In addition to revisiting fundamentals like arrays, objects, and functions, I strengthened my skills in <strong>Object-Oriented Programming (OOP)</strong>, <strong>Functional Programming</strong>, and working with APIs and local storage, helping me build more dynamic, interactive applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
            <Image
              src="/timeline/msn_messenger.webp"
              alt="Windows Messenger Plus knocking on the screen plugin"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/es6.png"
              alt="ES6 Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/code.webp"
              alt="Code Screen Creator: rawpixel.com / Markus Spiske "
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/4pillars.webp"
              alt="4 pillars of Object Oriented Programming - wikipedia"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "May",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
          Upon a Senior Programmer&#39;s advice, I started the formal learning path on <strong>freeCodeCamp</strong>, beginning with the <strong>Responsive Web Design Certification</strong> curriculum, which focused primarily on <strong>CSS</strong> and responsive design. <br />
        Starting with foundational projects like a cat photo app, I deepened my knowledge of CSS by learning modern techniques such as <strong>CSS variables</strong> while building a penguin, and best practices for accessibility with a quiz site. <br />
        I mastered responsive design by creating a photo gallery using <strong>Flexbox</strong>, for example, and a magazine article layout using <strong>CSS Grid</strong>, ensuring that webpages adapt smoothly across different screen sizes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
            <Image
              src="/timeline/css.webp"
              alt="CSS3 Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/HTML5.webp"
              alt="HTML5 Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/fcc_image.webp"
              alt="freeCodeCamp Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/qlarson.webp"
              alt="Quincy Larson Attribution"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "April",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
          In April 2024, I completed the <strong>PostgreSQL for Everybody (PG4E)</strong> course, an advanced exploration into the world of relational databases. <br />
        Building on my prior experience with <strong>MySQL</strong> and <strong>Sqlite3</strong> from the PY4E and DJ4E courses, this course challenged me to work with databases containing millions of entries. I tested the speed, performance, and scalability of large datasets, diving deep into performance optimization. <br />
        From handling complex multi-table SQL relationships to working with JSON and APIs through Python, this course sharpened my skills in managing vast amounts of data efficiently, preparing me for real-world database challenges in production environments.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
            <Image
              src="/timeline/pgsql_artwork.webp"
              alt="Postgresql Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/datacenter.webp"
              alt="An image from a data center"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/drchuckpgsql.webp"
              alt="Dr. Chuck PG4E Attribution - Youtube"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/nosql.webp"
              alt="NoSQL Databases"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "February",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
          In February 2024, I completed two extensive courses that transformed my web development skills. The first was the <strong>Django for Everybody (DJ4E)</strong> course by Dr. Chuck Severance, which provided a comprehensive understanding of Django, one of the most popular Python-based web frameworks. <br />
        The course covered a wide range of topics, from setting up Django, working with data models, CRUD operations, forms, and authentication, to more advanced concepts like many-to-many relationships and cookies. I learned how to create fully functional web applications with secure user authentication and complex data interactions. <br />
        Simultaneously, I completed the <strong>Web Design for Everybody (WD4E)</strong> course with Colleen Van Lent. Given my background in HTML and JavaScript, this course turned out to be a smooth ride. However, I gained deeper insights into topics such as media queries for responsive design, advanced CSS techniques, and integrating JavaScript into the web pages for interactivity. The WD4E curriculum included building projects that focused on HTML5, CSS3, JavaScript events, and best practices for web accessibility and hosting.<br />
        With the skills acquired from both DJ4E and WD4E, I built my first full-stack web application: a comprehensive platform for searching pharmacies and pharmaceutical products powered by a giant MySQL Database built from scraped and cleaned internet data. The platform featured a fully responsive design and a backend powered by Django, handling complex relational data structures and user authentication. It also included front-end elements styled using modern CSS and bootstrap techniques from the WD4E course and interactive JavaScript functionality.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          <Image
              src="/timeline/mysql_artwork.webp"
              alt="MySQL Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/bash.webp"
              alt="Bash (Bourne Again Shell)"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/drchuck.webp"
              alt="Dr. Chuck DJ4E Attribution - Youtube"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/cvlent.webp"
              alt="Colleen Van Lent Attribution"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "January",
      content: (
        <div>
          <p>The <strong>Python for Everybody (PY4E)</strong> course offered a deep dive into Python&#39;s core functionality, focusing on practical and essential programming concepts. I worked extensively with functions, loops, and data structures like lists, dictionaries, and tuples, which allowed me to efficiently process and manage data.</p>

<p>As the course progressed, I explored more advanced topics, including regular expressions for pattern matching, working with files, and network programming to handle data across the web. I also gained experience with using web services and APIs, as well as handling databases for faster data retrieval and management.</p>

<p>This comprehensive course provided a solid foundation in Python, with hands-on projects that prepared me for real-world application development, data manipulation, and backend integration.</p><br />
          <div className="grid grid-cols-2 gap-4">
            
          <Image
              src="/timeline/bspython.webp"
              alt="Beautiful Soup and Python"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/logopython.webp"
              alt="Python Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/drchuckpy4e.webp"
              alt="Dr. Chuck PY4E Attribution - Youtube"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/sqlite.webp"
              alt="Sqlite Logo"
              width={500}
              height={500}
              priority={false}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}