import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

interface Project {
    name: string
    description: string
    github: string | undefined
    link: string | undefined
}

const projects: Project[] = [
    {
        name: 'michaelchen01.dev',
        description: 'My personal website built with NextJS and Node',
        github: 'https://github.com/michaelbbchen/personal-site',
        link: 'https://michaelchen01.dev'
    }, 
    {
        name: 'Wordchase',
        description: 'A last man standing typing game built on React, Express, and Node, and hosted on AWS',
        github: 'https://github.com/michaelbbchen/wordchase',
        link: 'http://wordchase.xyz'
    }
]

function getProjectInfo(p : Project, idx : number) {
    return (
        <div className = 'flex flex-col justify-center items-center border border-solid border-violet-500 p-4 rounded w-1/2 border-2' key = {idx}>
            <a className = 'text-xl mb-6 text-center' href={p.link} target = '_blank'>{p.name}</a>
            <p className = 'mb-6 text-center' >{p.description}</p>
            {p.github && <a href='https://github.com/michaelbbchen' target = '_blank'>
                <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" size={40}/>
            </a>}
        </div>
    )
}

export default function ProjectSection() {
    return (
        <section id = 'projects'>
            <div className = 'my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className = "text-center font-bold text-4xl space-y-12 mb-12">Projects</h1>
                {/* <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr> */}
                {/* <p className = 'text-center'>Updated Soon!</p> */}
                <div className = "flex flex-col items-center space-y-16">
                    {projects.map((p, idx) => {
                        return (
                            getProjectInfo(p, idx)
                        )
                    })}
                </div>
            </div>
        </section>
    )
}