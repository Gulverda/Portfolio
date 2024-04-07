"use client";
import '../../CSS/Navbar.css'; // Import the CSS file

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
// import Image from "next/image";

// Import statements in hero-content.jsx
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../motion/motion";

export const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="motion-div">
    

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website,<br></br>
                    Mobile, and Software development. Check out my projects and skills.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn more
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                {/* <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        /> */}
            </motion.div>
        </motion.div>
    );
};
export default HeroContent;