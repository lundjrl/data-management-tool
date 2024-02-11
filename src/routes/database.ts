import { Elysia } from 'elysia'
import { createTable } from '~/services/database/tables'

const app = new Elysia({ prefix: '/database' })

app.post('/create', async (req, res) => {
  const data = await createTable(req.body)
  res.send({ status: 200, data })
})

export default app
