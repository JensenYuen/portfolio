import React from 'react'
import { AboutPage, HomePage, WorksPage } from './pages/index'
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
    },
    {
      path: '/works',
      element: <WorksPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
