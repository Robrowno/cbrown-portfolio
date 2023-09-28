"use client";
import React, { useState, useEffect } from 'react';
import Projects from "../components/projects"
import SlideUp from "../components/slideup"

const projectsInProgress = [

    {
        name: "Rally News",
        description: "Pulling Rally news into one location for users to enjoy! Practicing using selenium, Python and MongoDB.",
        tag: "Being worked on...",
        tech: ["Python", "Selenium", "MongoDB"],
    },

]


export default function ProjectsPage() {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className="min-h-screen gradient-grey">
            <div className="pt-10 mt-8">
                <Projects />

                <div className="flex animate-slideUpCubiBezier animation-delay-2 flex-col-reverse space-y-24 space-y-reverse pt-8 pb-6">
                    {projectsInProgress.map((projectsInProgress, idx) => {
                        return (
                            <div key={idx}>
                                {width > 768 ? (
                                    <SlideUp offset="-300px">
                                        <div className="flex flex-col md:flex-col lg:flex-row md:space-y-6 lg:space-x-12">
                                            <div className="w-full text-center mt-10">
                                                <h4 className="text-xl lg:text-3xl font-bold mb-8">{projectsInProgress.tag}</h4>
                                                <h4 className="text-xl lg:text-3xl font-bold mb-5">{projectsInProgress.name}</h4>
                                                <p className="paragraph-desc text-md lg:text-xl leading-7">{projectsInProgress.description}</p>
                                                <div>
                                                    <h5 className="text-md lg:text-xl font-semibold mt-4">Tech Stack:</h5>
                                                    <ul className="flex flex-wrap flex-row justify-center space-x-4 mt-4">
                                                        {projectsInProgress.tech.map((tech, idx) => {
                                                            return (
                                                                <li key={idx} className=" text-xs lg:text-md font-semibold bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 rounded ">{tech}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SlideUp>
                                ) : (
                                    <div className="flex flex-col md:flex-col lg:flex-row md:space-y-6 lg:space-x-12">
                                        <div className="w-full text-center mt-10">
                                            <h4 className="text-xl lg:text-3xl font-bold mb-8">{projectsInProgress.tag}</h4>
                                            <h4 className="text-xl lg:text-3xl font-bold mb-5">{projectsInProgress.name}</h4>
                                            <p className="paragraph-desc text-md lg:text-xl leading-7">{projectsInProgress.description}</p>
                                            <div>
                                                <h5 className="text-md lg:text-xl font-semibold mt-4">Tech Stack:</h5>
                                                <ul className="flex flex-wrap flex-row justify-center space-x-4 mt-4">
                                                    {projectsInProgress.tech.map((tech, idx) => {
                                                        return (
                                                            <li key={idx} className=" text-xs lg:text-md font-semibold bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 rounded ">{tech}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

        </div >
    )
}