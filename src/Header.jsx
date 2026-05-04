import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div className="heading">
                <img className='img1' src="/8_1sasa11.jpg" alt="logo"/>
                <div className="link">
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/services'>Services</Link>
                <Link className='link' to='/contacts'>Contacts</Link>
                <Link className='link' to='/blog'>Blog</Link>
                <Link className='link' to='/quotes'>Quotes</Link>
                <Link className='link' to='/courses'>Courses</Link>
                <Link className='link' to='/form'>Form</Link>
                <Link className='link' to='todolist'>Todo</Link>
                <Link className='link' to='/shop'>Shop</Link>
                </div>
                <button className='.button'>LOGIN</button>
        </div>
    </div>
  )
}

export default Header
