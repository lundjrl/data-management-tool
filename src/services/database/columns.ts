import { prisma } from '../orm/init'
import { Prisma } from '@prisma/client'
import { log } from '../logger/log'
import type { Create_Table } from '~/schemas/forms/Create_Table'

type FN = (tableData: Create_Table) => Promise<boolean>

/**
 * Alter an existing table column.
 * @param tableData
 * @returns boolean
 */
export const alterColumn: FN = async tableData => {
  const { name, columns } = tableData

  const { name: columnName, type } = columns[0]

  const query = `
    ALTER TABLE ${name}
    MODIFY COLUMN ${columnName} ${type};
  `

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}

/**
 * Create a new table column.
 * @param tableData
 * @returns boolean
 */
export const createColumn: FN = async tableData => {
  const { name, columns } = tableData

  const { name: columnName, type } = columns[0]

  const query = `
    ALTER TABLE ${name}
    ADD ${columnName} ${type}
  `

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}

/**
 * Create a new table column.
 * @param tableData
 * @returns boolean
 */
export const createBulkColumns: FN = async tableData => {
  const { name, columns } = tableData

  let queryString = ''

  columns.forEach((el, index) => {
    const { name: columnName, type } = el
    const isLast = index === columns.length - 1
    const end = isLast ? ';' : ','

    const str = `ADD ${columnName} ${type}${end}`
    queryString = queryString.concat(str)
  })

  const query = `
    ALTER TABLE ${name}
    ${queryString}
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
  const { name, columns } = tableData

  const { name: columnName } = columns[0]

  const query = `
    ALTER TABLE ${name}
    DROP COLUMN ${columnName}
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
export const deleteBulkColumns: FN = async tableData => {
  const { name, columns } = tableData

  let queryString = ''

  columns.forEach((el, index) => {
    const { name: columnName } = el
    const isLast = index === columns.length - 1
    const end = isLast ? ';' : ','

    const str = `DROP COLUMN ${columnName}${end}`
    queryString = queryString.concat(str)
  })

  const query = `
    ALTER TABLE ${name}
    ${queryString}
    `

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}
