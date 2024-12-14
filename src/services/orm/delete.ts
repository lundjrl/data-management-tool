
import { prisma } from './init'

import type { DeleteOverload }from '~/types/generated/functions'

export const deleteOne: DeleteOverload = async (key, params) => {
  const response = await prisma[key].delete({ where: params })

  return response as ReturnType<DeleteOverload>
}
