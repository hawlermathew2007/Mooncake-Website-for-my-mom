import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Introduction from './components/Introduction'
import Comment from './components/Comment'
import NavBar from './components/NavBar'
import Special from './components/Special'
import Others from './components/Others'
import Combo from './components/Combo'
import End from './components/End'

function App() {

  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const [numOfItems, setNumOfItems] = useState([])
  const [verify, setVerify] = useState(true)
  const [success, setSuccess] = useState(false)
  const [typeOfsuccess, setTypeOfsuccess] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    var message = ''
    for(var i = 0; i < numOfItems.length; i++){
      if(numOfItems){
        message += `<br>${numOfItems[i].num} ${numOfItems[i].name} ${numOfItems[i].type}`
      }
    }
    const order = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message
    }
    emailjs.send('service_o5ov6ou', 'template_zbycb5m', order, 'vkJcTgxRHEkUWlsyY')
      .then((result) => {
          setNumOfItems([])
          setVerify(true)
          setSuccess(true)
          setTypeOfsuccess('success')
          console.log(result.text);
      }, (error) => {
          setNumOfItems([])
          setVerify(true)
          setSuccess(true)
          setTypeOfsuccess('not success')
          console.log(error.text);
      });
  };
  const sumUp = (numOfItems, option) => {
    switch(true){
      case(numOfItems.length > 1):
        return numOfItems.reduce((total, itemNum) => {
          if(option == "number"){
            return total + itemNum.num
          } else{
            return total + Number(itemNum.prize.slice(0, itemNum.prize.length-1))*itemNum.num
          }
        }, 0) 
      case(numOfItems.length > 0):
      if(option == "number"){
        return numOfItems[0].num
      } else{
        return Number(numOfItems[0].prize.slice(0, numOfItems[0].prize.length-1))*numOfItems[0].num 
      }
      default:
        return '0'
    }
  }
  const adjustNum = (item, numericalOp) => {
    setNumOfItems(prev => {
      const adjustedItems = prev.map(prevItem => {
        if (
          JSON.stringify(item.name) === JSON.stringify(prevItem.name) &&
          JSON.stringify(item.type) === JSON.stringify(prevItem.type)
        ) {
          switch(numericalOp){
            case "plus":
              return {
                ...prevItem,
                num: prevItem.num + 1
              }
            case "minus":
              return {
                ...prevItem,
                num: prevItem.num - 1
              }
            default:
              return prevItem
            }
          }
          return prevItem
        })
      const validAdjustedItem = adjustedItems.filter((item) => {
        return item && item.num > 0
      })
      return validAdjustedItem
    })
  }
  const changeNumofItems = (item) => {
    setNumOfItems(prev => {
      const updatedItems = prev.map(prevItem => {
        if (
          JSON.stringify(item.name) === JSON.stringify(prevItem.name) &&
          JSON.stringify(item.type) === JSON.stringify(prevItem.type)
        ) {
          return {
            ...prevItem,
            num: prevItem.num + 1
          };
        }
        return prevItem;
      });
  
      // If the item doesn't exist in the prev array, add it with num = 1
      if (!updatedItems.some(prevItem => (
        JSON.stringify(item.name) === JSON.stringify(prevItem.name) &&
        JSON.stringify(item.type) === JSON.stringify(prevItem.type)
      ))) {
        item.num = 1;
        updatedItems.push(item);
      } 
      return updatedItems;
    });
  }

  return (
    <div>
      <NavBar />
      <Introduction />
      <Comment />
      <Special changeNumofItems={(item) => changeNumofItems(item)} />
      <Others changeNumofItems={(item) => changeNumofItems(item)} />
      <Combo changeNumofItems={(item) => changeNumofItems(item)}/>
      <End />
      <div className={`${numOfItems.length > 0 && verify ? 'fixed' : 'hidden'} fade flex items-center gap-6 text-xs shadow-black shadow-md bg-white text-black bottom-0 left-[50%] translate-x-[-50%] rounded-lg z-50 px-8 py-2 mb-2`}>
        <div className='whitespace-nowrap'><i className='fa-solid fa-cart-shopping'></i> {sumUp(numOfItems, "number")} trong giỏ hàng</div>
        <button onClick={() => { setVerify(false) }} className='bg-lavender text-white whitespace-nowrap p-1 px-4 font-semibold rounded-sm transition-all hover:bg-black w-fit'>Đặt thôi</button>
      </div>
      <div className={`${!verify && numOfItems.length > 0 ? "fixed" : 'hidden'} flex flex-col gap-2 justify-center items-center fade fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-white shadow-black shadow-md w-full py-6 pb-0 rounded-lg sm:w-96`}>
        <button className='self-end mr-6' onClick={() => setVerify(true) }><i className="fa-solid fa-xmark text-xl text-lavender"></i></button>
        <form onSubmit={sendEmail}>
          <div className='flex flex-col justify-center items-center w-[90%] m-auto'>
            <h1 className='text-2xl my-4 text-black font-semibold text-center'>Nhập thông tin để đặt Bánh</h1>
            <input required placeholder='Name' ref={name} className='border-b-2 border-lavender-shadow pb-3 w-full focus:outline-none' type="text" name="name" /><br />
            <input required placeholder='Email' ref={email} className='border-b-2 border-lavender-shadow pb-3 w-full focus:outline-none' type="email" name="email" /><br />
            <input required placeholder='Phone' ref={phone} className='border-b-2 border-lavender-shadow pb-3 w-full focus:outline-none' type="phone" name="phone" /><br />
            <input className='bg-lavender text-white w-full py-2 rounded-md my-4 font-semibold text-base' type="submit" value="Send" />
          </div>
        </form>
        <div className='bg-lavender-shadow flex flex-col gap-[0.05em] py-[0.05em] my-3 w-full max-h-[8rem] overflow-auto'>
          { numOfItems.length > 0 ? 
            numOfItems.map((item, index) => {
              return <div className='flex justify-between items-center w-full bg-white p-4'>
                <p key={index} className='font-semibold'>{item.name} {item.type}</p>
                <p className='mx-3'>{item.prize}</p>
                <div className='flex gap-3'>
                  <button className='bg-lavender h-fit text-white py-[0.35rem] px-[0.5rem] rounded-full text-xs' onClick={()=>{adjustNum(item,"plus")}}><i class="fa-solid fa-plus"></i></button>
                  <p className='text-lg font-semibold'>{item.num != null ? item.num : ''}</p>
                  <button className='bg-lavender h-fit text-white py-[0.35rem] px-[0.5rem] rounded-full text-xs' onClick={()=>{adjustNum(item,"minus")}}><i class="fa-solid fa-minus"></i></button>
                </div>
              </div>
              }) 
              : '' }
        </div>
        <div className='flex justify-evenly self-start w-full mt-2 mb-7'>
          <h2 className='text-lg font-medium text-lavender'>Đã đặt {sumUp(numOfItems, 'number')} bánh</h2>
          <h2 className='text-lg font-medium text-lavender'>Giá: {sumUp(numOfItems, 'prize')}K </h2>
        </div>
      </div>
      <div className={`${success ? "fixed" : 'hidden'} flex flex-col fade fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-white shadow-black shadow-md w-full p-6 rounded-lg sm:w-80`}>
        <button className='self-end' onClick={() => setSuccess(false) }><i className="fa-solid fa-xmark text-xl text-lavender"></i></button>
        <div className='text-lg text-center pb-4'>{typeOfsuccess == 'success' ? 
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>{'Order thành công :D'}</h1>
            <p>Đợi Tồ phản hồi qua số điện thoại để xác nhận nhe!</p>
          </div>
          : 
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>{'Order không thành công :('}</h1>
            <p>Ôi không có lỗi rồi! Hãy thử lại giúp Tồ nha!</p>
          </div>
        }</div>
      </div>
    </div>
  )
}

export default App
