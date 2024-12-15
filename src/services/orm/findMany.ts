import { FindManyOverload } from '~/types/generated/functions'

import { prisma } from './init'

export const findMany: FindManyOverload = async (key, params) => {
  const response = await prisma[key].client.findMany(params)

  return response as ReturnType<FindManyOverload>
}
