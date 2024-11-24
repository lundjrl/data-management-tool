import { prisma } from './init'
import type { ModelName } from '~/types/ModelName'

type FN = <T>(
  key: ModelName,
  params: T,
  // | Prisma.crewFindFirstArgs | Prisma.dutyFindFirstArgs | Prisma.monsterFindFirstArgs,
) => Promise<T>

export const findFirst: FN = async (key, params) => {
  // @ts-expect-error TODO: Need to figure out how to type this
  return await prisma[key].findFirst(params)
}
