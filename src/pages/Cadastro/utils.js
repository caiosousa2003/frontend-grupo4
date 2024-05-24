import { StyleSheetManager } from "styled-components";
import { z } from "zod";

export const validador = z.object({
  email: z
    .string({ required_error: "Obrigatório!" })
    .min(2, { message: "Mínimo 2 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  senha: z
    .string({ required_error: "Obrigatório!" })
    .min(2, { message: "Mínimo 2 caracteres" })
    .max(100, { message: "" }),
  nome: z
    .string({ required_error: "Obrigatório!" })
    .min(2, { message: "Mínimo 2 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  cargo: z
    .string({ required_error: "Obrigatório!" })
    .min(2, { message: "Mínimo 2 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
});
