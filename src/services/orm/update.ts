import { prisma } from './init'

<<<<<<< HEAD
import type { UpdateOverload } from '~/types/generated/functions'


export const update: UpdateOverload = async (key, id, params) => {
  const response = await prisma[key].update({ data: params, where: { id } })

  return response as ReturnType<UpdateOverload>
=======
import type {UpdateManyOverload} from '~/types/generated/functions'


export const update: UpdateOverload = async (key, id, params) => {
  const response = await prisma[key].update({ data: params, where: { id } })

  return response
>>>>>>> c684e30 (Added type gen for create and update)
}
