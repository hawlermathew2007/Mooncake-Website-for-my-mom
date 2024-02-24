import React from 'react'
import { comboBanh } from '../const/data'
import ribbon from './assets/otherTalent/ribbon.png'


const Combo = (props) => {
  
  const loopWithNum = (num) => {
    var nums = []
    for(var i = 0; i < num; i++){
      nums.push(1)
    }
    return nums
  }

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-semibold text-center uppercase'>combo siêu hấp dẫn</h1>
      <div className='flex flex-col gap-12 my-20'>
        {comboBanh.map((combo, index) => {
          return <div className={`flex flex-row ${index % 2 == 0 ? '' : 'flex-row-reverse'} flex-wrap justify-center items-center gap-4 sm:gap-16 w-fit m-auto translate-x-0 ${index % 2 == 0 ? 'sm:translate-x-[-38%]' : 'sm:translate-x-[38%]'}`} id={combo.id}>
              <div className='flex flex-col w-52 '>
                  <img className='rounded-full border-8 border-lavender-shadow' src={combo.img} alt={combo.name} />
                  <div className='relative translate-y-[-1.2rem]'>
                      <h1 className='text-2xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-88%]'>{combo.prize}</h1>
                      <img src={ribbon} alt="Ribbon for combo prize" />
                  </div>
              </div>
              <div className='flex flex-col gap-6 bg-lavender-shadow rounded-xl text-white p-8 w-[98%] sm:w-fit h-fit'>
                  <h1 className='text-2xl text-center uppercase font-semibold'>{combo.name}</h1>
                  <div className='flex flex-col gap-3 w-full sm:w-[22rem]'>
                      {combo.components.map((component, index) => {
                          return <div className='flex justify-between items-center'>
                            <div key={index} className='flex gap-2 items-center flex-none'>
                                <p className='text-sm font-medium bg-lavender p-1 px-[0.65rem] rounded-full '>{component.amount}</p> 
                                <p className='text-lg'>{component.name}</p>
                            </div>
                            <div className='bg-lavender-shadow h-4 border-b-2 border-dotted border-white grow mx-2'></div>
                            <div className='flex gap-1'>
                              {component.eggs != null ? loopWithNum(component.eggs).map((egg, index) => {
                                return <i class="flex-none fa-solid fa-egg"></i>
                              })
                              : ''}
                            </div>
                          </div>
                      })}
                  </div>
                  <button onClick={() => {props.changeNumofItems({name: combo.name, type: null, prize: combo.prize})}} className='bg-lavender text-white p-2 px-3 rounded-md w-fit self-center font-bold tracking-wide'>Đặt ngay</button>
              </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Combo