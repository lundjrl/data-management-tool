import { Prisma } from '@prisma/client';
type ModelName = Uncapitalize<Prisma.ModelName>;
type FN = <T>(key: ModelName, params: T) => Promise<T>;
export declare const findFirst: FN;
export {};
