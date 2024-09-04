"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import Image from 'next/image';

export default function Navbar() {
    const [, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const onScroll = () => {
            if (ref.current) {
                setScrollTop(ref.current.scrollTop);
                setScrolling(ref.current.scrollTop > scrollTop);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    
    return (
        <nav
            ref={ref}
            className={cn(
                "h-auto z-50 bg-carbon-950 dark:bg-white border-b border-gray-700 dark:border-gray-200",
                // {
                // "shadow-sm dark:shadow-none": show,
                // "shadow-none dark:shadow-none": !show,
                // "transition-all duration-300 ease-in-out": scrolling,
                // }
            )}
        >
            <div className="flex flex-col sm:flex-row items-center justify-between p-4">
                <div className="flex items-center mb-4 sm:mb-0">
                <Image src="/favicon/logo.png" alt="Logo" width={32} height={32} />
                    <h1 className="ml-2 text-lg font-bold text-white dark:text-black">My Portfolio</h1>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#about" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">About</a>
                    <a href="#projects" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">Projects</a>
                    <a href="#contact" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">Contact</a>
                </div>
            </div>
        </nav>
    );
}