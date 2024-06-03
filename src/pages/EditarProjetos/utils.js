import { z } from "zod";

export const validador = z.object({
    nome: z
      .string()
      .max(20, { message: "Limite máximo de carácteres alcançado!" })
      .optional(),
    descricao: z
        .string()
        .max(100, { message: "Limite máximo de carácteres alcançado!" })
        .optional(),
    equipe: z
        .string()
        .max(20, { message: "Limite máximo de carácteres alcançado!" })
        .optional(),
  });