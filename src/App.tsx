import React from 'react'
import { HomePage } from './pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/portfolio',
      element: <HomePage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
