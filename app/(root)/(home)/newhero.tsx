
'use client'
import { motion } from 'framer-motion'
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { LaptopModel } from "./components/laptop";
import Image from "next/image";
import * as THREE from "three";
import { useScroll } from 'framer-motion';
import Scene from './components/Scene';
import Link from 'next/link';
const NewHero = () => {

    return (
        <div className="max-h-[100dvh] h-full overflow-hidden">
            <div className="w-full h-screen relative">
                <div className="absolute z-[2] top-[-50px] pt-[50px] h-screen flex flex-col items-center justify-center left-0 right-0">
                    <h1 className="font-main md:[line-height:100px] leading-tight sm:text-[60px] text-[35px] sm:tracking-normal tracking-tight md:text-[80px] text-center">
                        <span className="">Building the <span className="font-bebas relative gradient-text md:text-[100px] mt-[30px] text-[80px]">
                            <br />Future
                            {/* <Image src={'/assets/splash.png'} className="absolute top-[50%] translate-y-[-50%] px-4 left-[50%] translate-x-[-50%] right-0 bottom-0 z-[1]" alt="" height={200} width={200} /> */}
                        </span></span><br />of Digital Experiences
                    </h1>
                    <p className='font-light text-center mt-5 font-sans tracking-wider text-white/80 '>Smart, Secure, and Scalable Web & App Development</p>
                    <Link className='flex px-4 py-2 rounded-full bg-gradient-to-t from-primary font-main to-violet-800 hover:scale-105 transition-all mt-4 shining-button overflow-hidden  relative z-[999] text-[17px]' href={'/#contact'}>ENQUIRE NOW</Link>

                </div>
                <div className="absolute bg-gradient-to-t from-black via-transparent to-transparent pointer-events-auto top-0 left-0 right-0 bottom-0 w-full h-full z-[1]"></div>
                {/* <Canvas className="relative touch-none bg-none pointer-events-auto drop-shadow-lg z-[2] mt-[200px] h-full"
                    camera={{ position: [0, 0, 5], fov: 50 }} // Moves to front & lower level
                    style={{ background: "none" }}
                    gl={{ alpha: true }}>
                    <Scene />
                </Canvas> */}

            </div>
            <iframe className='absolute left-0 right-0 top-0 bottom-0 w-full h-full' src='https://my.spline.design/abstractnirvana-U47KgoKO3TjM5m0JSLwfO4RG/'  width='100%' height='100%'></iframe>
            {/* <Image src={'/assets/bghero.png'} className="absolute left-0 bottom-0 right-0 w-full top-0 md:h-auto h-full object-cover" alt="" width={3000} height={3000} />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black to-transparent"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Image src={'/assets/ribbon.png'} className="absolute left-0 bottom-0 right-0 md:object-contain object-cover sm:h-auto h-[50%] w-full" alt="" width={2000} height={3000} />
            </motion.div> */}
        </div>
    )
}

export default NewHero