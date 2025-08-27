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

const formSchema = z.object({
  respuesta: z.string().min(2, {
    message: "Escribí tu respuesta, ¿o no la sabes?",
  }),
})

const opciones = [
  { id: 1, nombre: "Opción 1", ubicacion_logo: "/logo1.png" },
    { id: 2, nombre: "Opción 2", ubicacion_logo: "/logo2.png" },
    { id: 3, nombre: "Opción 3", ubicacion_logo: "/logo3.png" },
]

const OpcionesPrincipio = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        respuesta: "",
        },
    }); 

    const onSubmit = (values) => {
    console.log(values)
    }

    return(
        <main className='flex justify-center bg-zinc-50 p-10'>
            <Card>
                <CardHeader>
                <CardTitle>¿Cómo nos conocimos?</CardTitle>
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
                                    Escribí el nombre de quien debe retirar el paquete
                                    </FormLabel>
                                </div>
                                <FormControl>
                                    <RadioGroupIllustrated onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                                        {opciones.map((opcion) => (
                                        <FormItem key={opcion.id}>
                                            <FormControl>
                                                <RadioGroupItemIllustrated value={opcion.nombre} id={opcion.id} >
                                                {opcion.nombre}
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

export default OpcionesPrincipio