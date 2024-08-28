// RootLayout.js
import React from 'react';
import SocialLinks from './components/Buttons/SocialLinks.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

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
        {children}
        <Analytics id="G-XXXXXXXXXX" />
        <SpeedInsights />
        {/* <Footer /> */}
        <section style={{marginTop: "20px", paddingBottom: "50px"}}>
          <SocialLinks />
        </section>
      </body>
    </html>
  );
}

export default RootLayout;
