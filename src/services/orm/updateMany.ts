import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

import type { UpdateManyOverload } from '~/types/generated/functions'

export const updateMany: UpdateManyOverload = async (key, dataParams, whereParams) => {
  try {
    const exists = collectionExists(key)

    if (!exists) { return [`Model ${key} does not exist.`, 400] }

    const response = await prisma[key].updateMany({ data: dataParams, where: whereParams })

    const data = response as ReturnType<UpdateManyOverload>

    return [data, 200]
  }
  catch (error) {
    log('error', `${error as string}`)
    return [error, 400]
  }
}
