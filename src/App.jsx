// App.jsx
import React, { useState, useEffect } from 'react';
import Hero from '../src/components/main/hero.jsx';
import Navbar from '../src/components/main/navbar.jsx';
import RootLayout from './layout.jsx';
import Card from './components/Cards/Card.jsx';
import ProductsIcon from './components/Cards/ProductsIcon.jsx';
import CategoriesIcon from './components/Cards/CategoriesIcon.jsx';
import { StarsCanvas } from '../src/components/main/startBg.jsx';
import SkillSet from './components/Skills/Skillset.jsx';
// import Timeline from './components/TimeLine/TimeLine.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';
import SkillsIcons from './components/Buttons/Skills.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation like fetching data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <RootLayout>
          <div>
            {/* <StarsCanvas /> */}
            <Navbar />
            <Hero />
            {/* <h1>Welcome to my React App!</h1> */}
          </div>
          <ProfileCard />
          <div className="grid">
          <SkillsIcons />

            <Card
              icon={<ProductsIcon />}
              title="Web Application"
              description="Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested."
            />
            <Card
              icon={<CategoriesIcon />}
              title="Games"
              description="Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested."
            />
          </div>
          <SkillSet />
          {/* <Timeline /> */}
        </RootLayout>
      )}
    </>
  );
};

export default App;
