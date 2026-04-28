import React, { useState } from 'react'
import Loading from './Loading'

const Quotes = () => {
  const [loading, setloading] = useState(true)
  if(loading === true){
    setTimeout( () => {
      setloading(false)
    }, 500)
  }
  const [ReadMore, setReadMore] = useState(false)
  const content = "Life is what happens to you while you're busy making other plans. — John Lennon"
  const lessContent = `${content.slice(0,20)} .......`
  return (
    <div>
      {loading && <Loading/>}
      <h1 className='blog'>
        Quotes
      </h1>
      <div className='readmore'>
        {ReadMore ? content : lessContent} <br />
        <button onClick={() => setReadMore(!ReadMore)}>
          {ReadMore ? 'readless' : 'readmore'}
        </button>
      </div>
    </div>
  )
}

export default Quotes
