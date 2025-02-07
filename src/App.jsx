import React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/main/navbar.jsx';
import RootLayout from './layout.jsx';
import Spinner from './components/Spinner/Spinner.jsx';

// Regular imports for Home and Contact
import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';

// Lazy load Projects and About
const About = React.lazy(() => import('../src/pages/About'));
const Projects = React.lazy(() => import('../src/pages/Projects'));

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
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </div>
        </RootLayout>
      )}
    </Router>
  );
};

export default App;
