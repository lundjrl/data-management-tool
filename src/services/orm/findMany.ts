import { FindManyOverload } from '~/types/generated/functions'

import { log } from '../logger/log'

import { collectionExists } from './helpers/collectionExists'
import { prisma } from './init'

export const findMany: FindManyOverload = async (key, params) => {
  try {

  const exists = collectionExists(key)
  console.log("James exists", exists)

  if (!exists) return [`Model ${key} does not exist.`, 400]

  const response = await prisma[key].findMany(params) as Promise<unknown>

  const data = response as ReturnType<FindManyOverload>

    return [data, 200]
} catch (error) {
  log('error', `${error as string}`)

  return [error, 400]
}
}
