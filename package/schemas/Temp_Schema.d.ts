import { z } from 'zod';
export declare const Temp_Schema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    url: string;
}, {
    name: string;
    email: string;
    url: string;
}>;
export type Temp_Type = z.infer<typeof Temp_Schema>;
