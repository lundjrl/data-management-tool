import { prisma } from './init'
import type { Prisma } from '@prisma/client'

type ModelName = Uncapitalize<Prisma.ModelName>
type FN = <T>(
  key: ModelName,
  params: T,
  // | Prisma.crewCreateInput
  // | Prisma.monsterCreateInput
  // | Prisma.dutyCreateInput
) => Promise<T>

export const createModel: FN = async (key, params) => {
  return await prisma[key].delete(params)
}
