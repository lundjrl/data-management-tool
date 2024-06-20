import { z } from 'zod';
export declare const Alter_Table_Column_Schema: z.ZodObject<{
    columnName: z.ZodString;
    newColumnName: z.ZodString;
    validationMessage: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    columnName: string;
    newColumnName: string;
    validationMessage?: string | undefined;
}, {
    columnName: string;
    newColumnName: string;
    validationMessage?: string | undefined;
}>;
export type Alter_Table_Column_Type = z.infer<typeof Alter_Table_Column_Schema>;
