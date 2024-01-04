import { prisma } from './init';
import { Prisma } from '@prisma/client';

type ModelName = Uncapitalize<Prisma.ModelName>;
type FN = <T>(key: ModelName, params: T) => Promise<T>;

// TODO: Fix types here for dynamic create
type N = (typeof Prisma)[`${ModelName}CreateArgs`];

export const createRecord: FN = async (key, params) => {
  const k = Prisma.ModelName[key];
  return await prisma[k].create(params);
};
