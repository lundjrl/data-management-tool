import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { ModelName } from '~/types/ModelName'

type FN = (key: ModelName, params: object) => Promise<[object, number] | [string | number]>

export const deleteOne: FN = async (key, params) => {
  try {
    const exists = collectionExists(key)

    if (!exists) {
      return [`Model ${key} does not exist.`, 400]
    }

    // @ts-expect-error Loosening up type safety in favor of user DB model freedom.
    const response = await prisma[key].delete({ where: params })

    return [response, 200]
  }
  catch (error) {
    const message = `${error}`
    log('error', message)
    return [message, 400]
  }
}
