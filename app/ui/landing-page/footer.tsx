"use client";
import React from "react";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black dark:bg-white border-t border-gray-700 dark:border-gray-200 text-sm">
            <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
                    <div>
                        <h2 className="font-semibold text-slate-200 dark:text-slate-600">Built with:</h2>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <a href="https://nextjs.org/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    <Image src="https://nextjs.org/favicon.ico" alt="Next.js" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                                    Next.js
                                </a>
                            </li>
                            <li>
                                <a href="https://reactjs.org/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    <Image src="https://reactjs.org/favicon.ico" alt="React" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                                    React
                                </a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    Tailwind
                                </a>
                            </li>
                            <li>
                                <a href="https://ui.aceternity.com" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    <Image src="https://ui.aceternity.com/favicon.ico" alt="Aceternity UI" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                                    Aceternity UI
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-slate-200 dark:text-slate-600">Education by:</h2>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <a href="https://www.dr-chuck.com" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    <Image src="https://www.dr-chuck.com/favicon.ico" alt="Dr. Chuck Severance" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                                    Dr. Chuck Severance
                                </a>
                            </li>
                            <li>
                                <a href="https://www.umich.edu" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    <Image src="https://www.umich.edu/favicon.ico" alt="University of Michigan" width={16} height={16} className="inline-block w-4 h-4 mr-2" />
                                    University of Michigan
                                </a>
                            </li>
                            <li>
                                <a href="https://www.freeCodeCamp.org" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    freeCodeCamp
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-slate-200 dark:text-slate-600">Socials:</h2>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <a href="https://www.linkedin.com/in/mohamed-tarek-abdelghani-7ab87791/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/MDMTAG" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    X.com (Formerly Twitter)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/CitiClix/" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-slate-200 dark:text-slate-600">Contact:</h2>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <a href="mailto:agmt@dr.com" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="tel:+4669010674084" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    Phone
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/4669010674084" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-10 text-center">
                    <span className="block text-gray-400 dark:text-gray-700 mt-4">All Rights Reserved</span>
                    <span className="block dark:text-black hover:text-gray-800 dark:hover:text-gray-200">2024</span>
                </div>
            </div>
        </footer>
    );
}