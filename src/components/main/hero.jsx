import React from 'react';
import HeroContent from '../sub/hero-content.jsx';

const Hero = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      <video
        autoPlay
        muted
        loop
        style={{ position: 'absolute', top: '-340px', left: '0', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-20' }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};

export default Hero;
