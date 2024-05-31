import { z } from "zod";

export const validador = z.object({
    nome: z
      .string()
      .max(20, { message: "Limite máximo de carácteres alcançado!" })
      .optional()
      .min(2, {message: "O nome do projeto deve ter no mínimo 2 carácteres!"}),
    descricao: z
        .string()
        .max(100, { message: "Limite máximo de carácteres alcançado!" })
        .optional()
        .min(10, {message: "A descrição deve ter no mínimo 10 carácteres!"}),
    equipe: z
        .string()
        .max(20, { message: "Limite máximo de carácteres alcançado!" })
        .optional()
        .min(2, {message: "O nome da equipe deve ter no mínimo 2 carácteres!"}),
  });