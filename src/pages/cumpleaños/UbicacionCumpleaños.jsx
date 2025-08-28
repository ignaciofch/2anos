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

const UbicacionCumpleaños = () => {
    const navigate = useNavigate()

    return (
    <main className="flex justify-center">
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Muy bien!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                    <section className="border rounded-4xl text-primary text-sm p-3 bg-primary/10 font-semibold">⌚ ¡SACA UNA CAPTURA O ANOTÁ PORQUE UNA VEZ QUE SALIS DE ACÁ YA NO VAS A PODER VOLER POR 25 MINUTOS!</section>
                <CardDescription className='text-muted-foreground'>Siempre al limite</CardDescription>
                <p>
                LO QUE BUSCAS ESTÁ EN EL PATIO.
                </p>
                <p>
                Puede que te quede un poco alto, pero está ahí.
                </p>
        
                <IllustratedButton variant='primary' size="sm" title="Responder otra pregunta" onClick={() => navigate('/categorias')} />
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    </main>
  )
}

export default UbicacionCumpleaños