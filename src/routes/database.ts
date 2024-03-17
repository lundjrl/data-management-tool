import { Elysia } from 'elysia'
import { createBulkColumns, createColumn, deleteBulkColumns, deleteColumn } from '~/services/database/columns'
import { createTable, deleteTable } from '~/services/database/tables'

const app = new Elysia({ prefix: '/database' })

app.post('/create/table', async req => {
  const data = await createTable(req.body)
  return { status: 200, data }
})

app.post('/delete/table', async req => {
  const data = await deleteTable(req.body)
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

export default app
