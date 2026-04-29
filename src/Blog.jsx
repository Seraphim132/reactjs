import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Button from './Button'
import axios from 'axios'
import { FaUserLock } from 'react-icons/fa'

const Blog = () => {
  const [loading, setloading] = useState(true)
  const [ReadMore, setReadMore] = useState(false)
  const content = "The Art of Unfinished Business (And Why Im Buying More CoffeeHave you ever looked at your desk, seen three half-finished projects, a stack of books you promised to read, and a lukewarm cup of coffee, and thought, Yes. This is exactly where I need to be?No? Just me?Welcome to my random thought corner."
  const lesscontent = `${content.slice(0,50)}........`
  if(loading === true){
    setTimeout( () => {
      setloading(false)
    },500)
  }
  const [Comment, setComment] = useState([])
  const apiUrl = 'https://fakestoreapi.com/products'
  useEffect(() => {
    
    
      const getDataOnline = async() => {
        try{
          const onlineData = await axios.get(apiUrl)
          const allData = onlineData.data
          const portionData = allData.slice(0,20)
          setComment(portionData)
        }
        catch (error) {
          console.log('error', error)
        }
      }
      getDataOnline()
    }, [])
   async function fetchImage() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products', {
      responseType: 'blob'
    });

    const imageUrl = URL.createObjectURL(response.data);
    
    document.getElementById('myImage').src = imageUrl;

  } catch (error) {
    console.error("Error fetching image:", error);
  }
}
  return (
    <div>
      {loading && <Loading/>}
      <h1 className='blog'>Blog</h1>
      <div className='readmore'>
        {ReadMore ? content : lesscontent } <br />
        <button onClick={() => setReadMore(!ReadMore)}>
          {ReadMore ? 'readless' : 'readmore'}
        </button>
      </div>
      <div className='users'>
        {Comment.map((Comment) => (
        <div key={Comment.id} className='user'>
          <div className='img'>
            <img src={Comment.image} alt="img" />
          </div>
          <h1>{Comment.title} </h1>
          <h2>Price: ${Comment.price}</h2>
          <p>
            {Comment.description}
          </p>
        </div>

        ))}
      </div>
    </div>
  )
}

export default Blog
