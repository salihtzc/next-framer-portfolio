import Image from "next/image";
import {Socials} from "@/constants";

export default function Navbar() {

    return(
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row-gap-3 items-center">
                {/*<h1 className="text-[50px] text-white font-semibold">*/}
                {/*    My Name*/}
                {/*</h1>*/}
                <h1 className="text-white text-[30px] font-semibold"> Frontend Dev</h1>
            </div>

            <div className="flex flex-row gap-5 mb-2">
                {Socials.map((social) => (
                    <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={28}
                        height={28}
                    />
                ))}
            </div>
        </div>
    )
}