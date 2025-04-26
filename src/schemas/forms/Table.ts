import { z } from 'zod'

import { Table_Column_Schema } from './Table_Column'

export const Table_Schema = z.object({
  name: z.string(),
  columns: z.array(Table_Column_Schema),
  cascade: z.optional(z.boolean()),
})

export type Table = z.infer<typeof Table_Schema>
