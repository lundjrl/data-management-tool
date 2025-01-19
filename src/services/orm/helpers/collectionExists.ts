import { ModelName } from '~/types/ModelName'

import { prisma } from '../init'

export const collectionExists = (key: ModelName): boolean => Boolean(prisma[key])
