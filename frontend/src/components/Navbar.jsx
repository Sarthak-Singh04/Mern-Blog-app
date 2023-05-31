import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <Link to="/" className='logo'>Thunder Blog</Link>
    <nav>
      <Link to='/login'>Login</Link>
      <Link to="/signup"> Sign up</Link>
    </nav>
  </header>
  )
}

export default Navbar