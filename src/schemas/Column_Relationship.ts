import { z } from 'zod'

enum RelationshipType {
  'm2m' = 'm2m',
  'o2m' = 'o2m',
  'o2o' = 'o2o',
}

// If foreign key was passed, need ref col and ref table.
export const Column_Relationship_Schema = z.object({
  foreignKey: z.optional(z.string()),
  primaryKey: z.optional(z.string()),
  referencedColumn: z.optional(z.string()),
  referencedTable: z.optional(z.string()),
  relationshipType: z.optional(z.nativeEnum(RelationshipType)),
})

export type Column_Relationship_Type = z.infer<typeof Column_Relationship_Schema>
