import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsWindowFullscreen } from "react-icons/bs"
import SlideUp from "./slideup"

const projects = [
    {
        name: "Project Lambda",
        description: "An informative static site detailing information about the Battle of Thermopylae in 480BC",
        image: "/images/project_lambda_ss.png",
        github: "https://github.com/Robrowno/project-lambda",
        link: "https://robrowno.github.io/project-lambda/",
        tech: ["HTML", "CSS", "Git"],
    },
    {
        name: "Rock, Paper, Scissors",
        description: "A Javascript web game of the classic Rock, Paper, Scissors!",
        image: "/images/rock_paper_scissors_ss.png",
        github: "https://github.com/Robrowno/rock-paper-scissors",
        link: "https://robrowno.github.io/rock-paper-scissors/",
        tech: ["HTML", "CSS", "Javascript", "Git"],
    },
    {
        name: "Guess The Number",
        description: "Represented in a console, I made a self-running Python based guessing game. Choose from 1 of three programs to run.",
        image: "/images/guess_the_num_ss.png",
        github: "https://github.com/Robrowno/guess-the-number",
        link: "https://guess-the-number-pp3.herokuapp.com/",
        tech: ["Python", "Git", "Heroku", "pip"],
    },
    {
        name: "Hofflecopter",
        description: "World Emoji Day 2022 C.I Hackathon, achieved 3rd place! Play as Hofflecopter and save David Hasslehoff from peril!",
        image: "/images/hofflecopter_ss.png",
        github: "https://github.com/Robrowno/hoffle-copter",
        link: "https://andrewdempsey2018.github.io/hoffle-copter/",
        tech: ["HTML", "CSS", "Javascript", "Git", "JSON"],
    },
    {
        name: "Rally Blog",
        description: "Documenting my journey in rallying through a full-stack Django project, follow along as I detail the events in the sport I love as they happened!",
        image: "/images/rally_blog_ss.png",
        github: "https://github.com/Robrowno/rally-blog",
        link: "https://rally-blog.herokuapp.com/",
        tech: ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap 5", "Python", "Django", "Git", "Heroku", "pip", "PostgreSQL", "Cloudinary", "SENDGRID API"],
    },
    {
        name: "Django Raceway",
        description: "A fictional E-Commerce B2C Trackday Company, selling trackday packages, experiences and tuition.",
        image: "/images/django_raceway_ss.png",
        github: "https://github.com/Robrowno/django-raceway",
        link: "https://django-raceway.herokuapp.com/",
        tech: ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap 5", "Python", "Django", "Git", "Heroku", "pip", "PostgreSQL", "Cloudinary", "SENDGRID API", "AWS S3", "Stripe API"],
    },

    {
        name: "SummerTrails",
        description: "C.I Summer Hackathon, achieved 3rd Place! Uses co-ordinates to pinpoint user images on a 3D Map.",
        image: "/images/summertrails_ss.png",
        github: "https://github.com/Robrowno/SummerTrails",
        link: "https://summertrails-heroku-dd7388a15196.herokuapp.com/",
        tech: ["HTML", "CSS", "Javascript", "Django 4.2", "Django REST API", "MapBox API", "Git", "Heroku", "Bootstrap 5", "Python"],
    },

]


export default function Projects() {

    return (
        <section id="projects">
            <div className="projects-content gradient-grey">
                <div>
                    <h3 className="text-center text-3xl font-bold pt-3">Projects</h3>
                </div>
                <div className="flex animate-slideUpCubiBezier animation-delay-2 flex-col-reverse space-y-24 space-y-reverse pb-8 pt-8">
                    {projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <SlideUp offset="-300px">
                                    <div className="flex flex-col md:flex-col lg:flex-row md:space-y-6 lg:space-x-12">
                                        <div className="mt-8 md:w-full lg:w-1/2">
                                            <Link href={project.link} target="_blank">
                                                <Image src={project.image}
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className="rounded-xl shadow-2xl hover:opacity-70"
                                                />
                                            </Link>
                                        </div>
                                        <div className="md:w-full lg:w-1/2 text-center mt-10">
                                            <h4 className="text-xl lg:text-3xl font-bold mb-5">{project.name}</h4>
                                            <p className="paragraph-desc text-md lg:text-xl leading-7">{project.description}</p>
                                            <div>
                                                <h5 className="text-md lg:text-xl font-semibold mt-4">Tech Stack:</h5>
                                                <ul className="flex flex-wrap flex-row justify-center space-x-4 mt-4">
                                                    {project.tech.map((tech, idx) => {
                                                        return (
                                                            <li key={idx} className=" text-xs lg:text-md font-semibold bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 rounded ">{tech}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="flex flex-row gap-9 justify-center space-x-4 mt-4">
                                                <Link id="github-icon" href={project.github} target="_blank"><BsGithub size={30} className="hover:translate-y-1 transition-transform cursor-pointer hover:opacity-70" /></Link>
                                                <Link id="window-icon" href={project.link} target="_blank"><BsWindowFullscreen size={30} className="hover:translate-y-1 transition-transform cursor-pointer hover:opacity-70" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>
                        )
                    })}

                </div>

            </div>

        </section>
    )
}