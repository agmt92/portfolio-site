import type { Metadata } from "next";
import "./globals.css";
import Navbar from './ui/landing-page/navbar-top';
import Footer from './ui/landing-page/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Mohamed Tarek AbdelGhani',
    default: 'MT AG',
  },
  description: 'My official portfolio website built with Next.js.',
  metadataBase: new URL('https://my-portfolio.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}