import { log } from '../logger/log'
import { prisma } from './init'

type Params = {}

type FN = (params: Params) => Promise<unknown>

// Create a new DB table based on passed object.
export const createModel: FN = async params => {
  try {
    log('log', `Create model params:: ${params}`)
    // const { columns, tableName } = params
    const tableName = ''

    // TODO: Need to map through columns {} to build schema.
    const result = await prisma.$queryRaw`
  CREATE TABLE IF NOT EXISTS ${tableName} (

  )

  `

    return result
  } catch (error) {
    log('error', `${error}`)
  }
}
