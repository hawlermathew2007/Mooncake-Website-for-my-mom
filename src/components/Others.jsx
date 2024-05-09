import React from 'react'
import { othersBanh } from '../const/data'

const Others = (props) => {
  return (
    <div className='my-24'>
      <h1 className='uppercase text-3xl text-center font-semibold tracking-wide'>các bánh trung thu ngon khác</h1>
      <div className='flex flex-wrap justify-evenly items-center my-14 gap-y-8'>
        { othersBanh.map((banh, index) => {
          return <div key={index} id={banh.id} className='border-2 border-black p-8 rounded m-8'>
            <img className='w-[20rem] shadow-md shadow-black rounded' src={banh.image} alt={banh.id} />
            <div className='flex flex-col justify-center items-center gap-8 my-12 mb-6 mx-0'>
              <h2 className='text-center text-2xl font-semibold uppercase'>{banh.name}</h2>
              <div className='flex justify-center items-center gap-x-7 sm:gap-x-12 gap-4 whitespace-nowrap text-lg sm:text-xl font-light tracking-wide'>
                <h3>{banh.type1}</h3>
                <h3>{banh.prize1}</h3>
                <button onClick={() => {props.changeNumofItems({name: banh.name, type: banh.type1, prize: banh.prize1})}} className='bg-lavender-shadow text-white text-base sm:text-lg px-4 sm:px-6 py-2 font-bold tracking-wider rounded-2xl transition-all duration-300 hover:bg-black hover:shadow-md hover:shadow-lavender-shadow hover:scale-105'>Đặt</button>
              </div>
              <div className='flex justify-center items-center gap-x-7 sm:gap-x-12 gap-4 whitespace-nowrap text-lg sm:text-xl font-light tracking-wide'>
                <h3>{banh.type2}</h3>
                <h3>{banh.prize2}</h3>
                <button onClick={() => {props.changeNumofItems({name: banh.name, type: banh.type2, prize: banh.prize2})}} className='bg-lavender text-white text-base sm:text-lg px-4 sm:px-6 py-2 font-bold tracking-wider rounded-2xl transition-all duration-300 hover:bg-black hover:shadow-md hover:shadow-lavender-shadow hover:scale-105'>Đặt</button>
              </div>
            </div>
          </div>
        }) }
      </div>
    </div>
  )
}

export default Others