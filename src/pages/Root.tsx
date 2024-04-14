import React from 'react'
import { Footer, Navbar } from '../components/index'
import { Outlet } from 'react-router-dom'
import '../stylesheets/homepage.scss'

const Root = () => {
  return (
    <main className='pb-5'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Root
