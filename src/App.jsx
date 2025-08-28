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
import BotonConBloqueo from './components/BotonConBloqueo'
import { categoriasMasDetalles } from './utils/db'
import { ArrowLeftCircle } from 'lucide-react'

const categoriasParaMostrar = [
  {
    id: 1,
    nombre: "Principio",
    ruta: "/LNrU9WiOl25DbKRnshYq3Mlpx",
    pregunta: "¿Que comimos la primera vez que nos dejaron solos?",
    opciones: ["Pizza", "Hamburguesa", "Sanguche de milanesa"],
  },
  {
    id: 2,
    nombre: "1 año",
    ruta: "/instrucciones",
    pregunta: "¿Cuantos dias pasaron desde que somos novios?",
    opciones: ["6 meses", "1 año", "2 años"],
  },
  {
    id: 3,
    nombre: "2 años",
    ruta: "/instrucciones",
  }  
  
]


function App() {

  const navigate = useNavigate()

  return (
    <main className='flex justify-center bg-zinc-50 p-10'>
      <Card>
        <ArrowLeftCircle className='text-primary hover:scale-105 transition-all hover:bg-muted hover:-translate-x-1 p-0.5 rounded-full cursor-pointer' size={35} onClick={() => navigate('/')}/>
        <CardHeader>
          <CardTitle>Elegí la categoría</CardTitle>
          <CardDescription>Recordá que una vez que elijas,vas a tener el acceso bloqueado por 20 MINUTOS</CardDescription>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>
          {/* <IllustratedButton variant='primary' size='sm' title="Pregunta 1" onClick={navigateToQ1} /> */}
          {
            categoriasMasDetalles.map((categoria) => (
              // <IllustratedButton key={categoria.id} variant='primary' size='sm' title={categoria.nombre} onClick={() => navigateTo(categoria.ruta)}>
              //   {categoria.nombre}
              // </IllustratedButton>
              <BotonConBloqueo key={categoria.id} categoria={categoria} />
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
