import { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IllustratedButton } from '@/components/ui/illustrated_button'
import { useNavigate } from 'react-router'

const categoriasParaMostrar = [
  {
    id: 1,
    nombre: "Principio",
    ruta: "/itmh9b5N",
  },
  {
    id: 2,
    nombre: "1 año",
    ruta: "/instrucciones",
  },
  
]


function App() {
  const navigate = useNavigate()

  const navigateTo = (ruta) => {
    navigate(ruta)
  }

  return (
    <main className='flex justify-center bg-zinc-50 p-10'>
      <Card>
        <CardHeader>
          <CardTitle>Elegí la pregunta</CardTitle>
          <CardDescription>Cada pregunta tiene una categoría</CardDescription>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>
          {/* <IllustratedButton variant='primary' size='sm' title="Pregunta 1" onClick={navigateToQ1} /> */}
          {
            categoriasParaMostrar.map((categoria) => (
              <IllustratedButton key={categoria.id} variant='primary' size='sm' title={categoria.nombre} onClick={() => navigateTo(categoria.ruta)} />
            ))
          }
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App
