import React from 'react'

const Topic = ({desc, col}) => {
  return (
    <div>
        <div className={`dev ${col}`}>
            <h1>For {desc}</h1> 
            <p className='promise'>Browse our React jobs and start your career today</p>
        </div>
    </div>
  )
}

export default Topic
