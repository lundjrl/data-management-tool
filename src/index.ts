import bearer from '@elysiajs/bearer'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { compression } from 'elysia-compression'

import databaseRoutes from '~/routes/database'
import fnRoutes from '~/routes/fn'
import healthRoutes from '~/routes/health'
import ormRoutes from '~/routes/orm'
import schemaRoutes from '~/routes/schema'
import searchRoutes from '~/routes/search'
import uiRoutes from '~/routes/ui'

import { env } from '../env'

import { log } from './services/logger/log'
import { generateTempObject } from './utils/generateTempObject'
import { returnSchema } from './utils/returnSchema'

const app = new Elysia()

// Enable swagger docs, access with /swagger endpoint
app.use(swagger())

// Enable CORS config
app.use(cors())

// Enable compression
app.use(compression())

app.get('/', generateTempObject)

/**
 * Test to show endpoint
 */
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
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  name.value

  // Set
  name.value = 'New Value'
  // name.value = {
  //   hello: 'world',
  // }
})

// Add additional routes to API
app.use(databaseRoutes)
app.use(fnRoutes)
app.use(healthRoutes)
app.use(ormRoutes)
app.use(schemaRoutes)
app.use(searchRoutes)
app.use(uiRoutes)

app.listen(env().PORT)

log('log', `🕷️  Data Management Tool is running at ${app.server?.hostname}:${app.server?.port}`)
