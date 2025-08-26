import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const root = createRoot(document.getElementById('root'))

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

root.render(
  <StrictMode>
    <RouterProvider router={mainRouter} />
  </StrictMode>,
)
