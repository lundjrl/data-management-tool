import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { UpdateOverload } from '~/types/generated/functions'

export const update: UpdateOverload = async (key, id, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].update({ data: params, where: { id } })

    const data = response as ReturnType<UpdateOverload>

    return [data, 200]
  }
  catch (error) {
    log('error', `${error}`)
    return [error, 400]
  }
}
