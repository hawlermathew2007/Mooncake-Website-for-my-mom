import React from 'react'
import zaloImg from './assets/zaloIcon.png'

const End = () => {
  return (
    <div className='flex flex-wrap gap-10 sm:gap-24 text-white bg-lavender p-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold uppercase text-2xl'>the web developer</h1>
        <div className='flex items-center text-lg gap-3'><i className="fa-solid fa-code"></i><h2>Dương Hoài Ân</h2></div>
        <h1 className='font-semibold uppercase text-2xl mt-4'>contact</h1>
        <ul>
          <li><div className='flex mt-2 items-center text-lg gap-3'><i className="fa-brands fa-facebook"></i><span className='transition-all hover:translate-x-3'>Facebook</span></div></li>
          <li><div className='flex mt-2 items-center text-lg gap-3'><i className="fa-brands fa-square-instagram"></i><span className='transition-all hover:translate-x-3'>Instagram</span></div></li>
          <li><div className='flex mt-2 items-center text-lg gap-3'><i className="fa-brands fa-discord"></i><span className='transition-all hover:translate-x-3'>Discord</span></div></li>
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold uppercase text-2xl'>the professional baker</h1>
        <div className='flex items-center text-lg gap-3'><i className="fa-solid fa-utensils"></i><h2>Hồ Mỹ Thương</h2></div>
        <h1 className='font-semibold uppercase text-2xl mt-4'>contact</h1>
        <ul>
          <li><div className='flex mt-2 items-center text-lg gap-3'><i className="fa-brands fa-facebook"></i><span className='transition-all hover:translate-x-3'>Facebook</span></div></li>
          <li><div className='flex mt-2 items-center text-lg gap-3'><img src={zaloImg} alt="zaloIcon" className='w-[20px]'/><span className='transition-all hover:translate-x-3'>Zalo</span></div></li>
          <li><div className='flex mt-2 items-center text-lg gap-3'><i class="fa-solid fa-phone"></i><span className='transition-all hover:translate-x-3'>0982819992</span></div></li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 w-[10rem] grow my-auto text-center'>
        <h1 className='font-semibold uppercase text-2xl'>Tồ đâu chỉ có thế</h1>
        <p className='text-lg font-light'>Ngoài việc làm bánh trung thu ra, Tồ còn có thể làm nhiều loại bánh khác như bánh Cookie, bánh kem, bánh bao và các loại kẹo tốt cho sức khỏe nữa! Tồ thích nhất là làm bánh kem đó, Tồ có thể trờ thành bất cứ hình dạng nào mà cả nhà thích!</p>
        <h2 className='text-lg font-medium'>Nếu cả nhà thấy thú vị hãy liên hệ với Tồ qua số điện thoại để có thông tin chi tiết nha <i class="fa-solid fa-heart"></i></h2>
      </div>
    </div>
  )
}

export default End