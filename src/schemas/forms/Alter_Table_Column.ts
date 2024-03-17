import { z } from 'zod'

// INFO: Prisma will be the source of truth for database types but this is validation to insert into a database.

export const Alter_Table_Column_Schema = z.object({
  columnName: z.string(),
  newColumnName: z.string(),
  // validation?: 'I think it would be really cool to pass a validation object here so we can infer it?',
  validationMessage: z.optional(z.string().describe("Validation message to throw if there's an error")),
})

export type Create_Table_Column_Type = z.infer<typeof Alter_Table_Column_Schema>
