import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './ui/landing-page/navbar-top';
import Footer from './ui/landing-page/footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | My Portfolio',
    default: 'My Portfolio',
  },
  description: 'The official portfolio website built with Next.js.',
  metadataBase: new URL('https://my-portfolio.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}