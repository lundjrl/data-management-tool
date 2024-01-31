import { z } from 'zod'
import { Column_Relationship_Schema } from '../Column_Relationship'

// INFO: Prisma will be the source of truth for database types but this is validation to insert into a database.

export const Create_Table_Column_Schema = z.object({
  name: z.string(),
  relationship: z.optional(Column_Relationship_Schema),
  type: z.string(), // TODO: This should probably be native database types. EX: "serial PRIMARY KEY NOT NULL"
  length: z.optional(z.number()),
  nullable: z.optional(z.boolean()),
  unique: z.optional(z.boolean()),
  required: z.optional(z.boolean()),
  readonly: z.optional(z.boolean()),
  hidden: z.optional(z.boolean()),
  note: z.optional(z.string()),
  // validation?: 'I think it would be really cool to pass a validation object here so we can infer it?',
  validationMessage: z.optional(z.string().describe("Validation message to throw if there's an error")),
})

export type Create_Table_Column_Type = z.infer<typeof Create_Table_Column_Schema>
