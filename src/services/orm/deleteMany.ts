import { prisma } from './init'
import type { BatchPayload } from '~/types/BatchPayload'
import type { ModelName } from '~/types/ModelName'

type FN = <WhereParams>(key: ModelName, params: WhereParams) => Promise<BatchPayload>

export const deleteMany: FN = async (key, params) => {
  // @ts-expect-error TODO: Need to figure out how to type this
  return await prisma[key].deleteMany({ data: params })
}
