import { Elysia } from 'elysia'

import { introspection } from '~/services/types/introspection'

const app = new Elysia({ prefix: '/orm' })

app.get('/introspect', () => introspection())

export default app
