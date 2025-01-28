import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { ModelName } from '~/types/ModelName'

type FN = (key: ModelName, params: object) => Promise<[object[], number]>

export const deleteMany: FN = async (key, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].deleteMany({ data: params })

    return [response, 200]
  }
  catch (error) {
    log('error', `${error}`)
    return [error, 400]
  }
}
