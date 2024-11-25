import { prisma } from './init'

import type { ModelName } from '~/types/ModelName'

type FN = <WhereParams>(key: ModelName, params: WhereParams) => Promise<WhereParams>

export const deleteOne: FN = async (key, params) => {
  // @ts-expect-error TODO: Need to figure out how to type this
  return await prisma[key].delete({ where: params })
}
