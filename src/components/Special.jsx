import React from 'react'
import { specialBanh } from '../const/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Special = () => {
  return (
    <div id='special' className='flex flex-col sm:flex-row border-2 h-fit'>
      <div className='flex flex-col justify-center items-center w-full sm:w-[26%] bg-lavender text-gray-white p-12 py-16 gap-8'>
        <h1 className='text-[40px] text-center font-bold uppercase'>bánh trung thu đặc sắc nhất</h1>
        <p className='text-3xl font-thin text-center'>Mang hương vị hạnh phúc đễn cả nhà bằng chính sở trưởng của mình là sứ mệnh của bếp Tố, nên Tồ giới thiệu cả nhà những món ăn mà bếp Tồ ưng ý nhất!</p>
        <div className="swiper-custom-pagination text-center text-gray-white"/>
      </div>
      <div className='flex justify-center items-center w-full sm:w-[74%] bg-lavender-shadow'>
        <Swiper breakpoints={{
          640: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1350: { slidesPerView: 3 }
        }} pagination={window.innerWidth <= 640 ? false : {
          clickable: true, 
          el: '.swiper-custom-pagination'
          }} modules={[Pagination]}>
          {specialBanh.map((banh, index) => {
            return <SwiperSlide key={index}>
              <div className='bg-white w-64 h-fit overflow-hidden rounded-xl shadow-xl shadow-lavender mx-auto my-16'>
                <div>
                  <img className='relative w-full h-72 shadow-lg' src={banh.image} alt={banh.id} />
                  <button className='bg-white text-lg text-lavender font-bold rounded-2xl px-6 py-2 border-[3px] border-lavender-shadow absolute top-[16%] left-[50%] translate-x-[-50%]'>{banh.prize}</button>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-center p-8 px-12'>
                  <h2 className='text-xl font-bold'>{banh.name}</h2>
                  <p className='text-lg'>{banh.type}</p>
                  <button className='bg-lavender text-white text-lg px-6 py-2 font-bold tracking-wider rounded-2xl transition-all duration-300 hover:bg-black hover:shadow-md hover:shadow-lavender-shadow'>Đặt</button>
                </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Special