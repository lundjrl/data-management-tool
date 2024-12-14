import { prisma } from './init'

import type {UpdateManyOverload} from '~/types/generated/functions'


export const update: UpdateManyOverload = async (key, id, params) => {
  const response = await prisma[key].update({ data: params, where: { id } })

  return response
}
