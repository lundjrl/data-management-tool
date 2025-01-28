import { Elysia } from 'elysia'

import { create } from '~/services/orm/create'
import { createMany } from '~/services/orm/createMany'
import { deleteOne } from '~/services/orm/delete'
import { deleteMany } from '~/services/orm/deleteMany'
import { findFirst } from '~/services/orm/findFirst'
import { findMany } from '~/services/orm/findMany'
import { update } from '~/services/orm/update'
import { getNumber } from '~/utils/getNumber'
import { response } from '~/wrappers/response'

import type { ModelName } from '~/types/ModelName'

const app = new Elysia({ prefix: '/schema' })

app.get('/:collection/:id', async ({ params: { collection, id }, query }) => {
  const k = collection as ModelName
  const numId = getNumber(id)
  const res = await findFirst(k, { where: { ...query, id: numId } })

  return response(res[0], res[1])
})

app.get('/:collection', async ({ params: { collection }, query }) => {
  const k = collection as ModelName
  const res = await findMany(k, query)

  return response(res[0], res[1])
})

app.post('/:collection', async ({ body, params: { collection } }: { body: object | object[], params: { collection: ModelName } }) => {
  if (Array.isArray(body)) {
    const res = await createMany(collection, body)

    return response(res[0], res[1])
  }

  const res = await create(collection, body)

  return response(res[0], res[1])
})

app.patch('/:collection/:id', async ({ body, params: { collection, id } }) => {
  const k = collection as ModelName
  const numId = getNumber(id)
  const res = await update(k, numId, body as object)

  return response(res[0], res[1])
})

app.delete('/:collection/:id', async ({ params: { collection, id } }) => {
  const k = collection as ModelName
  const numId = getNumber(id)
  const res = await deleteOne(k, { id: numId })

  return response(res[0], res[1])
})

app.delete('/:collection', async ({ params: { collection }, query }) => {
  const k = collection as ModelName
  const res = await deleteMany(k, query)

  return response(res[0], res[1])
})

export default app
