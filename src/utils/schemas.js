import z from "zod";

export const formSchema = z.object({
  respuesta: z.string().min(2, { message: "Escribí tu respuesta, ¿o no la sabes?" })
});