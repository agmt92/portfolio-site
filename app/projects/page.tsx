"use client";

import React from 'react';
import ExpandableCard from '../ui/projects-section/grid';
import GoogleGemini from '../ui/projects-section/geminieffect';

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