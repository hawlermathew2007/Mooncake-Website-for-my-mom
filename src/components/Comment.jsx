import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react';
import { comments } from '../const/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Comment = () => {

  const stars = [1,2,3,4,5,6,7,8,9,10]

  const swiper = useSwiper()

  return (
    <div className='p-6 py-20 pb-24'>
      <h1 className='text-center text-2xl font-semibold'>Comments</h1>
      <div className='w-[85%] m-auto '>
        <Swiper breakpoints={{
          640: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1350: { slidesPerView: 3 }
        }}
        spaceBetween={50} 
        pagination={{dynamicBullets: true, clickable:true}} 
        modules={[Pagination]}>
          {
            comments.map((comment, index) => {
              return <SwiperSlide key={index}>
                <div className={`flex flex-col items-center gap-4 border-2 p-5 text-center h-full mt-7 mb-14 rounded-xl shadow-xl shadow-lavender`}>
                  <p>{comment.comment}</p>
                  <div className='relative flex flex-row-reverse rating'>
                    {
                      stars.map((star) => {
                        var textColor;
                        var numOfColoredStar = comment.rate/0.5
                        star <= 10-numOfColoredStar ? textColor = 'text-lavender-shadow' : textColor = 'text-lavender'
                        return <input key={star} className={`before:${textColor} relative flex justify-center items-center appearance-none overflow-hidden m-0 w-[16px] h-[28px]`} type="radio" name={`r${star}`}/>
                      })
                    }
                  </div>
                  <div className='flex justify-center items-center gap-6'>
                    <img src={comment.image} alt={comment.name} className='rounded-full w-[54px]' />
                    <h2 className='text-center font-semibold'>{comment.name}</h2>
                  </div>
                </div>
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Comment