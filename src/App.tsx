import React from 'react'
import { AboutPage, HomePage, PopuPage, WorksPage, GatherPage, Root } from './pages/index'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
          path: '/works',
          element: <WorksPage />,
          children: [
            {
              path: 'graph',
              element: <PopuPage />
            },
            {
              path: 'gather',
              element: <GatherPage />
            }
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
