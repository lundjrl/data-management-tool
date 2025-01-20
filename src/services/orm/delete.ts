import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { DeleteOverload } from '~/types/generated/functions'

export const deleteOne: DeleteOverload = async (key, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].delete({ where: params }) as Promise<unknown>

    const data = response as ReturnType<DeleteOverload>

    return [data, 200]
  }
  catch (error) {
    log('error', `${error}`)
    return [error, 400]
  }
}
