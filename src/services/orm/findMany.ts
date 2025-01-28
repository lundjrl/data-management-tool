import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { ModelName } from '~/types/ModelName'

type FN = (key: ModelName, params: object) => Promise<[object[], number]>

export const findMany: FN = async (key, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].findMany(params)

    return [response, 200]
  }
  catch (error) {
    log('error', `${error as string}`)
    return [error, 400]
  }
}
