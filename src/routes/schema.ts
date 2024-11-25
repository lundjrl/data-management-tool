import { Elysia } from 'elysia'

import { create } from '~/services/orm/create'
import { deleteOne } from '~/services/orm/delete'
import { deleteMany } from '~/services/orm/deleteMany'
import { findFirst } from '~/services/orm/findFirst'
import { findMany } from '~/services/orm/findMany'
import { update } from '~/services/orm/update'
import { getNumber } from '~/utils/getNumber'

import type { ModelName } from '~/types/ModelName'

const app = new Elysia({ prefix: '/schema' })

app.get('/:collection/:id', async ({ params: { collection, id }, query }) => {
  const k = collection as ModelName
  const numId = getNumber(id)
  return await findFirst(k, { where: { ...query, id: numId } })
})

app.get('/:collection', async ({ params: { collection }, query }) => {
  const k = collection as ModelName
  return await findMany(k, query)
})

app.post('/:collection', async ({ body, params: { collection } }) => {
  const k = collection as ModelName
  return await create(k, body)
})

app.patch('/:collection/:id', async ({ params: { collection, id }, query }) => {
  const k = collection as ModelName
  const numId = getNumber(id)
  return await update(k, numId, query)
})

app.delete('/:collection/:id', async ({ params: { collection, id } }) => {
  const k = collection as ModelName
  const numId = getNumber(id)
  return await deleteOne(k, { id: numId })
})

app.delete('/:collection', async ({ params: { collection }, query }) => {
  const k = collection as ModelName
  return await deleteMany(k, query)
})

export default app
