import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { MdContactPage } from "react-icons/md";

export default function Footer() {
    return (
        <footer className = 'mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
            <hr className = 'w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
            <div className = 'flex flex-row items-center justify-center space-x-2 mb-1 py-4'>
                <a href='https://github.com/michaelbbchen' target = '_blank'>
                    <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" size={30}/>
                </a>
                <a href='https://www.linkedin.com/in/michael-chen-2125b0161/' target = '_blank'>
                    <AiOutlineLinkedin className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" size={30}/>
                </a>
                <a href='/resume.pdf' target = '_blank'>
                    <MdContactPage className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" size={30}/>
                </a>
            </div>
        </footer>
    )
}