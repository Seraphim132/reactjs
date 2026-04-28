import React, { useState } from 'react'
import Topic from './Topic'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './header'
import Body from './body'
import Services from './Services'
import Contacts from './Contacts'
import Blog from './Blog'
import Quotes from './Quotes'
import Courses from './Courses'
import Files from './Files'


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
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
