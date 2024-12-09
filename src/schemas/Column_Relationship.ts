import { z } from 'zod'

enum RelationshipType {
  'm2m' = 'm2m',
  'o2m' = 'o2m',
  'o2o' = 'o2o',
}

export const Column_Relationship_Schema = z.object({
  foreignKey: z.string(),
  primaryKey: z.string(),
  referencedColumn: z.string(),
  referencedTable: z.string(),
  relationshipType: z.nativeEnum(RelationshipType),
})

export type Column_Relationship_Type = z.infer<typeof Column_Relationship_Schema>
