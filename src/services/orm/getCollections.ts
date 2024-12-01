import { ORM_DEFAULT_DB } from '~/utils/constants'

import { prisma } from './init'

export const getCollections = async () => {
  const dbTables = await prisma.$queryRaw<{ table_name: string }[]>`
  select table_name
  from information_schema.tables
  where table_type='BASE TABLE'
    and table_schema = ${ORM_DEFAULT_DB}
    and table_name NOT in ('_prisma_migrations', 'undefined', 'null')
`

  return dbTables.map(el => el.table_name)
}
