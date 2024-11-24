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
export const deleteOne: FN = async (key, params) => {
  // @ts-expect-error James - bypassing error to debug params model
  return await prisma[key].delete({ data: params })
}

export const deleteMany: FN = async (key, params) => {
  // @ts-expect-error James - bypassing error to debug params model
  return await prisma[key].deleteMany({ data: params })
}
