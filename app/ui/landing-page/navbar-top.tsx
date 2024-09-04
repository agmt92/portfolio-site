"use client";
import React, { useState, useEffect } from "react";
import classNames from 'classnames';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    return (
        <nav
            className={classNames(
                "h-auto z-50 border-b border-gray-700 dark:border-gray-200 sticky top-0 transition-transform duration-300 ease-in-out",
                "bg-carbon-950 dark:bg-white",
                "md:bg-transparent backdrop-blur-md",
                { "-translate-y-full": !isVisible, "translate-y-0": isVisible }
            )}
        >
            <div className="flex flex-row items-center justify-between p-4 cursor-pointer sm:cursor-default" onClick={toggleNavbar}>
                <div className="flex items-center">
                    <Image src="/favicon/logo.png" alt="Logo" width={32} height={32} />
                    <h1 className="ml-2 text-lg font-bold text-white dark:text-black">My Portfolio</h1>
                </div>
                <div className="sm:hidden text-white dark:text-black ml-auto">
                    {isExpanded ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
                <div className="hidden sm:flex flex-row items-center space-x-4 ml-auto">
                    <a href="#about" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">About</a>
                    <a href="#projects" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">Projects</a>
                    <a href="#contact" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">Contact</a>
                </div>
            </div>
            <div className={classNames(
                "sm:hidden overflow-hidden transition-max-height duration-500 ease-in-out",
                { "max-h-0": !isExpanded, "max-h-96": isExpanded }
            )}>
                <div className="flex flex-col items-center space-y-4 p-4 border-t border-gray-700 dark:border-gray-200">
                    <div className="w-full border-b border-gray-700 dark:border-gray-200 pb-2">
                        <a href="#about" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">About</a>
                    </div>
                    <div className="w-full border-b border-gray-700 dark:border-gray-200 pb-2">
                        <a href="#projects" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">Projects</a>
                    </div>
                    <div className="w-full pb-2">
                        <a href="#contact" className="hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}