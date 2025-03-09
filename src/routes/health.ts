import { Elysia } from 'elysia'

const app = new Elysia()

const healthResponse = 'healthy as a goat 🐐'

app.get('/', () => healthResponse)
app.get('/health', () => healthResponse)

export default app
