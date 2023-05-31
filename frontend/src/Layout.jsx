import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <main>
    <Navbar/>

    <Outlet/>

  </main>
  
  )
}

export default layout