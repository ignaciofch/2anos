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
import { Button } from '@/components/ui/button'

const UbicacionSeduccion = () => {
    const navigate = useNavigate()

    return (
    <main className="flex justify-center">
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Muy bien!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                    <section className="border rounded-4xl text-primary text-sm p-3 bg-primary/10 font-semibold">⌚ ¡SACA UNA CAPTURA O ANOTÁ PORQUE UNA VEZ QUE SALIS DE ACÁ YA NO VAS A PODER VOLER POR 25 MINUTOS!</section>
                <CardDescription className='text-muted-foreground'>No te acordabas del 28 de enero? esa fue mi primer bala, habías dejado tu ropa en casa pero nunca pasaste a buscarla</CardDescription>
                <p>
                LO QUE BUSCAS ESTÁ ATRÁS DE LOS JABONES LÍQUIDOS.
                </p>
                <p>
                ¿Sabes donde los guardamos? Sí, allá arriba
                </p>
                <p>
                Podes preguntarle a mi vieja si no te acordás.
                </p>
        
                <IllustratedButton variant='primary' size="sm" title="Responder otra pregunta" onClick={() => navigate('/categorias')} />
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    </main>
  )
}

export default UbicacionSeduccion