import { prisma } from './init'

import type { DeleteManyOverload } from '~/types/generated/functions'

export const deleteMany: DeleteManyOverload = async (key, params) => {
  const response = await prisma[key].deleteMany({ data: params })

  return response as ReturnType<DeleteManyOverload>
}
