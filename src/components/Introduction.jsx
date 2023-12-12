import React, {useState, useEffect} from 'react'
import banhToLogo from './assets/logo.png'
import introBanh1 from './assets/introBanh1.jpg'
import introBanh2 from './assets/introBanh3.jpg'
import introBanh3 from './assets/introBanh4.jpg'
import { bakerShop } from '../const/data'

const Introduction = () => {
    // const introBanhList = [introBanh1, introBanh2, introBanh3 ]
    // const [count, setCount] = useState(0); 
    // const [image, setImage] = useState(introBanhList[0])
    
    // useEffect(() => {
    //     const interval = setInterval(() => { 
    //         setCount(count + 1);
    //     }, 3000);
    //     if(count >= 0 && count < introBanhList.length) {setImage(introBanhList[count])}
    //     if(count === introBanhList.length) { setCount(0) }
    //     console.log(count)
    //     return () => clearInterval(interval); 
    // }, [count]); 


    // useEffect(() => { 
    //     if(slideNext > introBanhList.length-1){
    //         slideNext = 0
    //     }
    //     const interval = setInterval(() => {
    //         setImage(introBanhList[slideNext]); 
    //     }, 1000);   
    //     slideNext += 1 
    //     console.log(slideNext)
    //     return () => clearInterval(interval); 
    // }, [image]);

    // setInterval(() => {
    //     console.log(slideNext)
    //     setImage(()=>{
    //         return introBanhList[slideNext]
    //     })
    //     slideNext += 1
    // }, 1500)
    return (
        <div>
            Introduction
        </div>
    )
}

export default Introduction

// <div className='grid place-items-center bg-lavender bg-gradient-to-t from-white to-lavender'>
//             <div className='flex flex-row gap-40 m-auto py-20'>
//                 <div className='flex flex-col gap-8 max-w-lg'>
//                     <div className='flex flex-row gap-4'>
//                         <img className='w-14 rounded' src={banhToLogo} alt='Banh To Logo'/>
//                         <div className='flex flex-col gap-1 uppercase'>
//                             <h2>established by</h2>
//                             <h2>professional baker</h2>
//                         </div>
//                     </div>
//                     <h1 className='font-playpen-sans uppercase text-4xl'>{bakerShop}</h1>
//                     <p>{introductionPara}</p>
//                     <a className='bg-lavender w-fit px-4 py-2 rounded-3xl text-white font-playpen-sans' href="#">Get Started</a>
//                 </div>
//                 <div className='flex flex-col items-center gap-6'>
//                     <img className='rounded-2xl w-80 h-80 shadow-lg shadow-indigo-500/40 fade' src={image} alt="Intro Banh To" />
//                     <div className='flex gap-4'>
//                         {introBanhList.map((introBanh, index) => {
//                             return <div key={index} className={`w-[16px] h-[16px] rounded-full cursor-pointer 
//                             ${image === introBanh ? 'bg-lavender' : 'bg-zinc-400 hover:bg-lavender-shadow'}`} 
//                             onClick={() => { setImage(introBanh)}}></div>
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>