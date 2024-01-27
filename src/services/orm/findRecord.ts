import { prisma } from './init';
import { Prisma } from '@prisma/client';

type ModelName = Uncapitalize<Prisma.ModelName>;

// TODO: Fix type
type FN = <T>(key: ModelName, params: any) => Promise<T>;

export const findFirst: FN = async (key, params) => {
  return await prisma[key].findFirst(params);
};

export const findMany: FN = async (key, params) => {
  return await prisma[key].findMany(params);
};
