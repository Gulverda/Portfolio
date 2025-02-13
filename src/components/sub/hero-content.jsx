import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../../motion/motion';
import SkillsIcons from '../Buttons/Skills';
import '../../CSS/Navbar.css'; 
import Profile from '/assets/Profile_for_portfolio.webp';
import InfoItem from '../Buttons/InfoItem';

const HeroContent = () => {
    const name = "Luka Gulverdashvili";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const animateTyping = (text) => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        currentIndex = 0;
                        animateTyping(text);
                    }, 2000); // 2s delay before restarting animation
                }
            }, 300); // Typing speed
        };

        animateTyping(name);
    }, [name]);

    return (
        <div className="container" style={{ display: "flex", justifyContent: "space-around", position: "relative", zIndex: "2", width: "100%" }}>
    <div className="motion-container">
        <div className="motion-div">
        <motion.div
  initial="hidden"
  animate="visible"
  variants={slideInFromLeft(0.3)}
  className="w-full h-full flex justify-center items-center"
>
  <InfoItem />
  <div className="image_cont" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <img src={Profile} alt="Profile" loading="eager" width={500} height={500} />
  </div>
</motion.div>

<motion.p
  initial="hidden"
  animate="visible"
  variants={slideInFromLeft(0.5)}
  style={{ height: "150px" }}
>
  Hey there! 👋 I&apos;m{' '}
  <motion.span
    className="typewriter"
    style={{ marginLeft: "5px" }}
  >
    {displayText}
  </motion.span>
</motion.p>

<motion.button
  initial="hidden"
  animate="visible"
  variants={slideInFromLeft(1)}
  className="button"
>
  <a href="/about" className="for_a">
    <span>View more</span>
  </a>
</motion.button>
        </div>
    </div>
    <SkillsIcons />
</div>

    );
};

export default HeroContent;
