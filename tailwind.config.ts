import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'english-walnut': {
          '50': '#f6f4f0',
          '100': '#e8e4d9',
          '200': '#d2cbb6',
          '300': '#b8ab8c',
          '400': '#a3906c',
          '500': '#947f5e',
          '600': '#7f694f',
          '700': '#675241',
          '800': '#58463b',
          '900': '#3c302a',
          '950': '#2b211d',
        },
        'angelina': {
          '50': '#ffe7de',
          '100': '#fccbbf',
          '200': '#f59b88',
          '300': '#e86d57',
          '400': '#d54732',
          '500': '#b8370e',
          '600': '#992e0a',
          '700': '#7b2609',
          '800': '#601e0b',
          '900': '#4d190a',
          '950': '#320e06',
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideleft: 'slideleft 1s ease 700ms forwards',
        scroll: 'scroll 40s linear infinite',
        shimmer: 'shimmer 2s infinite forwards',
        aurora: "aurora 60s linear infinite",
        slidein300: "slidein 1s ease 150ms forwards",
        slidein700: "slidein 1s ease 300ms forwards",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        slideleft: {
          from: {
            opacity: "0",
            transform: "translatex(10px)",
          },
          to: {
            opacity: "1",
            transform: "translatex(0)",
          },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        scroll: {
          '-100%': { transform: 'translateX(0%)' },
          '0%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [addVariablesForColors],
};

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ".aurora-bg": newVars,
  });
}