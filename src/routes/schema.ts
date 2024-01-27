import { findFirst } from '~/services/orm/findFirst'
import { findMany } from '~/services/orm/findMany'
import { create } from '~/services/orm/create'
import { update } from '~/services/orm/update'
import { deleteOne } from '~/services/orm/delete'
import { Elysia } from 'elysia'

// FIXME: Schema's should have their own routes available too?
const app = new Elysia({ prefix: '/crew' })

app.get('/:id', async ({ params: { id }, query }) => {
  const result = await findFirst('crew', { where: { ...query, id } })
  return result
})

app.get('/', async ({ query }) => {
  const result = await findMany('crew', query)
  return result
})

app.post('/', async ({ body }) => {
  const result = await create('crew', body)
  return result
})

app.patch('/:id', async ({ query }) => {
  const result = await update('crew', query)
  return result
})

app.delete('/:id', async ({ params: { id } }) => {
  const result = await deleteOne('crew', { id })
  return result
})

export default app
