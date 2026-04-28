import React, { useState } from 'react'
import Loading from './Loading'

const Courses = () => {
  const [loading, setloading] = useState(true)
  const [ReadMore, setReadMore] = useState(false)
  const Content = 'Creative & HobbySongwriting: Writing the Lyrics Beekeeping for Beginners Creative Card Making for All Occasions Digital Art Animals: Drawing & Painting in Procreate Floral Design (Floristry)'
  const lessContent = `${Content.slice(0,50)}`
  if(loading === true){
    setTimeout( () => {
      setloading(false)
    }, 500)
  }
  return (
    <div>
      {loading && <Loading/>}
      <h1 className='blog'>
        Courses
      </h1>
      <div className='readmore'>
        {ReadMore ? Content : lessContent}
        <button onClick={() => setReadMore(!ReadMore)}>
          {ReadMore ? 'readless' : 'readmore'}
        </button>
      </div>
    </div>
  )
}

export default Courses
