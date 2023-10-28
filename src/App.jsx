import React, { useState } from 'react'
import Introduction from './components/Introduction'
import Comment from './components/Comment'
import Baker from './components/Baker'
import NavBar from './components/NavBar'
import Special from './components/Special'
import Others from './components/Others'
import Quote from './components/Quote'
import Combo from './components/Combo'
import End from './components/End'

function App() {
  return (
    <div>
      <Introduction />
      <Comment />
      <Baker />
      <NavBar />
      <Special />
      <Others />
      <Quote />
      <Combo />
      <End />
    </div>
  )
}

export default App
