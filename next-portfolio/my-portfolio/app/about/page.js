"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
    };

    const textHoverVariants = {
        hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
        tap: { scale: 0.95 }
    };

    return (
        <motion.section
            className="flex flex-col justify-center items-center h-screen scroll-mt-28"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id="about"
        >
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About me</h1>
            <div className="max-w-[45rem] text-center leading-8">
                <motion.p
                    className="mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    After completing my degree in <motion.span variants={textHoverVariants} whileHover="hover" whileTap="tap" className="font-medium cursor-pointer">Business</motion.span> two years ago, I decided to follow my passion for technology and delve into the world of programming. I joined a coding bootcamp where I embraced the challenge of <motion.span variants={textHoverVariants} whileHover="hover" className="font-medium">full-stack web development</motion.span>. <span className="italic">My favorite part of programming</span> is the design process—solving complex problems and seeing my solutions come to life. I've honed my skills in <motion.span variants={textHoverVariants} whileHover="hover" className="font-medium">React, Next.js, Java, Node.js, and MongoDB</motion.span>, with a growing proficiency in TypeScript and Prisma. I am keen on continuous learning and am always on the lookout for new technologies to explore.
                </motion.p>
                <motion.p
                    className="mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Originally from Turkey, I now reside in Belgium, where I'm not only pursuing a <motion.span variants={textHoverVariants} whileHover="hover" className="font-medium">full-time position</motion.span> as a software developer but also immersing myself in the local culture and community. <span className="italic">When I'm away from my computer</span>, I enjoy engaging in sports like football and basketball, which are popular here. My leisure time is filled with playing video games, watching movies, and frequenting the cinema. On the educational front, I'm expanding my knowledge by learning about <motion.span variants={textHoverVariants} whileHover="hover" className="font-medium">history</motion.span> and picking up new skills, such as playing the trumpet.
                </motion.p>
            </div>
        </motion.section>
    );
}
