import React, {useState} from 'react'
import banhToLogo from './assets/logo.png'
import introBanh1 from './assets/introBanh1.jpg'
import introBanh2 from './assets/introBanh3.jpg'
import introBanh3 from './assets/introBanh4.jpg'
import { introductionPara, bakerShop } from '../const/data'

const Introduction = () => {
    const introBanhList = [introBanh1, introBanh2, introBanh3 ]
    const [image, setImage] = useState(introBanh1)
    return (
        <div className='grid place-items-center bg-lavender bg-gradient-to-t from-white to-lavender'>
            <div className='flex flex-row gap-40 m-auto py-20'>
                <div className='flex flex-col gap-8 max-w-lg'>
                    <div className='flex flex-row gap-4'>
                        <img className='w-14 rounded' src={banhToLogo} alt='Banh To Logo'/>
                        <div className='flex flex-col gap-1 uppercase'>
                            <h2>established by</h2>
                            <h2>professional baker</h2>
                        </div>
                    </div>
                    <h1 className='font-playpen-sans uppercase text-4xl'>{bakerShop}</h1>
                    <p>{introductionPara}</p>
                    <a className='bg-lavender w-fit px-4 py-2 rounded-3xl text-white font-playpen-sans' href="#">Get Started</a>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <img className='rounded-2xl w-80' src={image} alt="Intro Banh To" />
                    <div className='flex gap-4'>
                        <div className='w-[20px] h-[20px] rounded-full bg-lavender'></div>
                        <div className='w-[20px] h-[20px] rounded-full bg-zinc-400'></div>
                        <div className='w-[20px] h-[20px] rounded-full bg-zinc-400'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction