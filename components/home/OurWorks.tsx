'use client'
import React, { useActionState, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { cn } from '@/lib/utils';
import Image from 'next/image';
const OurWorks = () => {
    const [hidden, sethidden] = useState(true);
    const images = [

        {
            image: 'wabin.png',
            title: "Abin Antony Kattady | Portfolio",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'wsreyas.png',
            title: "Sreyas V | PortFolio",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w22.png',
            title: "Express Travels",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w17.png',
            title: "DataGrind.Ai",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w18.png',
            title: "Alpha Venture Studio",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w19.png',
            title: "Dashboard - HardhatCloudTech",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w20.png',
            title: "HardhatCloudTech",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w21.png',
            title: "Green X Solutions",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w1.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w3.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w4.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w16.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w13.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w8.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w12.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w5.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
        {
            image: 'w6.png',
            title: "Big brand Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel."
        },
    ];
    // const windowsize = useWindowSize();
    // useEffect(() => {
    //     console.log(windowsize)
    // }, [windowsize])
    return (
        <div id='works' className={'w-full relative screen min-h-[50vh] bg-zinc-800/10 mt-10 pt-8 px-6 transition-all'}>
            <div className='flex flex-col items-start px-3'>
                <span className='bg-white/40 text-[16px] px-3 py-1 rounded-sm mt-[80px]'>Projects</span>
                <h3 className='md:text-[44px] font-extrabold title text-[35px]'>Our Recent Works</h3>
                <p className='text-[13px] text-zinc-500 mt-0 mb-6 max-w-[700px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque culpa non! Quisquam placeat unde aut iste? Nobis voluptas a ducimus fuga placeat atque nesciunt!</p>
            </div>
            <div className={cn('sm:grid hidden mt-5 md:grid-cols-3 grid-cols-2 gap-10 px-3 transition-all duration-700 overflow-hidden', hidden ? 'h-[450px]' : 'h-[2700px] md:h-[2000px]')}>
                {images.map((item, index) => {
                    return <SwiperSlide key={index} className='group transition-all'>
                        <div className=' max-w-[700px] opacity-80 group-hover:opacity-100 transition-all w-full min-h-[220px] relative bg-zinc-900 overflow-hidden rounded-xl '>
                            <div className='flex justify-between px-3 py-1 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-red-500 rounded-full p-1'></div>
                                    <div className='bg-yellow-500 rounded-full p-1'></div>
                                    <div className='bg-green-500 rounded-full p-1'></div>
                                </div>
                                <div className='text-zinc-700  text-[6px] px-[4px] py-[2px] rounded-sm border-[0.01rem] border-zinc-800 [letter-spacing:0.10px]'>https:webcodecreators/design</div>
                                <div>
                                    <div className='bg-zinc-800 rounded-full p-1'></div>
                                </div>
                            </div>
                            <Image src={`/assets/${item.image}`} alt="" className='w-full h-[220px] object-cover grayscale-1 shadow-zinc-500 shadow-sm' width={500} height={600} />
                        </div>
                        <div className='px-4 py-1'>
                            <h4 className='text-[16px] text-zinc-400'>{item.title}</h4>
                            <h4 className='text-[9px] text-zinc-700'>{item.desc}</h4>
                        </div>
                    </SwiperSlide>
                })}
            </div>
            <div className={cn('absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t flex justify-center items-end from-black to-transparent', hidden ? 'flex' : 'hidden')}>
                <button onClick={() => {
                    sethidden(false);
                }} className='bg-black/80 rounded-full mb-8 px-6 py-2 border-[0.01rem] border-zinc-400 hover:translate-y-[-5px] transition-all hover:scale-105'>Show All</button>
            </div>
            <div className='sm:hidden block'>
                {/* <Swiper
                    className='w-full min-h-[400px]'
                    parallax={true}
                    centeredSlides={true}
                    initialSlide={1}
                    slidesPerView={windowsize.width > 850 ? 3 : windowsize.width > 600 ? 2 : 1}
                    spaceBetween={20}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {images.map((item, index) => {
                        return <SwiperSlide key={index} className='group transition-all'>
                            <div className=' max-w-[700px] w-full min-h-[220px] relative bg-zinc-900 overflow-hidden rounded-xl '>
                                <div className='flex justify-between px-3 py-1 items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-red-500 rounded-full p-1'></div>
                                        <div className='bg-yellow-500 rounded-full p-1'></div>
                                        <div className='bg-green-500 rounded-full p-1'></div>
                                    </div>
                                    <div className='text-zinc-700  text-[6px] px-[4px] py-[2px] rounded-sm border-[0.01rem] border-zinc-800 [letter-spacing:0.10px]'>https:webcodecreators/design</div>
                                    <div>
                                        <div className='bg-zinc-800 rounded-full p-1'></div>
                                    </div>
                                </div>
                                <Image src={`/assets/${item.image}`} alt="" className='w-full h-[220px] object-cover grayscale-1 shadow-zinc-500 shadow-sm' width={500} height={600} />
                            </div>
                            <div className='px-4 py-1'>
                                <h4 className='text-[16px] text-zinc-400'>{item.title}</h4>
                                <h4 className='text-[9px] text-zinc-700'>{item.desc}</h4>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper> */}
            </div>

        </div>
    )
}

export default OurWorks