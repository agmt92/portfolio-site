"use client";
import React, { useState, useEffect, useRef } from "react";
import clsx from 'clsx';
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import Logo from "../components/logo";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const pathname = usePathname();
    const navbarRef = useRef<HTMLDivElement>(null);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            if (currentScrollTop < 90) {
                setIsVisible(true);
            } else
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

    useOutsideClick(navbarRef, () => {
        const currentScrollTop = window.scrollY;
        if (currentScrollTop < 90) {
            setIsVisible(true);
            setIsExpanded(false);
        } else if (!isVisible){
            setIsVisible(true);
            setIsExpanded(false)
        } else if (isVisible) {
            setIsExpanded(false);
            setIsVisible(false);
        } return;
    }
    );

    const links = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT ME', href: '/about' },
        { name: 'EXPERIENCE', href: '/experience' },
        { name: 'PROJECTS', href: '/projects' },
        { name: 'CONTACT', href: '/contact' }
    ];

    return (
        <nav
            ref={navbarRef}
            className={clsx(
                "h-auto z-50 border-b border-neutral-700 dark:border-neutral-200 sticky top-0 transition-transform duration-300 ease-in-out",
                "bg-black/50 dark:bg-neutral-50/90", 
                { "-translate-y-full": !isVisible, "translate-y-0": isVisible }
            )}
        >
            <div className="flex backdrop-blur-lg dark:backdrop-blur-sm items-center justify-between p-4">
                <div className="items-center flex sm:hidden md:flex">
                <Logo className="w-24 h-16 text-white dark:text-black" />
                    <h1 className="ml-2 text-3xl font-bold text-white dark:text-black cursor-pointer" onClick={toggleNavbar}>AG</h1>
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                <button
                    id="dark-mode-toggle"
                    name="dark-mode-toggle"
                    onClick={toggleDarkMode}
                    className="text-neutral-400 dark:text-neutral-600"
                    aria-label="switch theme" 
                >
                    {isDarkMode ? (
                    <FaMoon size={24} />
                    ) : (
                    <FaSun className="text-amber-200 dark:text-amber-200" size={24} />
                    )}
                </button>

                <div className="sm:hidden text-neutral-200 dark:text-neutral-600">
                    {isExpanded ? (
                    <FaTimes size={24} onClick={toggleNavbar} aria-label="Close menu" />
                    ) : (
                    <FaBars size={24} onClick={toggleNavbar} aria-label="Open menu" />
                    )}
                </div>
                </div>
                <div className="hidden sm:flex flex-row items-center space-x-4 ml-auto">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'hover:text-neutral-100 dark:hover:text-neutral-400 text-neutral-200 dark:text-neutral-950 transition-colors duration-300',
                                {
                                    'relative text-neutral-100 dark:text-neutral-400': pathname === link.href,
                                    'before:absolute before:inset-0 before:bg-gradient-radial from-neutral-500/10 to-neutral-500/60 before:rounded-full before:blur-xl before:z-[-1]': pathname === link.href,
                                    'before:animate-pulse': pathname === link.href
                                }
                            )}
                            style={{
                                fontSize: "1rem",
                                padding: "0.5rem 1rem",
                                position: 'relative',
                                display: 'inline-block',
                                backgroundImage: pathname === link.href 
                                    ? "radial-gradient(circle, rgba(24,161,161,0.8), transparent)" 
                                    : "none",
                                backdropFilter: pathname === link.href 
                                    ? "blur(10px)" 
                                    : "none",
                                boxShadow: pathname === link.href 
                                    ? "0 0 15px rgba(24,161,161, 0.8), 0 0 50px rgba(24,161,161, 0.9)" 
                                    : "none",
                                borderRadius: pathname === link.href ? '10%' : '0',
                                transition: 'all 0.6s ease-in-out',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Mobile menu overlay */}
            <div className={clsx(
                "sm:hidden overflow-hidden transition-all duration-700 ease-in-out backdrop-blur-md dark:backdrop-blur-sm bg-black/50 dark:bg-neutral-50/80", // Smooth animation
                { "max-h-0": !isExpanded, "max-h-96": isExpanded }
            )} style={{ zIndex: 50, position: "absolute", top: "100%", width: "100%"}}>
                <div className="flex flex-col items-center space-y-4 p-4 border-t border-neutral-700 dark:border-neutral-200">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'hover:text-neutral-200 dark:hover:text-neutral-500 text-white dark:text-neutral-900 text-lg',
                                {
                                    'relative text-neutral-300 dark:text-neutral-500': pathname === link.href,
                                    'before:absolute before:inset-0 before:bg-gradient-radial darkfrom-neutral-500/10 to-neutral-500/60 before:rounded-full before:blur-xl before:z-[-1]': pathname === link.href,
                                    'before:animate-pulse': pathname === link.href
                                }
                            )}
                            style={{
                                padding: "0.5rem 1rem",
                                position: 'relative',
                                display: 'inline-block',
                                backgroundImage: pathname === link.href 
                                    ? "radial-gradient(circle, rgba(24,161,161,0.3), transparent)" 
                                    : "none",
                                backdropFilter: pathname === link.href 
                                    ? "blur(30px)" 
                                    : "none",
                                boxShadow: pathname === link.href 
                                    ? "0 0 15px rgba(24,161,161, 0.8), 0 0 90px rgba(24,161,161, 0.6)" 
                                    : "none",
                                borderRadius: pathname === link.href ? '10%' : '0',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}