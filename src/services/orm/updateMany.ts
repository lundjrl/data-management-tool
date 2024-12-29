import { UpdateManyOverload } from '~/types/generated/functions'

import { prisma } from './init'

export const updateMany: UpdateManyOverload = async (key, dataParams, whereParams) => {
  const response = await prisma[key].updateMany({ data: dataParams, where: whereParams }) as Promise<unknown>

  return response as ReturnType<UpdateManyOverload>
}
