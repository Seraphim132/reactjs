import React, { useState } from 'react'
import Loading from './Loading'

const Contacts = () => {
  const [loading, setloading] = useState(true)
  if(loading === true){
    setTimeout( () => {
      setloading(false)
    }, 500)
  }
  const [ReadMore, setReadMore] = useState(false)
  const Content = 'Name: Julian R. Vance br Phone (Mobile): +1 (555) 832-9104 Email: j.vance88@mailservice.co Address: 4729 Oak Valley Dr, Springfield, IL 62704 Birthday: October 14, 1988 Company: Vertex Solutions LLC'
  const lessContent = `${Content.slice(0,50)}.........`
  return (
    <div>
      {loading && <Loading/>}
      <h1 className='blog'>
        Contacts
      </h1>
      <div className='readmore'>
        {ReadMore ? Content : lessContent}
        <button onClick={() => setReadMore(!ReadMore)}>
          {ReadMore ? 'readless' : 'readmore' }
        </button>
      </div>
    </div>
  )
}

export default Contacts
