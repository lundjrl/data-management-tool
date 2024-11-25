import { introspection } from 'bin/introspection'
import { Elysia } from 'elysia'

const app = new Elysia({ prefix: '/orm' })

app.post('/introspect', () => introspection())

export default app
