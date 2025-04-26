import { Prisma } from '@prisma/client'

import { prisma } from '~/services/orm/init'

import { log } from '../logger/log'

import type { Table } from '~/schemas/forms/Table'

const buildQuery = (columns: Table['columns']): string => {
  const s: string[] = []

  columns.forEach((el, index) => {
    const { length, name, nullable, relationship, type, unique } = el

    const isPrimary: boolean = !!relationship?.primaryKey
    const isForeign: boolean = !!relationship?.foreignKeyName
    const shouldHaveKeyStr: boolean = isPrimary || isForeign

    const referencedColumn = relationship?.referencedColumn || ''
    const referencedTable = relationship?.referencedTable || ''
    const constraintName = `fk_${referencedTable}`
    const fkName = relationship?.foreignKeyName || ''

    // TODO: Do something with relationship.relationshipType
    const foreignKeyStmt = `FOREIGN KEY(${fkName}) REFERENCES ${referencedTable}(${referencedColumn})`
    const isOneToOne = relationship?.relationshipType === 'o2o'
    const relationshipStr = isOneToOne ? foreignKeyStmt : ''

    const keyStr = shouldHaveKeyStr
      ? `${
        isPrimary
          ? 'SERIAL PRIMARY KEY'
          : `CONSTRAINT ${constraintName} ${relationshipStr} `
      }`
      : ''

    const uniqueStr = unique ? 'UNIQUE' : ''
    const nullStr = nullable ? '' : 'NOT NULL'
    const isLast = index === columns?.length - 1
    const endStr = isLast ? '' : ''

    const hasStringLimit = Boolean(length) ?? false
    const limit = hasStringLimit ? `(${length})` : ''

    const stmt = `${(isPrimary || isForeign) ? '' : type} ${limit} ${uniqueStr} ${nullStr}`

    const prefix = isForeign ? '' : name
    const str = `${prefix} ${keyStr} ${stmt} ${endStr}`
    const keyColStr = `${name} ${type} ${uniqueStr} ${nullStr}`

    // If foreign constraint, push new column first
    if (isForeign) {
      s.push(keyColStr)
    }

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
export const createTable: FN = async (tableData) => {
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
export const deleteTable: FN = async (tableData) => {
  const { name, cascade = false } = tableData

  const cascadeStr = cascade ? 'CASCADE' : ''

  const query = `DROP TABLE IF EXISTS ${name} ${cascadeStr}`

  log('log', `EXECUTING QUERY: ${query}`)

  const result = await prisma.$queryRaw`${Prisma.raw(query)}`

  return !!result
}
