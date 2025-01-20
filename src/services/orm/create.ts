import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { CreateOverload } from '~/types/generated/functions'

export const create: CreateOverload = async (key, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].create({ data: params })

    const data = response as ReturnType<CreateOverload>

    return [data, 200]
  }
  catch (error) {
    log('error', `${error}`)
    return [error, 400]
  }
}
