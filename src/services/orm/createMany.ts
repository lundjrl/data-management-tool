<<<<<<< HEAD

import { prisma } from './init'

import type { CreateManyOverload } from '~/types/generated/functions'
=======
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { prisma } from './init'

import type {CreateManyOverload} from '~/types/generated/functions'

>>>>>>> c684e30 (Added type gen for create and update)

export const createMany: CreateManyOverload = async (key, params) => {
  const response = (await prisma[key].createManyAndReturn({ data: params }))

  return response as ReturnType<CreateManyOverload>
}
