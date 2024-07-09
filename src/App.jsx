import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../src/components/main/hero.jsx';
import Navbar from '../src/components/main/navbar.jsx';
import RootLayout from './layout.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import SocialLinks from './components/Buttons/SocialLinks.jsx';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Spinner />
      ) : (
        <RootLayout>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
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
          <div style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', bottom: '-150px' }}>
            <SocialLinks />
          </div>
        </RootLayout>
      )}
    </Router>
  );
};

export default App;
