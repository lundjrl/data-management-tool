/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { prisma } from './init'

import type {CreateManyOverload} from '~/types/generated/functions'


export const createMany: CreateManyOverload = async (key, params) => {
  const response = (await prisma[key].createManyAndReturn({ data: params }))

  return response as ReturnType<CreateManyOverload>
}
