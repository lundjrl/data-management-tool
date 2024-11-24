import { prisma } from './init'
import type { ModelName } from '~/types/ModelName'

type FN = <T>(
  key: ModelName,
  params: T,
  // | Prisma.crewCreateInput
  // | Prisma.monsterCreateInput
  // | Prisma.dutyCreateInput
) => Promise<T>

export const create: FN = async (key, params) => {
  // @ts-expect-error TODO: Need to figure out how to type this
  return await prisma[key].create({ data: params })
}

export const createMany: FN = async (key, params) => {
  // @ts-expect-error TODO: Need to figure out how to type this
  return await prisma[key].createMany({ data: params })
}
