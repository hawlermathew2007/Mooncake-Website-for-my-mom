import React, { useState } from 'react'
import Introduction from './components/Introduction'
import Comment from './components/Comment'
import NavBar from './components/NavBar'
import Special from './components/Special'
import Others from './components/Others'
import Quote from './components/Quote'
import Combo from './components/Combo'
import End from './components/End'

function App() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <Comment />
      <Special />
      <Others />
      <Quote />
      <Combo />
      <End />
    </div>
  )
}

export default App
