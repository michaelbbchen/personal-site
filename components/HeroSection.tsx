"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { MdContactPage } from "react-icons/md";

export default function HeroSection() {
    return (
        <section id = 'home'>
            <div className = "flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row  md:sx-4 md:text-left md:py-32">
                <div className = "md:w-1/2 md:mt-2">
                    <Image className = "rounded-full" src = '/profile.jpg' alt = '' width = {300} height = {300}/>
                    
                </div>
                <div className = "md:w-1/2 md:mt-2">
                    <h1 className = 'font-semibold text-4xl mt-6 md:text-6xl md:mt-0'>Hi, I&apos;m Michael!</h1>
                    <p className = 'text-lg mt-4 mb-6 md:text-xl'>I&apos;m an aspiring software engineer. This is where I keep my things.</p>
                    <p className = 'text-lg mt-4 mb-6 md:text-xl'>Checkout my Github, LinkedIn, Resume, or keep scrolling!</p>
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
                </div>
            </div>
            <div className = 'flex flex-row justify-center'>
                <Link to = 'about' activeClass = 'active' spy = {true} smooth = {true} offset = {-100} duration = {500}>
                    <HiArrowDown className = 'animate-bounce' size = {35}/>
                </Link>
            </div>
        </section>
    )
}