'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import StaggerHoverText from '../ui/StaggerHoverText'
import { SquareMenu, X } from 'lucide-react'
import { BiMenuAltRight } from "react-icons/bi";
import { cn } from '@/lib/utils'
import { HomeNavbarContext } from '../contexts/HomeNavBarContext'

const HomeNavbar = () => {
    const [menuopen, setmenuopen] = useState(false);
    const navbarctx = useContext(HomeNavbarContext);
    return (
        <div className={cn('w-full px-5 pt-4 top-0 fixed z-[99999] transition-all duration-500', navbarctx.light ? '' : 'sm:bg-transparent bg-black')}>
            <nav className='screen p-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image src={'/assets/webcode.png'} width={60} height={60} alt='' />
                </div>
                <div className="flex items-center">
                    <Link className='flex px-4 py-2 rounded-full bg-gradient-to-t from-primary font-main to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative text-[17px]' href={'/#contact'}>ENQUIRE NOW</Link>
                    <div onClick={() => {
                        setmenuopen(true)
                        console.log('open')
                    }} className='relative p-2 md:hidden rounded-full bg-black flex z-[1]'>
                        <BiMenuAltRight className={`text-${navbarctx.light ? '' : 'white'}`} size={40} />
                    </div>
                </div>
            </nav>
            <div className="topbar md:flex hidden fixed z-[999] bg-[#141414]/40 backdrop-blur-sm border-[#8c018c]/20 border-[0.02rem] p-1 rounded-full topbar">
                    <Link className='font-maim font-regular z-[999]' href={'/#'}>HOME</Link>
                    <Link className='font-main' href={'/#works'}>WORKS</Link>
                    <Link className='font-main' href={'/#aboutus'}>ABOUT US</Link>
                    {/* <Link className='font-main' href={'/#ourteam'}>OUR TEAM</Link> */}
                    <Link className='font-main' href={'/#contact'}>CONTACT</Link>
            </div>
            <AnimatePresence>
                {menuopen && <motion.div
                    transition={{
                        stiffness:1
                    }}
                    initial={{
                        y:-500
                    }}
                    exit={{
                        y:-500
                    }}
                    animate={{y:0}}
                    className="left-0 right-0 top-0 md:hidden flex flex-col w-full h-auto fixed z-[999] bg-[#141414] border-[#262626] border-[0.02rem] p-1 rounded-b-xl">
                    <div className="flex relative flex-col gap-5 text-[20px] px-10 py-5">
                        <div className="flex w-full justify-between items-center mb-5">
                            <h3 className='font-bebas text-zinc-600 text-4xl'>MENU</h3>
                            <X onClick={()=>setmenuopen(false)} size={40} />
                        </div>
                        <Link onClick={()=>setmenuopen(false)} className='font-main font-regular z-[999] text-primary' href={'/'}>HOME</Link>
                        <Link onClick={()=>setmenuopen(false)} className='font-main' href={'/#works'}>WORKS</Link>
                        <Link onClick={()=>setmenuopen(false)} className='font-main' href={'/#aboutus'}>ABOUT US</Link>
                        <Link onClick={()=>setmenuopen(false)} className='font-main' href={'/#ourworks'}>OUR TEAM</Link>
                        <Link onClick={()=>setmenuopen(false)} className='font-main' href={'/#contact'}>CONTACT</Link>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default HomeNavbar