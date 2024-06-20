import { Prisma } from '@prisma/client';
type ModelName = Uncapitalize<Prisma.ModelName>;
type FN = <T>(key: ModelName, params: T) => Promise<T>;
export declare const update: FN;
export declare const updateMany: FN;
export {};
