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
import Seduccion from './pages/seduccion/Seduccion'
import OpcionesSeduccion from './pages/seduccion/OpcionesSeduccion'
import UbicacionSeduccion from './pages/seduccion/UbicacionSeduccion'
import Agosto from './pages/agostoveintitres/Agosto'
import OpcionesAgosto from './pages/agostoveintitres/OpcionesAgosto'
import UbicacionAgosto from './pages/agostoveintitres/UbicacionAgosto'
import Cumpleaños from './pages/cumpleaños/Cumpleaños'
import OpcionesCumpleaños from './pages/cumpleaños/OpcionesCumpleaños'
import UbicacionCumpleaños from './pages/cumpleaños/UbicacionCumpleaños'

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
    path: "/n76oJz7uBmHKN8yxP5SVbGqZ9",
    children: [
      {
        index: true,
        element: <Seduccion />
      },
      {
        path: "/n76oJz7uBmHKN8yxP5SVbGqZ9/opciones",
        element: <OpcionesSeduccion />
      },
      {
        path: "/n76oJz7uBmHKN8yxP5SVbGqZ9/ponuse",
        element: <UbicacionSeduccion />
      }
    ]
  },
  {
    path: "/p7NBMyDeDeFgumSdcwahL0Ex2",
    children: [
      {
        index: true,
        element: <Agosto />
      },
      {
        path: "/p7NBMyDeDeFgumSdcwahL0Ex2/opciones",
        element: <OpcionesAgosto />
      },
      {
        path: "/p7NBMyDeDeFgumSdcwahL0Ex2/jejugi",
        element: <UbicacionAgosto />
      }
    ]
  },
  {
    path: "/TTNPmq6bPklRyPaTok1u3vB8c",
    children: [
      {
        index: true,
        element: <Cumpleaños />
      },
      {
        path: "/TTNPmq6bPklRyPaTok1u3vB8c/opciones",
        element: <OpcionesCumpleaños />
      },
      {
        path: "/TTNPmq6bPklRyPaTok1u3vB8c/posuxi",
        element: <UbicacionCumpleaños />
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
