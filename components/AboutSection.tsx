"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'

const skills = [
    {skill: 'HTML'},
    {skill: 'Python'},
    {skill: 'CSS'},
    {skill: 'C++'},
    {skill: 'Java'},
    {skill: 'Kotlin'},
    {skill: 'Next.js'},
    {skill: 'Tensorflow'},
]

export default function AboutSection() {
    return (
        <section id = 'about'>
            <div className = 'my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className = "text-center font-bold text-4xl">About Me</h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
                <div className = "flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:p-4 md:space-y-0 md:space-x-10">
                    <div className = "md:w-1/2">
                        <h1 className = "text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
                        <p>Hi, I&apos;m Michael and I am a student studying Electrical Engineering and Computer Science at UC Berkeley.</p>
                    </div>
                    <div className = "md:w-1/2">
                        <h1 className = "text-center text-2xl font-bold mb-6 md:text-left">My skills</h1>
                        <div className = "flex flex-wrap flex-row justify-center md:justify-start">{skills.map((item, idx) => {
                            return <p key = {idx} className = "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
                        })}</div>
                    </div>
                </div>
            </div>
            <div className = 'flex flex-row justify-center'>
                <Link to = 'projects' activeClass = 'active' spy = {true} smooth = {true} offset = {-100} duration = {500}>
                    <HiArrowDown className = 'animate-bounce' size = {35}/>
                </Link>
            </div>
        </section>
    )
}