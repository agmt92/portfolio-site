"use client";
import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const pathname = usePathname();

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

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <nav
            className={clsx(
                "h-auto z-50 border-b border-gray-700 dark:border-gray-200 sticky top-0 transition-transform duration-300 ease-in-out",
                "bg-carbon-950 dark:bg-white",
                "md:bg-transparent backdrop-blur-md",
                { "-translate-y-full": !isVisible, "translate-y-0": isVisible }
            )}
        >
            <div className="flex flex-row items-center justify-between p-4 cursor-pointer sm:cursor-default" onClick={toggleNavbar}>
                <div className="flex items-center">
                    <Image src="/favicon/favicon.ico" alt="Logo" width={32} height={32} />
                    <h1 className="ml-2 text-lg font-bold text-white dark:text-black">My Portfolio</h1>
                </div>
                <div className="sm:hidden text-white dark:text-black ml-auto">
                    {isExpanded ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
                <div className="hidden sm:flex flex-row items-center space-x-4 ml-auto">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'hover:text-gray-300 dark:hover:text-gray-200 text-white dark:text-black',
                                {
                                    'relative text-pink-500': pathname === link.href,
                                    'before:absolute before:inset-0 before:bg-gradient-radial from-pink-500/10 to-pink-500/60 before:rounded-full before:blur-xl before:z-[-1]': pathname === link.href,
                                    'before:animate-pulse': pathname === link.href
                                }
                            )}
                            style={{
                                fontSize: "1rem",
                                padding: "0.5rem 1rem",
                                position: 'relative',
                                display: 'inline-block',
                                backgroundImage: pathname === link.href 
                                    ? "radial-gradient(circle, rgba(255,20,147,0.8), transparent)" 
                                    : "none",
                                backdropFilter: pathname === link.href 
                                    ? "blur(10px)" 
                                    : "none",
                                color: pathname === link.href ? 'pink' : 'inherit',
                                boxShadow: pathname === link.href 
                                    ? "0 0 15px rgba(255, 20, 147, 0.8), 0 0 30px rgba(255, 20, 147, 0.6)" 
                                    : "none",
                                borderRadius: pathname === link.href ? '50%' : '0',
                                transition: 'all 1s ease-in-out',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={clsx(
                "sm:hidden overflow-hidden transition-max-height duration-500 ease-in-out",
                { "max-h-0": !isExpanded, "max-h-96": isExpanded }
            )}>
                <div className="flex flex-col items-center space-y-4 p-4 border-t border-gray-700 dark:border-gray-200">
                    {links.map((link) => (
                        <div key={link.name} className="w-full border-b border-gray-700 dark:border-gray-200 pb-2">
                            <Link
                                href={link.href}
                                className={clsx(
                                    'hover:text-gray-800 dark:hover:text-gray-200 text-white dark:text-black',
                                    {
                                        'relative text-pink-500': pathname === link.href,
                                        'before:absolute before:inset-0 before:bg-gradient-radial from-pink-500/10 to-pink-500/60 before:rounded-full before:blur-xl before:z-[-1]': pathname === link.href,
                                        'before:animate-pulse': pathname === link.href
                                    }
                                )}
                                style={{
                                    fontSize: "1rem",
                                    padding: "0.5rem 1rem",
                                    position: 'relative',
                                    display: 'inline-block',
                                    backgroundImage: pathname === link.href 
                                        ? "radial-gradient(circle, rgba(255,20,147,0.8), transparent)" 
                                        : "none",
                                    backdropFilter: pathname === link.href 
                                        ? "blur(10px)" 
                                        : "none",
                                    color: pathname === link.href ? 'pink' : 'inherit',
                                    boxShadow: pathname === link.href 
                                        ? "0 0 15px rgba(255, 20, 147, 0.8), 0 0 30px rgba(255, 20, 147, 0.6)" 
                                        : "none",
                                    borderRadius: pathname === link.href ? '50%' : '0',
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
