import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/main/navbar.jsx';
import RootLayout from './layout.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
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
        </RootLayout>
      )}
    </Router>
  );
};

export default App;
