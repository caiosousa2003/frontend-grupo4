import { z } from 'zod';

export const validador = z.object({
  nome: z
    .string()
    .max(20, { message: 'Limite máximo de carácteres alcançado!' })
    .optional(),

  cargo: z
    .string()
    .max(20, { message: 'Limite máximo de carácteres alcançado!' })
    .optional(),
});
