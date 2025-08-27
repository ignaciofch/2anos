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

const UbicacionPrincipio = () => {
    return (
    <main className="flex justify-center">
        <Card>
            <CardHeader>
                <CardTitle>Muy bien!</CardTitle>
                <CardDescription className="font-semibold text-lg">Si jugás bien, ¡vas a tener una o varias sorpresas!</CardDescription>
                <CardAction>
                    <Button variant="outline"> ❌ Me rindo</Button>
                </CardAction>
            </CardHeader>
            <CardContent className="space-y-6">
                <IllustratedButton variant='primary' size="sm" title="Responder otra pregunta"  />
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    </main>
  )
}

export default UbicacionPrincipio