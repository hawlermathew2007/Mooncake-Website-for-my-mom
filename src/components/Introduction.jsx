import React, {useState, useEffect} from 'react'
import { bakerShop } from '../const/data'

const Introduction = () => {
    return (
        <div className='text-white bg-introduction bg-cover responsive-height relative grid place-content-center'>
            <div className='flex flex-col gap-8 justify-center items-center p-20 px-0 m-auto max-w-[94%] sm:max-w-[80%]'>
                <h1 className='text-5xl sm:text-6xl text-center uppercase tracking-wide'>handmade with love</h1>
                <p className='text-3xl sm:text-4xl text-center font-thin'>Đó là Tồ, bếp Tồ luôn muốn mang đến cả nhà những bánh trung thu ngon nhất</p>
                <a href="#special"><button className='bg-lavender/[0.75] text-xl sm:text-2xl font-semibold p-4 uppercase rounded-xl'>See more</button></a>
            </div>
        </div>
    )
}

export default Introduction