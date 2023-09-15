import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsWindowFullscreen } from "react-icons/bs"

const projects = [
    {
        name: "Project Lambda",
        description: "An informative static site detailing information about the Battle of Thermopylae in 480BC",
        image: "/images/project_lambda_ss.png",
        github: "https://github.com/Robrowno/project-lambda",
        link: "https://robrowno.github.io/project-lambda/",
        tech: [],
    },
    {
        name: "Rock, Paper, Scissors",
        description: "A Javascript web game of the classic Rock, Paper, Scissors!",
        image: "/images/rock_paper_scissors_ss.png",
        github: "https://github.com/Robrowno/rock-paper-scissors",
        link: "https://robrowno.github.io/rock-paper-scissors/",
        tech: [],
    },
    {
        name: "Guess The Number",
        description: "Represented in a console, I made a self-running Python based guessing game. Choose from 1 of three programs to run.",
        image: "/images/guess_the_num_ss.png",
        github: "https://github.com/Robrowno/guess-the-number",
        link: "https://guess-the-number-pp3.herokuapp.com/",
        tech: [],
    },
    {
        name: "Hofflecopter",
        description: "World Emoji Day 2022 C.I Hackathon, achieved 3rd place! Play as Hofflecopter and save David Hasslehoff from peril!",
        image: "/images/hofflecopter_ss.png",
        github: "https://github.com/Robrowno/hoffle-copter",
        link: "https://andrewdempsey2018.github.io/hoffle-copter/",
        tech: [],
    },
    {
        name: "Rally Blog",
        description: "Documenting my journey in rallying through a full-stack Django project, follow along as I detail the events in the sport I love as they happened!",
        image: "/images/rally_blog_ss.png",
        github: "https://github.com/Robrowno/rally-blog",
        link: "https://rally-blog.herokuapp.com/",
        tech: [],
    },
    {
        name: "Django Raceway",
        description: "A fictional E-Commerce B2C Trackday Company, selling trackday packages, experiences and tuition.",
        image: "/images/django_raceway_ss.png",
        github: "https://github.com/Robrowno/django-raceway",
        link: "https://django-raceway.herokuapp.com/",
        tech: [],
    },

    {
        name: "SummerTrails",
        description: "C.I Summer Hackathon, achieved 3rd Place! Uses co-ordinates to pinpoint user images on a 3D Map.",
        image: "/images/summertrails_ss.png",
        github: "https://github.com/Robrowno/SummerTrails",
        link: "https://summertrails-heroku-dd7388a15196.herokuapp.com/",
        tech: [],
    },

]

const projectsInProgress = [

    {
        name: "Rally News",
        description: "Pulling Rally news into one location for users to enjoy! Practicing using selenium, Python and MongoDB",
        image: "",
        github: "",
        tag: "Being worked on...",
        tech: [],
    },

]





export default function Projects() {

    return (
        <section id="projects">
            <div className="projects-content gradient-grey">
                <div>
                    <h3 className="text-center text-3xl font-bold">Projects</h3>
                </div>
                <div className="flex flex-col-reverse space-y-24 space-y-reverse pb-8 pt-8">
                    {projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col md:flex-row md:space-x-12">
                                    <div className="md:w-1/2">
                                        <Image src={project.image}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-2xl hover:opacity-70"
                                        />
                                    </div>
                                    <div className="md:w-1/2 text-center">
                                        <h4 className="text-3xl font-bold mb-5">{project.name}</h4>
                                        <p className="text-xl leading-7">{project.description}</p>
                                        <div className="flex flex-row gap-9 justify-center space-x-4 mt-4">
                                            <Link id="github-icon" href={project.github} target="_blank"><BsGithub size={30} className="hover:translate-y-1 transition-transform cursor-pointer hover:opacity-70" /></Link>
                                            <Link id="window-icon" href={project.link} target="_blank"><BsWindowFullscreen size={30} className="hover:translate-y-1 transition-transform cursor-pointer hover:opacity-70" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </section>
    )
}