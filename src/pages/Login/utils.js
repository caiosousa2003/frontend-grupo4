import { z } from "zod";

export const validador = z.object({
    email: z
      .string({ required_error: "Insira um e-mail!" })
      .min(1, {message: "Preencha o campo e-mail!"})
      .email("Insira um email válido!"),
    senha: z
        .string({ required_error: "Insira uma senha!" })
        .min(1, {message: "Preencha o campo senha!"}),
  });