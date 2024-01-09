import React, { useState, useRef, useEffect } from 'react'
import banhToLogo from './assets/logo.png'
import { listBanh } from '../const/data'

const NavBar = () => {

  const [display, setDisplay] = useState("hidden")
  const [toggle, setToggle] = useState(false)

  const searchBanhRef = useRef()

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-91.2px";
    }
    prevScrollpos = currentScrollPos;
  }

  useEffect(() => {
   const handler = (e) => {
    if(!searchBanhRef.current.contains(e.target)){
      setDisplay('hidden')
    }
   }
   document.addEventListener('mousedown', handler)

  return () => {
    document.removeEventListener('mousedown', handler)
  }

  })

  function searchBanh(){
    var input, filter, a, li, txtValue;
    
    input = document.getElementById('banhInput')
    filter = input.value.toUpperCase()
    a = document.getElementsByTagName('a')

    for(var i = 0; i < a.length; i += 1){
        li = a[i].getElementsByTagName("li")[0]
        txtValue = li.textContent || li.innerText
        txtValue.toUpperCase().indexOf(filter) > -1 ? a[i].style.display = '' : a[i].style.display = 'none'
    }
  }

  return (
    <nav id="navbar" className='w-full bg-white shadow-lg px-8 py-6 flex justify-between items-center sticky top-0 left-0 z-10 transition-all'>
      <img src={banhToLogo} alt="Banh To" className={`w-[160px] fade ${toggle ? "hidden" : "block"} sm:block`}/>
      <div className={`${toggle ? "w-full relative" : "w-2/5" } flex justify-center items-center gap-8`}>
        <div className={`${toggle ? "w-full" : "w-10/12  relative" }`}>
          <input type="text" id='banhInput' onFocus={() => { setDisplay("block") }} onKeyUp={searchBanh} className={`w-full px-4 py-2 border-2 border-lavender rounded-md focus:outline-none fade ${toggle ? "block" : "hidden"} sm:block`} placeholder='Tìm bánh ngon nào...'/>
          <div ref={searchBanhRef} className={`w-full max-h-52 ${display} mt-2 rounded-md overflow-auto overflow-x-hidden bg-white shadow-md shadow-lavender absolute slideUp`}>
            <ul>
              { listBanh.map((banh, index) => {
                  return <a key={index} onClick={() => { setDisplay('hidden') }} href={`#${banh.id == "thapcamthuonghang" || banh.id == "thapcambatbuu" || banh.id == "sentaodo" ? "special" : banh.id}`}><li className='w-full py-2 hover:bg-slate-200'><i className="fa-solid fa-moon text-lavender px-4"></i>{banh.name}</li></a>
                })
              }
            </ul>
          </div>
        </div>
        <i className="fa-solid fa-magnifying-glass hidden sm:block"></i>
        <i onClick={() => { setToggle(!toggle) }} className="fa-solid fa-magnifying-glass block sm:hidden"></i>
      </div>
    </nav>
  )
}

export default NavBar


// job: enter data(add id to each mooncake, list for searh bar), make reponsive navbar, host website
// problem: href="#" is not working