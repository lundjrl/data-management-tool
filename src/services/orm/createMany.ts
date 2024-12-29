
import { prisma } from './init'

import type { CreateManyOverload } from '~/types/generated/functions'

export const createMany: CreateManyOverload = async (key, params) => {
  const response = (await prisma[key].createManyAndReturn({ data: params })) as Promise<unknown>

  return response as ReturnType<CreateManyOverload>
}
