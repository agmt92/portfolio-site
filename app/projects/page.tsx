"use client";

import React from 'react';
import ExpandableCard from '../ui/projects-section/grid';
import PlaceholdersAndVanishInput from '../ui/components/placeholders-and-vanish-input';
import MatrixRain from '../ui/components/MatrixRain';
import GoogleGemini from '../ui/projects-section/geminieffect';

export default function Page() {
  const placeholders = [
    "Search a project by name..",
    "Search a project by topic...",
    "Search by project status...",
    "Search by programming language...",
    "Search by framework..."
  ];

  return (

    <main className="relative w-full flex flex-col">
      <GoogleGemini/>
      <span className="text-4xl align-middle font-bold z-10">My Projects</span>
      <PlaceholdersAndVanishInput 
        placeholders={placeholders} 
        onChange={(e) => console.log(e.target.value)} 
        onSubmit={(e) => console.log("Form submitted")} 
      />
      <ExpandableCard />
    </main>
  );
}