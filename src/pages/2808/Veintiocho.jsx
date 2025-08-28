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
import { useLocation, useNavigate } from "react-router"
import { normalize } from "@/utils/normalizacion"
import { formSchema } from "@/utils/schemas"
import { ArrowLeftCircle } from "lucide-react"




const respuestasValidasRaw = ["vino", "pomelo","tinto"]
const respuestasValidas = respuestasValidasRaw.map(normalize)

const Veintiocho = () => {
    const navigate = useNavigate()
    //Traerme state del navigation
    const location = useLocation()
    const { categoria } = location.state || {}
    console.log(categoria.pregunta)


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

        // ✅ Válido si la respuesta del usuario CONTIENE alguna válida
        const esValida = respuestasValidas.some((valida) =>
        respuestaNormalizada.includes(valida)
        );

        if (esValida) {
        console.log("✅ Respuesta correcta")
        navigate('romaka')
        // navegar o mostrar siguiente paso
        } else {
        form.setError("respuesta", {
            type: "manual",
            message: "Sos mala eh, intentá de nuevo o elegí opciones si no me amas tanto.",
        })
        }
    }

    const navigateToOpciones = () => {
        navigate('opciones', {
            state: { categoria },
            replace: true
        })
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
                            <FormItem>
                            <FormControl>
                                <Input placeholder="💡 Consejo: intentá responder usando una sola palabra" {...field} />
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

export default Veintiocho