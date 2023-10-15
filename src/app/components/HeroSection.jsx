"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";



const HeroSection = () => {
    return(
        <section>
            <div className="grid gird-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      Hello, I'm{" "}  
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Alex',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Backend Developer',
                        1000,
                        'CS Education Researcher',
                        1000,
                        
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Lorem Ipsum is simply dummy text 
                of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book.
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Hire Me
                        </button>
                    <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download Resume
                        </span>
                        </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image 
                src="/images/jakechilling.png" 
                alt="hero image"
                className="absolute transfrom -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300} 
                height={300}
                />
                </div>
            </div>
           </div>
        </section>
    )
}

export default HeroSection