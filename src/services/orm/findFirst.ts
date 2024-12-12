import { prisma } from './init'

import type { crew, duty, Prisma } from '@prisma/client'

type FnOverload = {
  (key: 'crew', params: Prisma.crewFindFirstArgs): Promise<crew | null>
  (key: 'duty', params: Prisma.dutyFindFirstArgs): Promise<duty | null>
}

export const findFirst: FnOverload = async (key, params) => {
  const response = await prisma[key].findFirst(params)

  return response
}
