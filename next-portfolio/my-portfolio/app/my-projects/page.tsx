import React from 'react';
import {Projects} from "@/constants/data";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {

    return(
        <div className="w-screen h-screen flex items-center justify-center bg-center bg-cover bg-slate-900" style={{ paddingTop: '100px'}}>
            <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] mb-5">
                {Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        text={project.text}
                        image={project.src}
                    />
                ))}
            </div>
        </div>
    )
}