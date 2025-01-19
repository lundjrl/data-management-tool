import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { FindFirstOverload } from '~/types/generated/functions'

export const findFirst: FindFirstOverload = async (key, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].findFirst(params) as Promise<unknown>

    const data = response as ReturnType<FindFirstOverload>

    return [data, 200]
  }
  catch (error) {
    log('error', `${error as string}`)
    return [error, 400]
  }
}
