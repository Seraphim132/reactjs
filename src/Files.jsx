import React, { useState } from 'react'
import Loading from './Loading'

const Files = () => {
    const [Title, setTitle] = useState('')
    const [Constname, setConstname] = useState('')
    const [loading, setloading] = useState(true)
    if(loading === true){
      setTimeout( () => {
        setloading(false)
      }, 500)
    }
    const [ReadMore, setReadMore] = useState(false)
    const Content = 'A "random file" or random access file is a computer file structured to allow specific data records to be accessed, read, or updated directly, without needing to read through all preceding data. Unlike sequential files (like a simple text file), which are read from beginning to end, random files are organized into records of identical length, allowing for rapid retrieval and efficient data manipulation.'
    const lessContent = `${Content.slice(0,50)}........`
  return (
    <div>
      {loading && <Loading/>}
      <h1 className='blog'>
        Files
      </h1>
      <div className='readmore'>
        {ReadMore ? Content : lessContent}
        <button onClick={() => setReadMore(!ReadMore)}>
          {ReadMore ? 'readless' : 'readmore'}
        </button>
      </div>
      
        <p>
            title: {Constname}
        </p>
        <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} /> <br />
        <button onClick={() => setConstname(Title)}> save title</button>
      
    </div>
  )
}

export default Files
