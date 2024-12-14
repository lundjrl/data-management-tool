<<<<<<< HEAD

import { prisma } from './init'

import type { CreateOverload } from '~/types/generated/functions'
=======
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { prisma } from './init'

import type {CreateOverload} from '~/types/generated/functions'
>>>>>>> c684e30 (Added type gen for create and update)

export const create: CreateOverload = async (key, params) => {
  const response = await prisma[key].create({ data: params})
  return response as ReturnType<CreateOverload>
}
