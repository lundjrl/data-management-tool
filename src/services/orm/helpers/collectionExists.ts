import { prisma } from '../init'

import type { ModelName } from '~/types/ModelName'

export const collectionExists = (key: ModelName): boolean => Boolean(prisma[key])
