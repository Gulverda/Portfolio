// App.jsx
import React from 'react';
import Hero from '../src/components/main/hero.jsx';
import Navbar from '../src/components/main/navbar.jsx';
import RootLayout from './layout.jsx';
import Card from './components/Cards/Card.jsx';
import ProductsIcon from './components/Cards/ProductsIcon.jsx';
import CategoriesIcon from './components/Cards/CategoriesIcon.jsx';
import { StarsCanvas } from '../src/components/main/startBg.jsx';


const App = () => {
  return (
    <>
        <RootLayout>

<div>
{/* <StarsCanvas /> */}

 <Navbar />
   <Hero />
 {/* <h1>Welcome to my React App!</h1> */}
</div>
</RootLayout>
<div className="grid">
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
</>
  );
};

export default App;
