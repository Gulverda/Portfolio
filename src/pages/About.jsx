// src/pages/About.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import '../CSS/About.css'; // Assuming you have a CSS file for styling

const About = () => {
  const [activeItem, setActiveItem] = useState(0);
  const timelineRef = useRef(null);

  const items = [
    {
      title: "2022 - Present",
      cardTitle: "Pursuing IT Degree",
      cardSubtitle: "Georgian American University",
      cardDetailedText: "Actively pursuing an IT degree at Georgian American University. Engaged in various academic projects and gaining hands-on experience in the IT field.",
    },
    {
      title: "2023 - 2024",
      cardTitle: "Lead of Google Developer Student Club",
      cardSubtitle: "Georgian American University",
      cardDetailedText: "Served successfully as a Google Developer Student Club Lead for the 2023 - 2024 academic year and received a Certificate of Completion.",
    },
    {
      title: "2023 - Present",
      cardTitle: "Bizon.ge",
      cardSubtitle: "Front-End Developer",
      cardDetailedText: "Currently working on bizon.ge.",
    },
    {
      title: "2024 - July",
      cardTitle: "Python and Flask Framework Complete Course",
      cardSubtitle: "Udemy",
      cardDetailedText: "Completed the 'Python and Flask Framework Complete Course' on Udemy.",
    },
  ];

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.chrono-item');
      if (items[activeItem]) {
        items[activeItem].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeItem]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: '1' }}>
      <h1>About</h1>
      <div
        ref={timelineRef}
        style={{
          overflow: 'hidden',
        }}
      >
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          onItemSelected={(index) => setActiveItem(index)}
          theme={{
            primary: '#0056b3',
            secondary: '#cce0ff',
            cardBgColor: '#ffffff',
            titleColor: '#003d99',
            titleColorActive: '#0056b3',
            cardTitleColor: '#0056b3',
            cardSubtitleColor: '#666666',
          }}
        />
      </div>
    </div>
  );
};

export default About;
