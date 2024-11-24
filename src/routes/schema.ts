import { findFirst } from '~/services/orm/findFirst'
import { findMany } from '~/services/orm/findMany'
import { create } from '~/services/orm/create'
import { update } from '~/services/orm/update'
import { deleteMany, deleteOne } from '~/services/orm/delete'
import { Elysia } from 'elysia'
import type { Prisma } from '@prisma/client'

const app = new Elysia({ prefix: '/schema' })

app.get('/:collection/:id', async ({ params: { collection, id }, query }) => {
  const k = collection as Prisma.ModelName
  const result = await findFirst(k, { where: { ...query, id } })
  return result
})

app.get('/:collection', async ({ params: { collection }, query }) => {
  const k = collection as Prisma.ModelName
  const result = await findMany(k, query)
  return result
})

app.post('/:collection', async ({ body, params: { collection } }) => {
  const k = collection as Prisma.ModelName
  const result = await create(k, body)
  return result
})

app.patch('/:collection/:id', async ({ params: { collection, id }, query }) => {
  console.log('james id::', id)
  const k = collection as Prisma.ModelName
  const result = await update(k, query)
  return result
})

app.delete('/:collection/:id', async ({ params: { collection, id } }) => {
  console.log('James First hit')
  const k = collection as Prisma.ModelName
  const result = await deleteOne(k, { id })
  return result
})

app.delete('/:collection', async ({ params: { collection }, query }) => {
  console.log('James Query:', query)
  const k = collection as Prisma.ModelName
  const result = await deleteMany(k, {})
  return result
  return query
})

export default app
