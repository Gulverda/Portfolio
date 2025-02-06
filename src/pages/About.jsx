import { useState, useRef, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import '../CSS/About.css';

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
      title: "2023 Dec. - Present",
      cardTitle: "Bizon.ge",
      cardSubtitle: "FrontEnd Developer",
      cardDetailedText: "Currently working as a front-end developer at Bizon.ge, where I design and implement responsive, user-friendly interfaces, ensuring smooth interactions and optimal performance across the platform. I collaborate closely with the team to enhance the user experience and ensure high-quality code.",
    },
    {
      title: "2024 Jun. - July",
      cardTitle: "Python and Flask Framework Complete Course",
      cardSubtitle: "Udemy",
      cardDetailedText: "Completed the 'Python and Flask Framework Complete Course' on Udemy.",
    },
    {
      title: "2024 Oct. - Present",
      cardTitle: "Doer Community Backend Developer at Doer",
      cardSubtitle: "BackEnd Developer",
      cardDetailedText: "Working as a backend developer at Doer, I focus on building scalable server-side solutions using the MERN stack (MongoDB, Express, Node.js). I develop APIs, manage databases, and ensure smooth integration between backend and frontend, delivering high-performance and reliable applications.",
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
    <div className="for_padding" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: '1' }}>
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
