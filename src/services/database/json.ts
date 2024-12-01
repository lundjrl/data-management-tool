import { Prisma } from '@prisma/client'

import { getCollections } from '../orm/getCollections'

export const getJSONSchema = async (collection?: string) => {
  if (!collection) return Prisma.dmmf.datamodel

  const collections = await getCollections()

  const isValid = collections.find(el => el === collection)

  if (!isValid) return {}

  return Prisma.dmmf.datamodel.models.find(el => el.name === collection)
}
