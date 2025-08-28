import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Instructivo from './pages/Instructivo'
import Principio from './pages/principio/Principio'
import OpcionesPrincipio from './pages/principio/OpcionesPrincipio'
import UbicacionPrincipio from './pages/principio/UbicacionPrincipio'
import Veintiocho from './pages/2808/Veintiocho'
import OpcionesVeintiocho from './pages/2808/OpcionesVeintiocho'
import UbicacionVeintiocho from './pages/2808/UbicacionVeintiocho'

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
    path: "/LNrU9WiOl25DbKRnshYq3Mlpx",
    children: [
      { index: true,
         element: <Principio />
      },
      {
        path: "/LNrU9WiOl25DbKRnshYq3Mlpx/opciones",
        element: <OpcionesPrincipio />,
      },
      {
        path: "/LNrU9WiOl25DbKRnshYq3Mlpx/zetaju",
        element: <UbicacionPrincipio />,
      },
    ],
  },
  {
    path: "/NrX7aZja1g1yDqZisUCX8x5Bq",
    children:[
      {
        index:true,
        element: <Veintiocho />
      },
      {
        path: "/NrX7aZja1g1yDqZisUCX8x5Bq/opciones",
        element: <OpcionesVeintiocho />
      },
      {
        path: "/NrX7aZja1g1yDqZisUCX8x5Bq/romaka",
        element: <UbicacionVeintiocho />
      }
    ]
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
