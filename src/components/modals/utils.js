import { z } from "zod";

export const validador = z.object({
  project: z.string().nonempty("Selecione um projeto."),
});
