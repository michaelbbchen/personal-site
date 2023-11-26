import React from 'react'

interface Project {
    name: string
    description: string
}

const projects: Project[] = [
    {
        name: 'Project 1',
        description: 'description 1'
    }, 
    {
        name: 'Project 2',
        description: 'description 2'
    }
]

function getProjectInfo(p : Project, idx : number) {
    return (
        <div className = 'flex flex-col justify-center' key = {idx}>
            <h1 className = 'text-4xl font-bold mb-6 text-center'>{p.name}</h1>
            <p>{p.description}</p>
        </div>
    )
}

export default function ProjectSection() {
    return (
        <section id = 'projects'>
            <div className = 'my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className = "text-center font-bold text-4xl">Projects</h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
                <p className = 'text-center'>Updated Soon!</p>
                {/* <div className = "flex flex-col items-center space-y-28">
                    {projects.map((p, idx) => {
                        return (
                            getProjectInfo(p, idx)
                        )
                    })}
                </div> */}
            </div>
        </section>
    )
}