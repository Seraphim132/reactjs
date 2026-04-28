import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div className="heading">
                <img className='img1' src="/8_1sasa11.jpg" alt="logo"/>
                <div className="link">
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/quotes'>Quotes</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/form'>Form</Link>

                </div>
                <button>LOGIN</button>
        </div>
    </div>
  )
}

export default Header
