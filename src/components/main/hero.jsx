import React from 'react';
import HeroContent from '../sub/hero-content.jsx';

const Hero = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '800px', width: '100%', maxWidth: '1440px' }}>
      {/* <video
        autoPlay
        muted
        loop
        style={{ position: 'absolute', top: '-340px', left: '0', width: '100%', height: '100%', objectFit: 'cover', zIndex: '0', rotate: '180deg',}}
      >
        <source src={video1} type="video/webm" />
      </video> */}

      <div style={{position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-around'}}>
      <HeroContent />
      </div>
    </div>
    </div>
  );
};

export default Hero;
