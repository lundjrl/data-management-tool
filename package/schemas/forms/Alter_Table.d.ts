import { z } from 'zod';
export declare const Alter_Table_Schema: z.ZodObject<{
    name: z.ZodString;
    columns: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    columns: {
        columnName: string;
        newColumnName: string;
        validationMessage?: string | undefined;
    }[];
}, {
    name: string;
    columns: {
        columnName: string;
        newColumnName: string;
        validationMessage?: string | undefined;
    }[];
}>;
export type Alter_Table = z.infer<typeof Alter_Table_Schema>;
