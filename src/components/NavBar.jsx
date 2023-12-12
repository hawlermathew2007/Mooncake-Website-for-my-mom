import React, { useState } from 'react'
import banhToLogo from './assets/logo.png'
import { listBanh } from '../const/data'

const NavBar = () => {

  const [display, setDisplay] = useState("hidden")

  function searchBanh(){
    var input, filter, li, ahref, txtValue;
    
    input = document.getElementById('banhInput')
    filter = input.value.toUpperCase()
    li = document.getElementsByTagName('li')

    for(var i = 0; i < li.length; i += 1){
        ahref = li[i].getElementsByTagName("a")[0]
        txtValue = ahref.textContent || ahref.innerText
        txtValue.toUpperCase().indexOf(filter) > -1 ? li[i].style.display = '' : li[i].style.display = 'none'
    }
  }

  return (
    <nav className='w-full shadow-lg px-8 py-6 flex justify-between items-center sticky top-0 left-0'>
      <img src={banhToLogo} alt="Banh To" className='w-[160px]'/>
      <div className=' w-2/5 flex justify-center items-center gap-8'>
        <div className='w-10/12 relative'>
          <input type="text" id='banhInput' onFocus={() => { setDisplay("block") }} onBlur={() => { setDisplay("hidden") }} onKeyUp={searchBanh} className='w-full px-4 py-2 border-2 border-lavender rounded-md focus:outline-none hidden sm:block' placeholder='Tìm bánh ngon nào...'/>
          <div className={`w-full max-h-52 ${display} mt-2 rounded-md overflow-auto overflow-x-hidden bg-white shadow-md shadow-lavender absolute slideUp`}>
            <ul>
              { listBanh.map((banh, index) => {
                  return <li key={index} className='w-full py-2 hover:bg-slate-200'><i className="fa-solid fa-moon text-lavender px-4"></i><a href={`#${banh.id}`}>{banh.name}</a></li>
                })}
            </ul>
          </div>
        </div>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  )

}

export default NavBar


// job: enter data(add id to each mooncake, list for searh bar), make reponsive navbar, host website