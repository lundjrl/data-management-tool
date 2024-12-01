import { prisma } from './init'

import type { ModelName } from '~/types/ModelName'

type FN = <T>(
  key: ModelName,
  id: number,
  params: T,
  // | Prisma.crewCreateInput
  // | Prisma.monsterCreateInput
  // | Prisma.dutyCreateInput
) => Promise<unknown>

export const update: FN = async (key, id, params) => {
  // @ts-expect-error testing
  return (await prisma[key].update({ data: params, where: { id } })) as unknown
}
