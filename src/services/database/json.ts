import { Prisma } from '@prisma/client'

export const getJSONSchema = () => {
  return Prisma.dmmf.datamodel
}
