import { FindManyOverload } from '~/types/generated/functions'

import { prisma } from './init'

export const findMany: FindManyOverload = async (key, params) => {
  const response = await prisma[key].findMany(params) as Promise<unknown>

  return response as ReturnType<FindManyOverload>
}
