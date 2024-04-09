import { Elysia } from 'elysia'
import { Create_Table_Schema } from '~/schemas/forms/Create_Table'
import { Create_Table_Column_Schema } from '~/schemas/forms/Create_Table_Column'
import {
  alterBulkColumn,
  alterColumn,
  createBulkColumns,
  createColumn,
  deleteBulkColumns,
  deleteColumn,
  renameBulkColumns,
  renameColumn,
} from '~/services/database/columns'
import { getJSONSchema } from '~/services/database/json'
import { createTable, deleteTable } from '~/services/database/tables'

const app = new Elysia({ prefix: '/database' })

app.get('/json/schema', getJSONSchema)

app.post('/create/table', async ({ body }) => {
  const verified = Create_Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await createTable(verified.data)
  return { status: 200, data }
})

app.post('/delete/table', async ({ body }) => {
  const data = await deleteTable(body)
  return { status: 200, data }
})

app.post('/alter/column', async ({ body }) => {
  const data = await alterColumn(body)
  return { status: 200, data }
})

app.post('/alter/bulk/column', async ({ body }) => {
  const data = await alterBulkColumn(body)
  return { status: 200, data }
})

app.post('/create/column', async ({ body }) => {
  const verified = Create_Table_Schema.safeParse(body)
  if (!verified.success) return { status: 400, data: verified.error }

  const data = await createColumn(verified.data)
  return { status: 200, data }
})

app.post('/create/bulk/column', async ({ body }) => {
  const data = await createBulkColumns(body)
  return { status: 200, data }
})

app.post('/delete/column', async ({ body }) => {
  const data = await deleteColumn(body)
  return { status: 200, data }
})

app.post('/delete/bulk/column', async ({ body }) => {
  const data = await deleteBulkColumns(body)
  return { status: 200, data }
})

app.post('/rename/column', async ({ body }) => {
  const data = await renameColumn(body)
  return { status: 200, data }
})

app.post('/rename/bulk/column', async ({ body }) => {
  const data = await renameBulkColumns(body)
  return { status: 200, data }
})

export default app
