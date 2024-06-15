"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress"
import {skills} from '@/constants/data';

// Circular ProgressBar bileşeni

// Page bileşeni
const Page = () => {

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20
            }
        }
    };

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 ">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="overflow-hidden shadow-lg p-6 bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 w-full max-w-xs mx-auto"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
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
                            <p className="text-gray-700 dark:text-gray-300">
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