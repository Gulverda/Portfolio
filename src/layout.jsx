import React from 'react';
import SocialLinks from './components/Buttons/SocialLinks.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

// const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <>
    {children}
        <Analytics id="G-XXXXXXXXXX" />
        <SpeedInsights />
        {/* <Footer /> */}
        <section style={{marginTop: "20px", paddingBottom: "50px", position: "relative", zIndex: "1"}}>
          <SocialLinks />
        </section>
    </>
  );
}

export default RootLayout;
