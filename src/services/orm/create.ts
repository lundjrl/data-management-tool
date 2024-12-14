/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { prisma } from './init'

import type {CreateOverload} from '~/types/generated/functions'

export const create: CreateOverload = async (key, params) => {
  const response = await prisma[key].create({ data: params})
  return response as ReturnType<CreateOverload>
}
