import { Elysia } from 'elysia'
import { prisma } from '~/services/orm/init'

const ORM_DEFAULT_DB = 'public'

const app = new Elysia({ prefix: '/search' })

app.post('/test', e => {
  return e
})

app.get('/:query', async ({ params: { query } }) => query)
app.get('/:query/:filters', async ({ params: { query, filters } }) => ({ query, filters }))

app.get('/:query/:filters/:pagination', async ({ params: { query, filters, pagination } }) => {
  console.log('JAmes ENDPOINT')
  const dbTables = await prisma.$queryRaw<{ table_name: string }[]>`
    select table_name
    from information_schema.tables
    where table_type='BASE TABLE'
      and table_schema = ${ORM_DEFAULT_DB}
  `

  const tables = dbTables.map(el => el.table_name)

  // TODO: Query string builder here to prep join stmt.

  const results = await prisma.$queryRaw`
    -- select * from "crew"
    --   union
    -- select * from "monster"
    --   union
    select * from "duty"
    -- where column like '%query%'
      -- order by "createdAt"
      -- limit 10
`

  return { dbTables, query, filters, pagination, results }
})

export default app
