// import Link from "next/link";
// import Image from "next/image";
//
// export default function Home() {
//   return (
//     <>
//       <main className="w-screen h-screen relative">
//         <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage : "url(/main-bg.webp"}}>
//             <div className="pl-20 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]" >
//                 <h1 className="text-[50px] text-white font-semibold">
//
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                         {" "}
//                         Jr. Frontend Developer
//                     </span>
//                 </h1>
//                 <p className="text-gray-200 hidden md:block">
//                     Web Development student at Thomas More University of Applied Sciences in Antwerp, Belgium
//
//                 </p>
//                 <div className="flex-col md:flex-row hidden md:flex gap-5">
//                     <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//                         Learn More
//                     </Link>
//                     <Link href="/my-projects" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//                         <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"  />
//                         My Projects
//                     </Link>
//                     <Link href="/contact-me" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//                         <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"  />
//                         Contact Me
//                     </Link>
//                 </div>
//             </div>
//         </div>
//
// {/*mobile*/}
//           <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
//               <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//                   Learn More
//               </Link>
//               <Link href="/my-projects" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//
//                   My Projects
//               </Link>
//               <Link href="/contact-me" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
//
//                   Contact Me
//               </Link>
//           </div>
//
//           <div className="absolute bottom-0 right-0 z-[10]">
//               <Image
//                   src="/horse.gif"
//                   alt="horse"
//                   height={300}
//                   width={300}
//                   className="absolute right-55 top-40"
//               />
//
//               {/*<Image src="/cliff.webp" alt="cliff" width={480} height={480} />*/}
//           </div>
//
//
//           <div className="absolute bottom-0 z-[5] w-full h-full">
//               <Image
//                 src="/trees.webp"
//                 alt="trees"
//                 width={2000}
//                 height={2000}
//                 className="w-full h-full"
//               />
//
//               {/*<Image*/}
//               {/*    src"/stars.gif"*/}
//               {/*    alt="stars"*/}
//               {/*    height={300}*/}
//               {/*    width={300}*/}
//               {/*    className="absolute top-10 left-0 z-[10]"*/}
//               {/*/>*/}
//           </div>
//
//       </main>
//     </>
//   );
// }


"use client"
import Link from "next/link";
import Image from "next/image";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare, FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";


export default function Home() {
    return (
        <>
            <main className="w-screen h-screen relative">
                <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage : "url(/main-bg.webp"}}>
                    <div className="pl-20 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]" >

                        <h1 className="text-[50px] text-white font-semibold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                              {" "}
                              Jr. Frontend Developer
                                Salih Tuzcu
                            </span>
                        </h1>

                        <p className="text-gray-200 hidden md:block">
                            Web Development student at Thomas More University of Applied Sciences in Antwerp, Belgium

                        </p>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                        >
                            <Link
                                href="#contact"
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
                </div>

                {/*/!*mobile*!/*/}
                {/*<div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">*/}
                {/*    <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">*/}
                {/*        Learn More*/}
                {/*    </Link>*/}
                {/*    <Link href="/my-projects" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">*/}

                {/*        My Projects*/}
                {/*    </Link>*/}
                {/*    <Link href="/contact-me" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">*/}

                {/*        Contact Me*/}
                {/*    </Link>*/}
                {/*</div>*/}









            </main>


        </>
    );
}
