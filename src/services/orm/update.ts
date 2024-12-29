import { prisma } from './init'

import type { UpdateOverload } from '~/types/generated/functions'


export const update: UpdateOverload = async (key, id, params) => {
  const response = await prisma[key].update({ data: params, where: { id } })

  return response as ReturnType<UpdateOverload>
}
