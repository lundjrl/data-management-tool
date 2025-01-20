import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { CreateManyOverload } from '~/types/generated/functions'

export const createMany: CreateManyOverload = async (key, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].createManyAndReturn({ data: params })

    const data = response as ReturnType<CreateManyOverload>

    return [data, 200]
  }
  catch (error) {
    log('error', `${error}`)
    return [error, 400]
  }
}
