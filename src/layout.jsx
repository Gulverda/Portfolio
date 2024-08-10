// RootLayout.js
import React from 'react';
// import { Footer } from './components/main/footer';
// import Navbar from '../src/components/main/navbar.jsx';
// import { StarsCanvas } from '../src/components/main/startBg.jsx';
import SocialLinks from './components/Buttons/SocialLinks.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
// import { siteConfig } from './config';
// import { cn } from './lib/utils';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        // className={cn(
        //   "bg-[#030014] overflow-y-scroll overflow-x-hidden",
        //   inter.className
        // )}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* <StarsCanvas /> */}
        {/* <Navbar /> */}
        {children}
        <Analytics id="G-XXXXXXXXXX" />
        <SpeedInsights />
        {/* <Footer /> */}
        <SocialLinks />
      </body>
    </html>
  );
}

export default RootLayout;
