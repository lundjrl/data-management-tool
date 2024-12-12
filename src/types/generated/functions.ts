import type { crew, duty, Prisma } from '@prisma/client'

export type FindFirstOverload = {
  (key: 'crew', params: Prisma.crewFindFirstArgs): Promise<crew | null>
  (key: 'duty', params: Prisma.dutyFindFirstArgs): Promise<duty | null>
}
