import { Elysia } from 'elysia'

import { introspectRoutes } from '~/services/types/introspect-routes'
import { introspectSchemaFunctions } from '~/services/types/introspect-schema-functions'
import { introspection } from '~/services/types/introspection'

const app = new Elysia({ prefix: '/orm' })

app.get('/introspect/', introspection)
app.get('/introspect/fn/', introspectSchemaFunctions)
app.get('/introspect/routes/', introspectRoutes)

export default app
