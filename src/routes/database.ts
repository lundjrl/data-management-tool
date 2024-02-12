import { Elysia } from 'elysia'
import { createTable } from '~/services/database/tables'

const app = new Elysia({ prefix: '/database' })

app.post('/create', async req => {
  const data = await createTable(req.body)
  return { status: 200, data }
})

export default app
