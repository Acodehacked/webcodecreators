'use client'

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { HomeNavbarContext } from '@/components/contexts/HomeNavBarContext'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient'
import Image from 'next/image'
import { HiMiniStar } from "react-icons/hi2";
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import OurWorks from '@/components/home/OurWorks'
import { BiLogoWhatsapp, BiPhoneCall } from 'react-icons/bi'
import Pricings from '@/components/home/Pricings'
import Form from './Form'
import { Parallel } from './pp'

const HomePage = () => {
    const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
    const [lighmode, setlighmode] = useState(false);
    const navbarctx = useContext(HomeNavbarContext);
    const ref = useRef(null);
    const ref2 = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    const [hookedYPostion, setHookedYPosition] = React.useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setHookedYPosition(latest);
    })
    useEffect(() => {
        if (section1InView) {
            setlighmode(false)
        } else {
            setlighmode(true);
        }
        navbarctx.togglelight(lighmode)
    }, [])
    useEffect(() => {
        if (section1InView) {
            setlighmode(false)
        } else {
            setlighmode(true);
        }
        navbarctx.togglelight(lighmode)
    }, [section1InView]);
    return (
        <>
            <div ref={section1Ref} className="">
                <section className="hidden pb-12 pt-20 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="relative">
                            <div className="lg:w-2/3 pt-10">
                                <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">Perfect place for Companies & Marketers</p>
                                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Innovate. Design</span> Deliver</h1>
                                <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">"Bringing ideas to life with seamless web solutions."</p>
                                <div className='flex items-center mt-8 sm:mt-12 gap-4'>
                                    <div className="relative inline-flex items-center justify-center  group">
                                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                        <Link href="/#contact" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" > Enquire Now </Link>
                                    </div>
                                    <Link href="/#works" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-zinc-900 border border-black rounded-full" > Our Works </Link>

                                </div>
                                <div>
                                    <div className="flex flex-col items-start pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                                        <div className='text-yellow-400/80 flex ml-2'>
                                            <HiMiniStar />
                                            <HiMiniStar />
                                            <HiMiniStar />
                                            <HiMiniStar />
                                            <HiMiniStar />
                                        </div>
                                        <span className="ml-2 text-base font-normal text-white/40"> 50+ New Happy Clients This Year </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                                <img className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <div className='hidden'>
                <ParallaxProvider>
                    <div className='flex w-full md:flex-row flex-col'>
                        <div className=' w-full px-5'>
                            <div className='w-full  my-10 rounded-[20px] mx-auto overflow-hidden'>
                                <ParallaxBanner
                                    className="h-[300px] w-full"
                                    layers={[
                                        {
                                            speed: -20,
                                            image: 'https://webcodecreators.com/assets/mockup1.jpg',
                                        }
                                    ]}
                                >
                                    <div
                                        className='relative transition-all hover:opacity-100 justify-center flex items-center opacity-0 sm:text-xl bg-black/80 p-3 w-full h-full text-white'
                                    >
                                        <span className='text-center'>Unique Designs: Tailored websites that reflect your brand</span>
                                    </div>
                                </ParallaxBanner>
                            </div>
                        </div>
                        <div className=' w-full px-5'>
                            <div className='w-full max-w-[1200px] my-10 rounded-[20px] mx-auto overflow-hidden'>
                                <ParallaxBanner
                                    className="h-[300px] w-full"
                                    layers={[
                                        {
                                            speed: 20,
                                            image: 'https://webcodecreators.com/assets/mockup3.jpg',
                                        }
                                    ]}
                                >
                                    <div
                                        className='relative transition-all md:hover:opacity-100  hover:opacity-100 justify-center flex items-center opacity-0 sm:text-xl bg-black/80 p-3 w-full h-full text-white'
                                    >
                                        <span className='text-center'>Complete Solutions: From concept to launch, we deliver excellence.</span>
                                    </div>
                                </ParallaxBanner>
                            </div>
                        </div>
                    </div>
                </ParallaxProvider>
            </div>
            {/* <Parallel /> */}
            <div ref={ref2} className="bg-background min-h-[100vh] w-full overflow-y-hidden overflow-x-hidden">
                <h3 className='title mx-auto text-[37px]  font-extrabold w-full text-center mt-[100px] px-4'>What We Do?</h3>
                <OurServices />
            </div>
            {/* // Works HEad */}

            <OurWorks />
            <div ref={ref2} className="bg-background relative h-[400px] w-full overflow-hidden">
                <div className='w-full rotate-45 mt-[-300px]'>
                    <div className='overflow-hidden mt-5'>
                        <motion.div style={{ marginLeft: `-${hookedYPostion * 600}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w2.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w1.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w3.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w4.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w5.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div style={{ x: `${(hookedYPostion * 600) - 900}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w6.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w7.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w8.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w9.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w10.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden mt-5'>
                        <motion.div style={{ marginLeft: `-${hookedYPostion * 600}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w2.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w1.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w3.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w4.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w5.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div style={{ x: `${(hookedYPostion * 600) - 900}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w11.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w16.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w12.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w13.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w10.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                </div>
                <div className='absolute top-0 bottom-0 flex flex-col justify-center items-center left-0 right-0 bg-black/95'>
                    <h3 className='title md:text-[50px] text-[30px] font-extrabold w-full text-center px-4'>Do you have any ideas?</h3>
                    <p className='text-[22px] text-zinc-400'>Turn them into mindblowing designs!</p>
                    <div className='flex gap-3 mt-5'>
                        <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-primary to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Get a Quote</Link>
                        <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-green-500 to-green-400 hover:scale-105 transition-all shining-button overflow-hidden relative text-black gap-3 items-center' href={'https://wa.me/919048741910'}><BiLogoWhatsapp size={30} /> Contact Us</Link>
                    </div>
                </div>
            </div>
            <Pricings />
            <Form />
            <div className='screen flex md:flex-row flex-col gap-5 items-center justify-between px-10 py-10 '>
                <h3 className='text-[15px] text-zinc-300'>&copy; WebCodeCreators all rights reserved</h3>
                <div className='flex gap-4 text-[14px] text-zinc-400'>
                    <Link href={'/'}>Terms & Conditions</Link>
                    <Link href={'/'}>Privacy Policy</Link>
                    <Link href={'/'}>About Us</Link>
                </div>
            </div>
        </>
    )
}
export const OurServices = () => {
    return <>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.3, stiffness: 1 }} className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1440px] w-full mx-auto gap-5 px-6 mt-8'>
            <div className=' card rounded-[40px] flex justify-center flex-col items-center gap-3 p-3'>
                <Image src={'/assets/web-design.png'} alt="" className='mt-3' width={70} height={70} />
                <h2 className='text-[25px] text-violet-400'>Web Designing</h2>
                <h2>Transform your vision into a stunning, user-friendly website. Our expert designers craft visually appealing and intuitive designs that captivate your audience and enhance user experience!</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
            <div className=' card rounded-[40px] justify-center flex flex-col items-center gap-3 px-6'>
                <Image src={'/assets/web-development.png'} alt="" className='mt-3' width={90} height={90} />
                <h2 className='text-[25px] text-violet-400'>FullStack Web Development</h2>
                <h2>End-to-end development solutions for both front-end and back-end, creating seamless, scalable, and efficient websites tailored to your needs</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
            <div className=' card rounded-[40px] justify-center flex flex-col items-center gap-3 p-3'>
                <Image src={'/assets/app-development.png'} alt="" className='mt-3' width={90} height={90} />
                <h2 className='text-[25px] text-violet-400'>App Development</h2>
                <h2>From concept to launch, we create intuitive and powerful mobile applications. Our team specializes in developing high-quality apps for both iOS and Android, tailored to meet your unique business needs.</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
            <div className='max-w-[590px] mx-auto px-6 w-full card rounded-[40px] justify-center flex flex-col items-center gap-3 p-23 md:col-span-3'>
                <Image src={'/assets/graphic-designer.png'} alt="" className='mt-3' width={90} height={90} />
                <h2 className='text-[25px] text-violet-400'>Graphic Designing</h2>
                <h2>Enhance your brand{'\''}s visual identity with our creative graphic design solutions. From logos to marketing materials, we craft compelling visuals that captivate and engage your audience.</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, stiffness: 1 }} className='w-full mx-auto  flex justify-center px-2'>
            
        </motion.div> */}
    </>
}
export default HomePage