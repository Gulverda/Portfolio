// SectionBanner.jsx
import React from 'react';
// import CurvedCornerStar from './CurvedCornerStar';
import '../../CSS/Earth.css'; // Import the CSS file

const SectionBanner = () => (
  <div className="section-banner">
    {[...Array(7)].map((_, index) => (
      <div key={index + 1} id={`star-${index + 1}`}>
        {/* <CurvedCornerStar />
        <CurvedCornerStar /> */}
      </div>
    ))}
  </div>
);

export default SectionBanner;
