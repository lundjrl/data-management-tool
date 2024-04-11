import { prisma } from '../orm/init'
import { Prisma } from '@prisma/client'
import { log } from '../logger/log'

import type { Alter_Table } from '~/schemas/forms/Alter_Table'
import type { Table } from '~/schemas/forms/Table'

type FN = (tableData: Table) => Promise<boolean>

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
 * Alter an existing table column.
 * @param tableData
 * @returns boolean
 */
export const alterBulkColumn: FN = async tableData => {
  const { name, columns } = tableData

  let queryString = ''

  columns.forEach((el, index) => {
    const { name: columnName, type } = el
    const isLast = index === columns.length - 1
    const end = isLast ? ';' : ','

    const str = `MODIFY COLUMN ${columnName} ${type}${end}`
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
 * Create new table columns.
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
 * Delete database tables.
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

type RenameFN = (tableData: Alter_Table) => Promise<boolean>

/**
 * Rename an existing table column.
 * @param tableData
 * @returns boolean
 */
export const renameColumn: RenameFN = async tableData => {
  const { name, columns } = tableData

  const { columnName, newColumnName } = columns[0]

  const query = `
    ALTER TABLE ${name}
    RENAME COLUMN ${columnName} to ${newColumnName};
  `

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}

/**
 * Rename existing table columns.
 * @param tableData
 * @returns boolean
 */
export const renameBulkColumns: RenameFN = async tableData => {
  const { name, columns } = tableData

  let queryString = ''

  columns.forEach((el, index) => {
    const { columnName, newColumnName } = el
    const isLast = index === columns.length - 1
    const end = isLast ? ';' : ','

    const str = `RENAME COLUMN ${columnName} to ${newColumnName}${end}`
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
