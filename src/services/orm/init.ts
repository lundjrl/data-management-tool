import { PrismaClient } from '@prisma/client'
import { ORM_CONFIG_OPTIONS } from '~/utils/constants'

export const prisma = new PrismaClient(ORM_CONFIG_OPTIONS)
