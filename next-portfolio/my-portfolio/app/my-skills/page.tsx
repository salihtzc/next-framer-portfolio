"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress"

// Circular ProgressBar bileşeni

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
        </div>
    );
};

export default Page;