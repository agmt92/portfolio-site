import type { Config } from "tailwindcss";


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
        'fade-in': 'fadeIn 2s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        scroll: 'scroll 40s linear infinite',
        shimmer: 'shimmer 2s infinite forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
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
  plugins: [],
};

export default config;
