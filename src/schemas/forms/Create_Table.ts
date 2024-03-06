import { z } from 'zod'
import { Create_Table_Column_Schema } from './Create_Table_Column'

export const Create_Table_Schema = z.object({
  name: z.string(),
  columns: z.array(Create_Table_Column_Schema),
})

export type Create_Table = z.infer<typeof Create_Table_Schema>
