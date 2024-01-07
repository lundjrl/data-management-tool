import { Elysia } from 'elysia'
import { generateTempObject } from './utils/generateTempObject'
import { returnSchema } from './utils/returnSchema'
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'
import bearer from '@elysiajs/bearer'
import { findFirst } from './services/orm/findFirst'
import { create } from './services/orm/create'
import { findMany } from './services/orm/findMany'
import { deleteOne } from './services/orm/delete'
import { update } from './services/orm/update'

export const app = new Elysia()

// Enable swagger docs, access with /swagger endpoint
app.use(swagger())

// Enable CORS config
app.use(cors())

app.get('/', generateTempObject)

app.get('/schema', returnSchema)

// Example parse bearer token from request.
app.use(bearer()).get('/auth', ({ bearer }) => bearer, {
  beforeHandle({ bearer, set }) {
    if (!bearer) {
      set.status = 400
      set.headers['WWW-Authenticate'] = `Bearer realm='sign', error="invalid_request"`

      return 'Unauthorized'
    }
  },
})

// Example get cookie from request.
app.get('/cookie', ({ cookie: { name } }) => {
  // Get
  name.value

  // Set
  name.value = 'New Value'
  name.value = {
    hello: 'world',
  }
})

app.get('/crew/:id', async ({ params: { id }, query }) => {
  const result = await findFirst('crew', { where: { ...query, id } })
  return result
})

app.get('/crew', async ({ query }) => {
  const result = await findMany('crew', query)
  return result
})

app.post('/crew', async ({ body }) => {
  const result = await create('crew', body)
  return result
})

app.patch('/crew/:id', async ({ query }) => {
  const result = await update('crew', query)
  return result
})

app.delete('/crew/:id', async ({ params: { id } }) => {
  const result = await deleteOne('crew', { id })
  return result
})

app.listen(8055)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
