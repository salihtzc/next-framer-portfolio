"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';
import { skills } from '@/constants/data';

// fadeIn fonksiyonu
const fadeIn = (direction = 'down', delay = 0.3) => {
    let xValue = 0;
    let yValue = 0;

    switch (direction) {
        case 'down':
            yValue = 50;
            break;
        case 'up':
            yValue = -50;
            break;
        case 'left':
            xValue = -50;
            break;
        case 'right':
            xValue = 50;
            break;

        default:
            xValue = 0;
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

// Page bileşeni
const Page = () => {

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-slate-900 relative">
            <div className="absolute top-0 left-5 h-full flex items-center">
                <Swiper
                    direction="vertical"
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    speed={5000}
                    modules={[Autoplay]}
                    className="h-full"
                >
                    {SkillData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={skill.Image}
                                alt={skill.name}
                                width={skill.width}
                                height={skill.height}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="absolute top-0 right-5 h-full flex items-center">
                <Swiper
                    direction="vertical"
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    speed={5000}
                    modules={[Autoplay]}
                    className="h-full"
                >
                    {SkillData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={skill.Image}
                                alt={skill.name}
                                width={skill.width}
                                height={skill.height}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        className="overflow-hidden shadow-lg p-6  border border-black/[0.1] rounded-xl px-5 py-3 bg-white/10 text-white/80 w-full max-w-xs mx-auto"
                        variants={index < 3 ? fadeIn('up', index * 0.2) : fadeIn('down', (index - 3) * 0.2)}
                        initial="hidden"
                        animate="show"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-center">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={50}
                                height={50}
                                className="mx-auto mb-4"
                            />
                            <h4 className="text-2xl font-semibold mt-2 mb-4">{skill.name}</h4>
                            <p className="text-gray-300">
                                {skill.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Page;