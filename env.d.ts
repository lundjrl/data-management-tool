declare const validator: import("node_modules/@adonisjs/env/build/src/validator").EnvValidator<{
    PORT: (key: string, value?: string | undefined) => number;
    DATABASE_URL: (key: string, value?: string | undefined) => string;
}>;
export declare function env(): {
    PORT: number;
    DATABASE_URL: string;
};
export { validator };
