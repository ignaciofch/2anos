import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IllustratedButton } from "@/components/ui/illustrated_button"
import { RadioGroupIllustrated, RadioGroupItemIllustrated } from "@/components/ui/radio_group_illustrated"
import { ArrowLeftCircle } from "lucide-react"
import { useLocation, useNavigate } from "react-router"
import { normalize } from "@/utils/normalizacion"
import { formSchema } from "@/utils/schemas"

const respuestasValidasRaw = ["ropa", "cosas","mis","tus"]
const respuestasValidas = respuestasValidasRaw.map(normalize)

const OpcionesSeduccion = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        respuesta: "",
        },
    }); 

    const navigate = useNavigate()
    const location = useLocation()
    const { categoria } = location.state || {}
    
    console.log(categoria.opciones)

    const onSubmit = (values) => {
        console.log(values)
                const respuestaNormalizada = normalize(values.respuesta)
        
                // ✅ Válido si la respuesta del usuario CONTIENE alguna válida
                const esValida = respuestasValidas.some((valida) =>
                respuestaNormalizada.includes(valida)
                );
        
                if (esValida) {
                console.log("✅ Respuesta correcta")
                navigate('/n76oJz7uBmHKN8yxP5SVbGqZ9/ponuse')
                // navegar o mostrar siguiente paso
                } else {
                form.setError("respuesta", {
                    type: "manual",
                    message: "Sos mala eh.",
                })
                }
    }

    return(
        <main className='flex justify-center bg-zinc-50 p-10'>
            <Card>
                <ArrowLeftCircle className='text-primary hover:scale-105 transition-all hover:bg-muted hover:-translate-x-1 p-0.5 rounded-full cursor-pointer' size={35} onClick={() => navigate('/categorias')}/>
                <CardHeader>
                <CardTitle>{categoria.pregunta}</CardTitle>
                {/* <CardDescription>Cada pregunta tiene una categoría</CardDescription> */}
                </CardHeader>
                <CardContent>
                <Form {...form} className="w-full">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <FormField
                            control={form.control}
                            name="respuesta"
                            render={({ field }) => (
                                <FormItem className="space-y-3 w-full">
                                <div className='w-full flex items-center justify-between'>
                                    <FormLabel className="text-muted-foreground text-base font-medium">
                                    Si no la sacas ahora...
                                    </FormLabel>
                                </div>
                                <FormControl>
                                    <RadioGroupIllustrated onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                                        {categoria.opciones.map((opcion) => (
                                        <FormItem key={opcion.id}>
                                            <FormControl>
                                                <RadioGroupItemIllustrated value={opcion.label} id={opcion.id} >
                                                {opcion.label}
                                                </RadioGroupItemIllustrated>
                                            </FormControl>
                                        </FormItem>
                                        ))}
                                    </RadioGroupIllustrated>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        <IllustratedButton type="submit" variant='primary' size='sm' title="Enviar respuesta" />
                    </form>
                </Form>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </main>
    )
}

export default OpcionesSeduccion