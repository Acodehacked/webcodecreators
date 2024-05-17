'use client'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { HomeNavbarContext } from '@/components/contexts/HomeNavBarContext'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const HomePage = () => {
    const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
    const [lighmode, setlighmode] = useState(true);
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
        console.log(hookedYPostion);
    }, [hookedYPostion])
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
            <div ref={section1Ref} className='w-full relative z-[2]'>
                <BackgroundGradientAnimation className="min-h-[100vh] w-full overflow-x-hidden bg-white/90 flex flex-col items-center justify-between" >
                    <motion.div className="flex flex-col items-center justify-center h-full mt-[9rem]">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.4, stiffness: 1 }} animate={{ opacity: 1, y: 0 }} className="text-[45px] max-w-[800px] text-center font-extrabold title-animated ">Crafting Digital Excellence through WebCodeCreators</motion.h2>
                        <p className="text-primary font-medium">Where Vision Meets Innovation</p>
                        <div className="flex gap-3 mt-5">
                            <Link className='flex px-4 py-3 rounded-full text-muted border-[0.02rem] border-muted hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Our Works</Link>
                            <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-primary to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Get a Quote</Link>
                        </div>
                    </motion.div>
                    <div className='absolute bottom-0 z-[1]'>
                        <Image src={'/assets/headerimg.png'} width={500} className="h-[200px] object-top object-cover overflow-hidden" height={200} alt="" />
                    </div>
                </BackgroundGradientAnimation>
            </div>
            <div ref={ref2} className="bg-background min-h-[100vh] w-full overflow-x-hidden">
                <h3 className='title mx-auto text-[30px]  font-extrabold w-full text-center mt-10 px-4'>Our Digital Services</h3>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1440px] w-full mx-auto gap-5 px-6 mt-8'>
                    <div className=' card rounded-xl flex justify-center flex-col items-center gap-3 p-3'>
                        <h2 className='text-[25px] text-violet-400'>Web Desiging</h2>
                        <h2>Transform your vision into a stunning, user-friendly website. Our expert designers craft visually appealing and intuitive designs that captivate your audience and enhance user experience!</h2>
                        <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900'>more.</Link>
                    </div>
                    <div className=' card rounded-xl justify-center flex flex-col items-center gap-3 p-3'>
                        <h2 className='text-[25px] text-violet-400'>FullStack Web Development</h2>
                        <h2>End-to-end development solutions for both front-end and back-end, creating seamless, scalable, and efficient websites tailored to your needs</h2>
                        <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900'>more.</Link>
                    </div>
                    <div className=' card rounded-xl justify-center flex flex-col items-center gap-3 p-3'>
                        <h2 className='text-[25px] text-violet-400'>App Development</h2>
                        <h2>From concept to launch, we create intuitive and powerful mobile applications. Our team specializes in developing high-quality apps for both iOS and Android, tailored to meet your unique business needs.</h2>
                        <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900'>more.</Link>
                    </div>
                </div>
                <div className='w-full mx-auto mt-10 flex justify-center'>
                    <div className='max-w-[450px] w-full card rounded-xl justify-center flex flex-col items-center gap-3 p-3'>
                        <h2 className='text-[25px] text-violet-400'>Graphic Desiging</h2>
                        <h2>Enhance your brand{'\''}s visual identity with our creative graphic design solutions. From logos to marketing materials, we craft compelling visuals that captivate and engage your audience.</h2>
                        <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900'>more.</Link>
                    </div>
                </div>
            </div>
            <div ref={ref2} className="bg-background min-h-[100vh] w-full overflow-x-hidden">
                <h3 className='title mx-auto text-[50px] font-extrabold w-full text-center mt-10 px-4'>Our Latest Works</h3>
                <div className='overflow-hidden md:mt-0 mt-5'>
                    <motion.div style={{ marginLeft: `-${hookedYPostion * 600}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[300px] h-[150px] w-max'>
                        <Image className='workCard' src={'/assets/w2.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w1.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w3.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w4.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w5.png'} alt='' height={300} width={400} />
                    </motion.div>
                </div>
                <div className='overflow-hidden w-full'>
                    <motion.div style={{ x: `${(hookedYPostion * 600) - 900}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[300px] h-[150px] w-max'>
                        <Image className='workCard h-[200px]' src={'/assets/w6.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w7.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w8.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w9.png'} alt='' height={300} width={400} />
                        <Image className='workCard' src={'/assets/w10.png'} alt='' height={300} width={400} />
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default HomePage