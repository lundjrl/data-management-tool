import { Elysia } from 'elysia'
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

app.post('/create/table', async req => {
  const data = await createTable(req.body)
  return { status: 200, data }
})

app.post('/delete/table', async req => {
  const data = await deleteTable(req.body)
  return { status: 200, data }
})

app.post('/alter/column', async req => {
  const data = await alterColumn(req.body)
  return { status: 200, data }
})

app.post('/alter/bulk/column', async req => {
  const data = await alterBulkColumn(req.body)
  return { status: 200, data }
})

app.post('/create/column', async req => {
  const data = await createColumn(req.body)
  return { status: 200, data }
})

app.post('/create/bulk/column', async req => {
  const data = await createBulkColumns(req.body)
  return { status: 200, data }
})

app.post('/delete/column', async req => {
  const data = await deleteColumn(req.body)
  return { status: 200, data }
})

app.post('/delete/bulk/column', async req => {
  const data = await deleteBulkColumns(req.body)
  return { status: 200, data }
})

app.post('/rename/column', async req => {
  const data = await renameColumn(req.body)
  return { status: 200, data }
})

app.post('/rename/bulk/column', async req => {
  const data = await renameBulkColumns(req.body)
  return { status: 200, data }
})

export default app
