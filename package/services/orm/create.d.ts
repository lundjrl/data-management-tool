import type { Prisma } from '@prisma/client';
type ModelName = Uncapitalize<Prisma.ModelName>;
type FN = <T>(key: ModelName, params: T) => Promise<T>;
export declare const create: FN;
export declare const createMany: FN;
export {};
