import React, { useState } from 'react'
import Loading from './Loading'

const Services = () => {
  const [loading, setloading] = useState(true)
  if(loading === true){
    setTimeout( () => {
      setloading(false)
    }, 500)
  }
  const [ReadMore, setReadMore] = useState(false)
  const content = 'This service, when called, returns a randomly generated integer between 1 and 1000. It can be easily adapted to generate random numbers for games, unique identifiers, or random choices.'
  const lessContent = `${content.slice(0,50)}........`
  return (
    <div>
      {loading && <Loading/>}
      <h1 className='blog'>
        Services
      </h1>
      <div className='readmore'>
        {ReadMore ? content : lessContent}
        <button onClick={() => setReadMore(!ReadMore)}>
          {ReadMore ? 'readless' : 'readmore'}
        </button>
      </div>
      
    </div>
  )
}

export default Services
