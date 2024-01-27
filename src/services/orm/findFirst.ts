import { prisma } from './init'
import { Prisma } from '@prisma/client'

type ModelName = Uncapitalize<Prisma.ModelName>
type FN = <T>(
  key: ModelName,
  params: T,
  // | Prisma.crewCreateInput
  // | Prisma.monsterCreateInput
  // | Prisma.dutyCreateInput
) => Promise<T>

// TODO: Fix types here for dynamic create
export const findFirst: FN = async (key, params) => {
  return await prisma[key].findFirst(params)
}
