import { z } from "zod";

export const validador = z.object({
    email: z
      .string({ required_error: "Insira um e-mail!" })
      .min(1, {message: "Preencha o campo e-mail!"})
      .max(255, { message: "Limite máximo de carácteres alcançado!" })
      .email("Insira um email válido!"),
    senha: z
        .string({ required_error: "Insira uma senha!" })
        .min(8, {message: "Senha precisa ter no mínimo 8 carácteres!"})
        .max(20, { message: "Limite máximo de carácteres alcançado!" }),
    nome : z
        .string({required_error : "O nome é obrigatório"})
        .min(1, {message: "Preencha o campo de nome!"})
        .max(60, { message: "Limite máximo de carácteres alcançado!" }),
    cargo : z
        .string({required_error : "O cargo é obrigatório"})
        .min(5, {message: "Preencha o campo com um cargo existente!"})
        .max(20, { message: "Limite máximo de carácteres alcançado!" }),
  });