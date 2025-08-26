import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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




function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const navigateToQ1 = () => {
    navigate('/q1')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preguntas</CardTitle>
        <CardDescription>Elegí que pregunta queres responder</CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
        <IllustratedButton variant='primary' title="Pregunta 1" description="Principio" onClick={navigateToQ1} />
        <IllustratedButton variant='primary' title="Hello" description="This is an illustrated button" onClick={navigateToQ1} />
        <IllustratedButton variant='primary' title="Hello" description="This is an illustrated button" onClick={navigateToQ1} />
        <IllustratedButton variant='primary' title="Hello" description="This is an illustrated button" onClick={navigateToQ1} />
        <IllustratedButton variant='primary' title="Hello" description="This is an illustrated button" onClick={navigateToQ1} />
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default App
