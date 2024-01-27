import { z } from 'zod'

export const Temp_Schema = z.object({
  name: z.string().min(5),
  email: z.string().email("Email doesn't look like an email."),
  url: z.string().url("Url doesn't look like a url."),
})

export type Temp_Type = z.infer<typeof Temp_Schema>
