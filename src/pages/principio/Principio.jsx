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
import { useNavigate } from "react-router"

const respuestasValidasRaw = ["montiel", "gonzalo montiel", "g. montiel"]

// Normalizar: minúsculas, quitar tildes, trim
const normalize = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina acentos
    .trim()

const respuestasValidas = new Set(respuestasValidasRaw.map(normalize))


const formSchema = z.object({
  respuesta: z.string().min(2, { message: "Escribí tu respuesta, ¿o no la sabes?" })
  
});

const Principio = () => {
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        respuesta: "",
        },
        mode: "onSubmit"
    }); 

    const onSubmit = (values) => {
        console.log(values)
        const respuestaNormalizada = normalize(values.respuesta)

        if (respuestasValidas.has(respuestaNormalizada)) {
        console.log("✅ Respuesta correcta")
        navigate('zetaju')
        // navegar o mostrar siguiente paso
        } else {
        form.setError("respuesta", {
            type: "manual",
            message: "Respuesta incorrecta, intentá de nuevo o elegí opciones si no me amas.",
        })
        }
    }

    const navigateToOpciones = () => {
        navigate('opciones-principio', { replace: true })
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
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Consejo: intentá responder usando una sola palabra" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full">Verificar</Button>
                        <Button variant="outline" className="w-full" onClick={navigateToOpciones}>Quiero opciones</Button>
                    </form>
                </Form>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </main>
    )
}

export default Principio