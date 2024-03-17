import { z } from 'zod'
import { Alter_Table_Column_Schema } from './Alter_Table_Column'

export const Alter_Table_Schema = z.object({
  name: z.string(),
  columns: z.array(Alter_Table_Column_Schema),
})

export type Alter_Table = z.infer<typeof Alter_Table_Schema>
