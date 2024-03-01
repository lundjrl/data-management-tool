import { prisma } from '../orm/init'
import { Prisma } from '@prisma/client'
import { log } from '../logger/log'

type FN = (tableData: Create_Table) => Promise<boolean>

/**
 * Create a new database table.
 * @param tableData
 * @returns boolean
 */
export const createColumn: FN = async tableData => {
  const { name, columns } = tableData

  const query = `
  CREATE TABLE IF NOT EXISTS ${name} (
    ${queryString}
    )
  `

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}

/**
 * Delete a database table.
 * @param tableData
 * @returns boolean
 */
export const deleteColumn: FN = async tableData => {
  const { name } = tableData

  const query = `DROP TABLE IF EXISTS ${name}`

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}
