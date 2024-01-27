import { prisma } from './init';
import { Prisma } from '@prisma/client';

type ModelName = Uncapitalize<Prisma.ModelName>;

// TODO: Fix type
type FN = <T>(key: ModelName, params: any) => Promise<T>;

export const deleteSingle: FN = async (key, params) => {
  return await prisma[key].delete(params);
};

export const deleteMany: FN = async (key, params) => {
  return await prisma[key].deleteMany(params);
};
