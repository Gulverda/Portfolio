import React from 'react';
import HeroContent from '../sub/hero-content.jsx';

const Hero = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '800px', width: '100%', maxWidth: '1440px' }}>
      <div style={{position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-around'}}>
      <HeroContent />
      </div>
    </div>
    </div>
  );
};

export default Hero;
