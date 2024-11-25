import { Prisma } from '@prisma/client'

import { log } from '../logger/log'
import { prisma } from '../orm/init'

import type { Table } from '~/schemas/forms/Table'

const buildQuery = (columns: Table['columns']): string => {
  const s: string[] = []

  columns.forEach((el, index) => {
    const { length, name, nullable, relationship, type, unique } = el

    const isPrimary: boolean = !!relationship?.primaryKey
    const isForeign: boolean = !!relationship?.foreignKey
    const shouldHaveKeyStr: boolean = isPrimary || isForeign

    const referencedColumn = relationship?.referencedColumn || ''
    const referencedTable = relationship?.referencedTable || ''
    const constraintName = `fk_${referencedTable}`
    const fkName = relationship?.foreignKey || ''

    const keyStr = shouldHaveKeyStr
      ? `${
          isPrimary
            ? 'SERIAL PRIMARY KEY'
            : `CONSTRAINT ${constraintName} FOREIGN KEY(${fkName}) REFERENCES ${referencedTable}(${referencedColumn}) `
        }`
      : ''

    const uniqueStr = unique ? 'UNIQUE' : ''
    const nullStr = nullable ? '' : 'NOT NULL'
    const isLast = index === columns?.length - 1
    const endStr = isLast ? '' : ''

    const hasStringLimit = Boolean(length) ?? false
    const limit = hasStringLimit ? `(${length})` : ''

    const stmt = `${type} ${limit} ${uniqueStr} ${nullStr}`
    const str = `${name} ${keyStr} ${stmt} ${endStr}`

    s.push(str)
  })

  return s.toString()
}

type FN = (tableData: Table) => Promise<boolean>

/**
 * Create a new database table.
 * @param tableData
 * @returns boolean
 */
export const createTable: FN = async tableData => {
  const { name, columns = [] } = tableData

  const queryString = buildQuery(columns)

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
export const deleteTable: FN = async tableData => {
  const { name } = tableData

  const query = `DROP TABLE IF EXISTS ${name}`

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}
