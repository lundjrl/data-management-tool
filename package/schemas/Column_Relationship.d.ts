import { z } from 'zod';
declare enum RelationshipType {
    'm2m' = "m2m",
    'o2m' = "o2m",
    'o2o' = "o2o"
}
export declare const Column_Relationship_Schema: z.ZodObject<{
    foreignKey: z.ZodString;
    primaryKey: z.ZodString;
    referencedColumn: z.ZodString;
    referencedTable: z.ZodString;
    relatedTo: z.ZodString;
    relationshipType: z.ZodNativeEnum<typeof RelationshipType>;
}, "strip", z.ZodTypeAny, {
    foreignKey: string;
    primaryKey: string;
    referencedColumn: string;
    referencedTable: string;
    relatedTo: string;
    relationshipType: RelationshipType;
}, {
    foreignKey: string;
    primaryKey: string;
    referencedColumn: string;
    referencedTable: string;
    relatedTo: string;
    relationshipType: RelationshipType;
}>;
export type Column_Relationship_Type = z.infer<typeof Column_Relationship_Schema>;
export {};
