'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const Form = () => {
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [mail, setmail] = useState('');
    const [type, settype] = useState('');
    const [message, setmessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const validation = () =>{
        setError('');
        if (name == '') {
            setError('Please enter name');
        }
        if (phone == '') {
            setError('Please enter phone');
        }
        if (mail == '') {
            setError('Please enter mail');
        }
        if (type == '') {
            setError('Please select service');
        }
        if (message == '') {
            setError('Please enter your message');
        }
        return error;
    }
    const handleSubmit = async () => {
        var e = validation();
        if (e == '') {
            setLoading(true);
            let formData: FormData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('mail', mail);
            formData.append('type', type);
            formData.append('message', message);
            await fetch(`https://porukaracollege.in/api/webcode/form?name=${name}&phone=${phone}&mail=${mail}&type=${type}&message=${message}`, {
                method: 'get',
            }).then((res) => res.json()).then((json) => {
                if (json.error == null) {
                    setSuccess('Your message send Successfully');
                    setTimeout(()=>{
                        setSuccess('');
                    },4000)
                }
                form.current?.reset();
                setLoading(false);
            });
        }

    }
    return (
        <div className='screen py-10 px-3 flex ' id='contact'>
            <div className='flex  w-full mx-auto rounded-2xl max-w-[900px] md:flex-row flex-col py-8'>
                {/* <div className='flex flex-col items-center p-4'>
                    <Image src={'/assets/dev.gif'} width={300} height={300} alt="" />


                </div> */}
                <form ref={form} className='flex flex-col gap-3 px-5 py-4 max-w-[600px] mx-auto w-full'>
                    <h3 className='title md:text-[50px] text-[30px] font-extrabold '>Contact Us</h3>
                    <p className='text-zinc-400 text-[13px]'>Fill this form and share your ideas with us!</p>
                    {error != '' && <div className='bg-red-800 text-white px-4 py-3 rounded-md mt-2 mb-3'>
                        {error}
                    </div>}
                    {success != '' && <div className='bg-green-800 text-white px-4 py-3 rounded-md mt-2 mb-3'>
                        {success}
                    </div>}
                    <div className='flex md:flex-row flex-col gap-4 max-w-[800px] w-full'>
                        <input name='name' value={name} onChange={(e) => setname(e.currentTarget.value)} className='bg-black px-4 py-4 rounded-xl w-full border-zinc-900 transition-all border-[0.01rem] focus-visible:border-zinc-200 outline-none' placeholder='Name' />
                        <input name='mail' value={mail} onChange={(e) => setmail(e.currentTarget.value)} className='bg-black px-4 py-4 rounded-xl w-full border-zinc-900 transition-all border-[0.01rem] focus-visible:border-zinc-200 outline-none' placeholder='  Email' />
                    </div>
                    <div className='flex md:flex-row flex-col gap-4 max-w-[800px] w-full'>
                        <input name='phone' value={phone} onChange={(e) => setphone(e.currentTarget.value)} className='bg-black px-4 py-4 rounded-xl w-full border-zinc-900 transition-all border-[0.01rem] focus-visible:border-zinc-200 outline-none' placeholder='  Phone (including country code)' />
                        <select value={type} onChange={(e) => settype(e.currentTarget.value)} className='bg-black px-4 py-4 rounded-xl w-full border-zinc-900 transition-all border-[0.01rem] focus-visible:border-zinc-200 outline-none'>
                            <option value={0}>-- select needed service --</option>
                            <option value={'Web Designing'}>Web Designing</option>
                            <option value={'Web Development'}>Web Development</option>
                            <option value={'App Development'}>App Development</option>
                            <option value={'Poster Designing'}>Poster Designing</option>
                            <option value={'Logo Designing'}>Logo Designing</option>
                        </select>
                    </div>
                    <textarea value={message} onChange={(e) => setmessage(e.currentTarget.value)} className='min-h-[100px] bg-black px-4 py-4 rounded-xl w-full border-zinc-900 transition-all border-[0.01rem] focus-visible:border-zinc-200 outline-none' placeholder='  message'>
                    </textarea>
                    <button className={cn('flex self-end px-6 py-3 rounded-full bg-gradient-to-t  hover:scale-105 transition-all shining-button overflow-hidden relative', loading ? 'from-secondary to-zinc-600' : 'from-primary to-violet-800')} onClick={() => handleSubmit()} type='button' >{loading ? "Submitting" : 'Submit'}</button>
                </form>
            </div>
        </div>
    )
}

export default Form