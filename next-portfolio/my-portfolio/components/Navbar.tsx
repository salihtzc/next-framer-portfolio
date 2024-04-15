// import Image from "next/image";
// import {Socials} from "@/constants";
// import Link from "next/link";
//
// export default function Navbar() {
//
//     return(
//         <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
//             <div className="flex flex-row-gap-3 items-center">
//                 {/*<h1 className="text-[50px] text-white font-semibold">*/}
//                 {/*    My Name*/}
//                 {/*</h1>*/}
//                 <h3 className="text-white text-[25px] font-semibold">  <Link href="/"> Mehmet Salih Tuzcu </Link></h3>
//             </div>
//
//             <div className="flex flex-row gap-5 mb-2">
//                 {Socials.map((social) => (
//                     <Image
//                         key={social.name}
//                         src={social.src}
//                         alt={social.name}
//                         width={28}
//                         height={28}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }



"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import {NavLinks} from "@/constants";


export default function Header() {



    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full "
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {NavLinks.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative "
                            key={link.link}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition ",
                                    {
                                        "text-gray-950 dark:text-gray-200":
                                           link.name,
                                    }
                                )}
                                href={link.link}

                            >
                                {link.name}


                                    <motion.span
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>

                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}


// "use client";
//
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import clsx from "clsx";
// import { NavLinks, Socials } from "@/constants";
// import Image from "next/image";
//
// export default function Header() {
//     return (
//         <header className="z-[999] relative">
//             <div className="flex fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-12 py-2 sm:h-[3.25rem] sm:py-0">
//                 <nav className="flex-grow">
//                     <ul className="flex justify-start pl-10">
//                         {NavLinks.map((link) => (
//                             <motion.li
//                                 className="h-3/4 flex items-center justify-center relative mx-2"
//                                 key={link.link}
//                                 initial={{ y: -100, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                             >
//                                 <Link
//                                     className={clsx(
//                                         "flex items-center justify-center px-3 py-3 hover:text-gray-950 transition",
//                                         {
//                                             "text-gray-950 dark:text-gray-200": link.name,
//                                         }
//                                     )}
//                                     href={link.link}
//                                 >
//                                     {link.name}
//                                 </Link>
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </nav>
//                 <div className="flex justify-end pr-10">
//                     {Socials.map((social) => (
//                         <Image
//                             key={social.name}
//                             src={social.src}
//                             alt={social.name}
//                             width={28}
//                             height={28}
//                             className="ml-2"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </header>
//     );
// }
