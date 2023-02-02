import React from 'react'
import { AboutPage, HomePage } from './pages/index'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/portfolio',
      element: <HomePage />
    },
    {
      path: '/about',
      element: <AboutPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
