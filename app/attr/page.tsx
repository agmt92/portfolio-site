import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex flex-col">
          <article>
            <div className="p-6 lg:p-18 text-center text-white dark:bg-neutral-100 dark:text-black">
                <h1 className="text-4xl font-bold mb-4">Attributions</h1>
                <p className="mb-12">This website was designed and coded by Mohamed Tarek Abdelghani using <br/>the technologies, and resources mentioned below.</p>
                {/* Technologies Used Section */}
                <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
                <ul className="mb-4">
                <li className="mb-2">
                    <Link href="https://nextjs.org/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    <Image src="https://nextjs.org/favicon.ico" alt="Next.js" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                    Next.js 15 RC (Developed by Vercel)
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="https://reactjs.org/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    <Image src="https://reactjs.org/favicon.ico" alt="React" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                    React 19 (Developed by Meta)
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="https://ui.aceternity.com" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    <Image src="https://ui.aceternity.com/favicon.ico" alt="Aceternity UI" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                    Aceternity UI (Developed by Aceternity)
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="https://mambaui.com/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    
                    Mamba UI (Inspired the Footer)
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="https://tailwindcss.com/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    TailwindCSS (Developed by Tailwind Labs)
                    </Link>
                </li>
                </ul>

                {/* Courses & Learning Resources Section */}
                <h2 className="text-xl font-semibold mb-2">Courses & Learning Resources</h2>
                <ul className="mb-4">
                <li className="mb-2">
                    <Link href="https://www.dr-chuck.com" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    <Image src="https://www.dr-chuck.com/favicon.ico" alt="Dr. Chuck Severance" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                    Dr. Chuck Severance (University of Michigan)
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="https://www.freeCodeCamp.org" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    freeCodeCamp
                    </Link>
                </li>
                </ul>

                {/* Video Resources Section */}
                <h2 className="text-xl font-semibold mb-2">Video Resources</h2>
                <ul className="mb-4">
                <li className="mb-2">
                    <Link href="https://www.pexels.com/@kelly-1179532/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    Kelli at Pexels.com
                    </Link>{' '}
                    <Link href="https://www.instagram.com/kellymlacy/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    (Instagram: @kellymlacy)
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="https://www.pexels.com/de-de/@kindelmedia/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    Kindel Media at Pexels.com
                    </Link>
                </li>
                </ul>

                {/* Dependencies Section */}
                <h2 className="text-xl font-semibold mb-2">Dependencies</h2>
                <ul className="mb-4">
                <li>@axe-core/react 4.10.0 (Deque Systems)</li>
                <li>@radix-ui/react-hover-card 1.1.1 (Modulz)</li>
                <li>@tabler/icons-react 3.15.0 (Tabler)</li>
                <li>@tailwindcss/forms 0.5.9 (Tailwind Labs)</li>
                <li>@typescript-eslint/parser 8.5.0 (TypeScript-ESLint Team)</li>
                <li>autoprefixer 10.4.20 (PostCSS Team)</li>
                <li>classnames 2.5.1 (Jed Watson)</li>
                <li>clsx 2.1.1 (Luke Edwards)</li>
                <li>eslint-plugin-import 2.30.0 (Ben Mosher & Contributors)</li>
                <li>eslint-plugin-jsx-a11y 6.10.0 (JSX A11Y Contributors)</li>
                <li>eslint-plugin-react-hooks 4.6.2 (Facebook)</li>
                <li>framer-motion 11.5.4 (Framer)</li>
                <li>lucide-react 0.438.0 (Lucide)</li>
                <li>next 15.0.0-canary.138 (Vercel)</li>
                <li>next-seo 6.6.0 (next-seo team)</li>
                <li>next-sitemap 4.2.3 (Ives van Hoorne)</li>
                <li>next-view-transitions 0.3.0 (next-view-transitions team)</li>
                <li>qss 3.0.0 (Helder Santana)</li>
                <li>react 19.0.0-rc-7771d3a7-20240827 (Meta)</li>
                <li>react-dom 19.0.0-rc-7771d3a7-20240827 (Meta)</li>
                <li>react-icons 5.3.0 (React Icons Contributors)</li>
                <li>react-loading-skeleton 3.4.0 (dvtng)</li>
                <li>tailwind-merge 2.5.2 (tailwind-merge team)</li>
                <li>typescript 5.5.4 (Microsoft)</li>
                <li>use-debounce 10.0.3 (Xiaohui Zhang)</li>
                </ul>
                    
                    {/* Icons Section */}
                <h2 className="text-xl font-semibold mb-2">Icons</h2>
                <ul className="mb-4">
                <li className="mb-2">
                    <Link href="https://tablericons.com/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    Tabler Icons (Developed by Tabler)
                    </Link>
                </li>
                </ul>

                    {/* Fonts Section */}
                <h2 className="text-xl font-semibold mb-2">Fonts</h2>
                <ul className="mb-4">
                <li className="mb-2">
                    <Link href="https://fonts.google.com/specimen/Inter" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    Inter (Developed by Rasmus Andersson)
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="https://fonts.google.com/specimen/Roboto" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                    Roboto (Developed by Christian Robertson)
                    </Link>
                </li>
                </ul>
            </div>
        </article>
    </main>
);
}