import React from 'react'
import { Footer, Navbar } from '../layout/index'
import '../stylesheets/homepage.scss'
import { Outlet } from 'react-router-dom'

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
