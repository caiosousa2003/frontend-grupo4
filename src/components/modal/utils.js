import { z } from "zod";

export const validador = z.object({
  project: z
    .string({ required_error: "Obrigatorio" })
    .min(2, { message: "Minimo 2 caracteres" })
    .max(100, { message: "Maximo 100 caracteres" }),
});
