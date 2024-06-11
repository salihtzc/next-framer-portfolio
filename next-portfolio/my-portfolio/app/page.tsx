
"use client"
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare, FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';



export default function Home() {

    const fadeIn = (direction = 'down', delay = 0.3) => {
        return {
            hidden: {
                opacity: 0,
                y: direction === 'down' ? -50 : 50
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: delay,
                    ease: 'easeInOut'
                }
            }
        };
    };


    return (
        <>
            <main className="w-screen h-screen relative">
                <div className="flex items-center justify-between w-full h-full bg-cover bg-center bg-slate-900 ">
                    <div className="col-span-8 pl-20 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]" >

                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false,amount:0.4}}
                            className="text-[50px] text-white font-semibold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                              {" "}
                              Jr. Frontend Developer
                                Mehmet Salih Tuzcu
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false,amount:0.4}}

                            className="text-gray-200 hidden md:block">
                            Web Development student at Thomas More University of Applied Sciences in Antwerp, Belgium

                        </motion.p>

                        <motion.div
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false,amount:0.4}}
                            // initial="initial"
                            animate="animate"
                            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                        >
                            <Link
                                href="/contact-me"
                                className="group bg-purple-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-700 active:scale-105 transition"
                                style={{ minWidth: '200px', flexShrink: 0 }}
                            >
                                Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                            </Link>

                            <a
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                                href="/CV.pdf"
                                download
                                style={{ minWidth: '200px', flexShrink: 0 }}
                            >
                                Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                            </a>

                            <a
                                className="bg-gray-900 text-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ minWidth: '50px', flexShrink: 0 }}
                            >
                                <BsLinkedin />
                            </a>

                            <a
                                className="bg-gray-900 text-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ minWidth: '50px', flexShrink: 0 }}
                            >
                                <FaGithubSquare />
                            </a>

                            <a
                                className="bg-gray-900 text-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ minWidth: '50px', flexShrink: 0 }}
                            >
                                <FaInstagram />
                            </a>
                        </motion.div>


                    </div>

                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.1}}

                        className=" hidden lg:flex col-8 offset-2 col-lg-4  offset-lg-0 order-1 order-lg-2 mt-5 pr-10 lg:pr-20" >
                        <img src='/profilefoto.jpg' alt="Profile" className="img-fluid"
                             style={{border: 'none', borderRadius: '10%', height: 500, width: 400 }}/>
                    </motion.div>


                </div>
            </main>

        </>
    );
}
