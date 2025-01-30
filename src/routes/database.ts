import { Elysia } from 'elysia'

import { generate } from '~/commands/generate'
import { Alter_Table_Schema } from '~/schemas/forms/Alter_Table'
import { Table_Schema } from '~/schemas/forms/Table'
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

import type { Table } from '~/schemas/forms/Table'

const app = new Elysia({ prefix: '/database' }).onAfterResponse(async (handlerParams) => {
  const response = handlerParams.response as Record<string, number>
  if ('status' in response && response.status === 200)
  // Run DB -> ORM sync after route exits.
    await generate()
})

app.get('/json/schema/', getJSONSchema)

app.get('/json/schema/:collection', ({ params: { collection } }) => getJSONSchema(collection))

app.post('/create/table', async ({ body }: { body: Table }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await createTable(verified.data)

  return { status: 200, data: `complete ${data}` }
})

app.post('/delete/table', async ({ body }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await deleteTable(verified.data)

  return { status: 200, data: `complete ${data}` }
})

app.post('/alter/column', async ({ body }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await alterColumn(verified.data)
  return { status: 200, data }
})

app.post('/alter/bulk/column', async ({ body }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await alterBulkColumn(verified.data)
  return { status: 200, data }
})

app.post('/create/column', async ({ body }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await createColumn(verified.data)
  return { status: 200, data }
})

app.post('/create/bulk/column', async ({ body }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await createBulkColumns(verified.data)
  return { status: 200, data }
})

app.post('/delete/column', async ({ body }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await deleteColumn(verified.data)
  return { status: 200, data }
})

app.post('/delete/bulk/column', async ({ body }) => {
  const verified = Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await deleteBulkColumns(verified.data)
  return { status: 200, data }
})

app.post('/rename/column', async ({ body }) => {
  const verified = Alter_Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await renameColumn(verified.data)
  return { status: 200, data }
})

app.post('/rename/bulk/column', async ({ body }) => {
  const verified = Alter_Table_Schema.safeParse(body)

  if (!verified.success) return { status: 400, data: verified.error }

  const data = await renameBulkColumns(verified.data)
  return { status: 200, data }
})

export default app
