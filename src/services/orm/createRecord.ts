import { prisma } from './init';
import { Prisma } from '@prisma/client';

type ModelName = Uncapitalize<Prisma.ModelName>;

// TODO: Fix type
type FN = <T>(key: ModelName, params: any) => Promise<T>;

export const createRecord: FN = async (key, params) => {
  return await prisma[key].create(params);
};

export const createMany: FN = async (key, params) => {
  return await prisma[key].createMany(params);
};
