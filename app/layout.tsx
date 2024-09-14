import type { Metadata } from "next";
import "./globals.css";
import Navbar from './ui/landing-page/navbar-top';
import Footer from './ui/landing-page/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: {
    template: '%s | Mohamed Tarek AbdelGhani',
    default: 'AG Portfolio',
  },
  description: 'Have an idea? Let me bring it to life!',
  metadataBase: new URL('https://www.mtag.me'),
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
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}