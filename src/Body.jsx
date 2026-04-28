import React, { useState } from 'react'
import Topic from './Topic'
import Loading from './Loading'

const Body = () => {
    const [loading, setloading] = useState(true)

    if(loading === true){
        setTimeout( () => {
            setloading(false)
        },500)
    }
  return (
    <div>
        {loading && <Loading/>}
        <div className="topic">
            <button />
            <h1>Become a React Dev</h1>
            <p>
                Find the React job that fits your skill set
            </p>
        </div>
        <div className="content">
            <Topic desc={'Developers'} col={'white'}/>
            <Topic desc={'Employers'} col={'pink'}/>
        </div>
    </div>
  )
}

export default Body
