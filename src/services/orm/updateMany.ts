import { prisma } from './init'

import type { ModelName } from '~/types/ModelName'

type FN = <DataParams, WhereParams>(
  key: ModelName,
  dataParams: DataParams,
  whereParams: WhereParams,
) => Promise<unknown>

export const updateMany: FN = async (key, dataParams, whereParams) => {
  // @ts-expect-error TODO: Need to figure out how to type this
  return (await prisma[key].updateMany({ data: dataParams, where: whereParams })) as unknown
}
