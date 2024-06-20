export declare const returnSchema: () => {
    data: {
        name: string;
        email: string;
        url: string;
    };
    schema: import("zod").ZodObject<{
        name: import("zod").ZodString;
        email: import("zod").ZodString;
        url: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        email: string;
        url: string;
    }, {
        name: string;
        email: string;
        url: string;
    }>;
};
