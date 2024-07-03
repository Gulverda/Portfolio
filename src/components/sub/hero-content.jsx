import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../motion/motion';
import SkillsIcons from '../Buttons/Skills';
import '../../CSS/Navbar.css'; // Import the CSS file
import Profile from '../../assets/Profile_for_portfolio.png'; // Import the image
import InfoItem from '../Buttons/InfoItem';

const HeroContent = () => {
    const name = "Luka Gulverdashvili";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        animateTyping(name);
    }, []);

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
                }, 1000); // Delay before restarting animation
            }
        }, 100); // Typing speed

        return () => clearInterval(interval);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: "2" }}>
            <div className="motion-container">
                <div className="motion-div">
                    <motion.div
                        variants={slideInFromRight(0.8)}
                        className="w-full h-full flex justify-center items-center"
                    >
                        <InfoItem />
                        <img src={Profile} alt="Profile" />
                    </motion.div>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                    >
                        Hey there! 👋 I'm{' '}
                        <motion.span
                            className="typewriter"
                            style={{ display: "inline-block", marginLeft: "5px" }}
                        >
                            {displayText}
                        </motion.span>
                    </motion.p>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        className="button-primary"
                    >
                        Learn more
                    </motion.a>
                </div>
            </div>
            <SkillsIcons />
        </div>
    );
};

export default HeroContent;
