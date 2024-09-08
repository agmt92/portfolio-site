"use client";

import React from 'react';
import ExpandableCard from '../ui/projects-section/grid';
// import MatrixRain from '../ui/components/MatrixRain';
import GoogleGemini from '../ui/projects-section/geminieffect';

// const placeholders = [
//   "Search a project by name..",
//   "Search a project by topic...",
//   "Search by project status...",
//   "Search by programming language...",
//   "Search by framework..."
// ];

export default function Page() {
  return (
    <main className="relative w-full dark:bg-white flex flex-col">
      <GoogleGemini/>
      <div className="mt-24">
      <ExpandableCard />
      </div>
    </main>
  );
}