"use client";

import { Timeline } from "../ui/edu-section/timeline";
import React from "react";
import { exp_data } from "../lib/tsx_placeholderdata";

export const experimental_ppr = true

export default function Page() {
  return (
    <div className="w-full">
      <Timeline data={exp_data} />
    </div>
  );
}