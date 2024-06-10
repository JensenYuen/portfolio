import React from 'react'
import { AboutPage, HomePage, WorksPage, DetailedWorkPage, Root, ErrorPage } from './pages/index'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
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
              path: 'popugraph',
              element: <DetailedWorkPage />
            },
            {
              path: 'caseconnect',
              element: <DetailedWorkPage />
            },
            {
              path: 'offgrid',
              element: <DetailedWorkPage />
            },
            {
              path: 'scubadoo',
              element: <DetailedWorkPage />
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
