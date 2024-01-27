import { Elysia } from 'elysia'
import { generateTempObject } from './utils/generateTempObject'
import { returnSchema } from './utils/returnSchema'
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'
import bearer from '@elysiajs/bearer'
import schemaRoutes from '~/routes/schema'
import ormRoutes from '~/routes/orm'
import { log } from './services/logger/log'
import healthRoutes from '~/routes/health'

const app = new Elysia()

// Enable swagger docs, access with /swagger endpoint
app.use(swagger())

// Enable CORS config
app.use(cors())

app.get('/', generateTempObject)

// app.get('/health', () => "it's running")

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

app.use(healthRoutes)
app.use(ormRoutes)
app.use(schemaRoutes)

app.listen(8055)

log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
