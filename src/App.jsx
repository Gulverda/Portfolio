// App.jsx
import React from 'react';
import Hero from '../src/components/main/hero.jsx';
import Navbar from '../src/components/main/navbar.jsx';
import RootLayout from './layout.jsx';
import { StarsCanvas } from '../src/components/main/startBg.jsx';


const App = () => {
  return (
    <RootLayout>

         <div>
         {/* <StarsCanvas /> */}

          <Navbar />
            <Hero />
          {/* <h1>Welcome to my React App!</h1> */}
        </div>
    </RootLayout>
  );
};

export default App;
