import { Button } from "@/components/ui/button"
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




function Instructivo() {
  const navigate = useNavigate()

  const navigateToCategorias = () => {
    navigate('/categorias')
  }

  return (
    <main className="flex justify-center">
        <Card>
            <CardHeader>
                <CardTitle>¿Como jugas?</CardTitle>
                <CardDescription className="font-semibold text-lg">Si jugás bien, ¡vas a tener una o varias sorpresas!</CardDescription>
                <CardAction>
                    <Button variant="outline"> ❌ Me rindo</Button>
                </CardAction>
            </CardHeader>
            <CardContent className="space-y-6">
                <p>
                Para ganar solo tenés que responder correctamente algunas preguntas.
                </p>
                <p>
                Vas a tener varias preguntas, pero no van a ser al azar: estarán relacionadas con nosotros… o conmigo 😉
                </p>
                <p>
                Cada vez que respondas bien una, vas a obtener una <strong>ubicación</strong> donde vas a encontrar algo para vos.
                </p>

                <h3 className="font-semibold mt-4">📌 ¿Cómo responder?</h3>
                <ol className="list-decimal list-inside space-y-2">
                <li>
                    Elegí la pregunta según la categoría que prefieras.
                </li>
                <li>
                    <strong>Primera ronda:</strong> respondés sin opciones.  
                    Si acertás → obtenés la <strong>ubicación exacta</strong> de la sorpresa.
                </li>
                <li>
                    Si no acertás, pasás a la <strong>segunda ronda</strong> con opciones.  
                    Si respondés bien → obtenés <strong>pistas</strong> sobre la ubicación.
                </li>
                </ol>

                <p className="mt-4 italic">¿Estás lista, burrita? 🐴✨</p>
                <IllustratedButton variant='primary' size="sm" title="Empezar" onClick={navigateToCategorias} />
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    </main>
  )
}

export default Instructivo