import { z } from 'zod'

enum RelationshipType {
  m2m = 'm2m',
  o2m = 'o2m',
  o2o = 'o2o',
}

export const PRIMARY_KEY_SCHEMA = z.object({
  primaryKey: z.string(),
})

export const FOREIGN_CONSTRAINT_SCHEMA = z.object({
  foreignKeyName: z.string(),
  referencedTable: z.string(),
  referencedColumn: z.string(),
  relationshipType: z.optional(z.nativeEnum(RelationshipType)),
})

export const Column_Relationship_Schema = z.object({
  foreignKeyName: z.optional(z.string()),
  primaryKey: z.optional(z.string()),
  referencedColumn: z.optional(z.string()),
  referencedTable: z.optional(z.string()),
  relationshipType: z.optional(z.nativeEnum(RelationshipType)),
}).or(PRIMARY_KEY_SCHEMA).or(FOREIGN_CONSTRAINT_SCHEMA)

export type Column_Relationship_Type = z.infer<typeof Column_Relationship_Schema>
