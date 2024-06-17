"use client";
import React from 'react';
import { Projects } from "@/constants/data";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Page() {

    const fadeIn = (direction = 'down', delay = 0.3) => {
        let xValue = 0;
        let yValue = 0;

        switch (direction) {
            case 'downright':
                xValue = 50;
                yValue = -50;
                break;
            case 'upleft':
                xValue = -50;
                yValue = 50;
                break;
            case 'downleft':
                yValue = 50;
                xValue = 50;
                break;
            case 'upright':
                yValue = -50;
                xValue = -50;
                break;
            default:
                yValue = 0;
        }

        return {
            hidden: {
                opacity: 0,
                x: xValue,
                y: yValue
            },
            show: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: delay,
                    ease: 'easeInOut'
                }
            }
        };
    };

    const getAnimationDirection = (index: number | string) => {
        switch (index) {
            case 0:
                return 'upright';
            case 1:
                return 'downright';
            case 2:
                return 'upleft';
            case 3:
                return 'downleft';
            default:
                return 'down';
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-center bg-cover bg-slate-900" style={{ paddingTop: '100px' }}>
            <motion.div
                initial='hidden'
                animate='show'
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[90%] max-h-[90%] mb-5">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn(getAnimationDirection(index), index * 0.2)}>
                        <ProjectCard
                            title={project.title}
                            text={project.text}
                            image={project.src}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
