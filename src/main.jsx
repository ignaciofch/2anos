import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Instructivo from './pages/Instructivo'
import Principio from './pages/principio/Principio'
import OpcionesPrincipio from './pages/principio/OpcionesPrincipio'
import UbicacionPrincipio from './pages/principio/UbicacionPrincipio'

const root = createRoot(document.getElementById('root'))

const mainRouter = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Instructivo />,
  },
  {
    path: "/categorias",
    element: <App />,
  },
  {
    path: "/itmh9b5N",
    children: [
      { index: true,
         element: <Principio />
      },
      {
        path: "/itmh9b5N/opciones-principio",
        element: <OpcionesPrincipio />,
      },
      {
        path: "/itmh9b5N/zetaju",
        element: <UbicacionPrincipio />,
      },
    ],
  },
  {
    path: "/q5",
    element: <App />,
  },
  {
    path: "/instrucciones",
    element: <Instructivo />,
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={mainRouter} />
  </StrictMode>,
)
