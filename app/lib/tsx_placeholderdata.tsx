import React from "react";
import Image from "next/image";

export const cards = [
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
    title: "React mini-projects sandbox 'on Nextjs'",
    src: "/projects/reactsandbox.webp",
    ctaText: "Visit",
    ctaLink: "https://miniprojects-next.vercel.app/",
    githubLink: "https://github.com/agmt92/miniprojects-next",
    tags: "nextjs, reactjs, typescript",
    content: () => {
    return (
        <p>
        Group of mini-projects built using React.
        Those projects were built originally on Vite and then migrated to NextJS for deployment altogether.
        Main page has an unstyled table with a the list of projects. Each project has a link to the live version.
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

export const exp_data = [
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
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/timeline/tailwindcss.webp"
            alt="Tailwind css logo"
            width={500}
            height={400}
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
        <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
        The <strong>Python for Everybody (PY4E)</strong> course offered a deep dive into Python&#39;s core functionality, focusing on practical and essential programming concepts. I worked extensively with functions, loops, and data structures like lists, dictionaries, and tuples, which allowed me to efficiently process and manage data.</p>
        <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
As the course progressed, I explored more advanced topics, including regular expressions for pattern matching, working with files, and network programming to handle data across the web. I also gained experience with using web services and APIs, as well as handling databases for faster data retrieval and management.</p>
<p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
This comprehensive course provided a solid foundation in Python, with hands-on projects that prepared me for real-world application development, data manipulation, and backend integration.</p><br />
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