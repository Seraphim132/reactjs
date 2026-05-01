import React, { useState } from 'react'
import Topic from './Topic'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Services from './Services'
import Contacts from './Contacts'
import Blog from './Blog'
import Quotes from './Quotes'
import Courses from './Courses'
import Files from './Files'
import Shop from './Shop'
import Todol from './Todol'


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/quotes' element={<Quotes/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/form' element={<Files/>} />
          <Route path='/todo' element={<Todol/>} />
          <Route path='/shop' element={<Shop/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
