import React, { useState, useEffect } from 'react';
import Hero from '../src/components/main/hero.jsx';
import Navbar from '../src/components/main/navbar.jsx';
import RootLayout from './layout.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import SocialLinks from './components/Buttons/SocialLinks.jsx';

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
            {/* Uncomment components below as needed */}
            {/* <StarsCanvas /> */}
            <Navbar />
            <Hero />
            {/* <h1>Welcome to my React App!</h1> */}
          </div>
          {/* <ProfileCard /> */}
          <div className="grid">
            {/* Uncomment cards and other components below as needed */}
            {/* <Card
              icon={<ProductsIcon />}
              title="Web Application"
              description="Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested."
            />
            <Card
              icon={<CategoriesIcon />}
              title="Games"
              description="Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested."
            /> */}
       
          </div>
          <div style={{width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', bottom: '-150px'}}>
              <SocialLinks />
            </div>
          {/* <SkillSet /> */}
          {/* <Timeline /> */}
          {/* <Astronaut /> */}
        </RootLayout>
      )}
    </>
  );
};

export default App;
