import { prisma } from './init';
import { Prisma } from '@prisma/client';

type ModelName = Uncapitalize<Prisma.ModelName>;

// TODO: Fix type
type FN = <T>(key: ModelName, params: any) => Promise<T>;

export const updateRecord: FN = async (key, params) => {
  return await prisma[key].update(params);
};

export const updateMany: FN = async (key, params) => {
  return await prisma[key].updateMany(params);
};
