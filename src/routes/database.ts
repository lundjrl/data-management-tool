import { Elysia } from 'elysia'
import { createTable, deleteTable } from '~/services/database/tables'

const app = new Elysia({ prefix: '/database' })

app.post('/create', async req => {
  const data = await createTable(req.body)
  return { status: 200, data }
})

app.post('/delete', async req => {
  const data = await deleteTable(req.body)
  return { status: 200, data }
})

export default app
