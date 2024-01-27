import { Elysia } from 'elysia'

const app = new Elysia({ prefix: '/health' })

app.get('/', () => {
  return 'healthy as a goat 🐐'
})

export default app
