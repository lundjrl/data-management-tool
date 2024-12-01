import { prisma } from './init'

import type { ModelName } from '~/types/ModelName'

type FN = <T>(
  key: ModelName,
  params: T,
  // | Prisma.crewCreateInput
  // | Prisma.monsterCreateInput
  // | Prisma.dutyCreateInput
) => Promise<unknown>

// TODO: Fix types here for dynamic find
export const findMany: FN = async (key, params) => {
  // @ts-expect-error TODO: Need to figure out how to type this
  return (await prisma[key].findMany(params)) as unknown
}
