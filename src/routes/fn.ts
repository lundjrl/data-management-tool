import { Elysia } from 'elysia'
import { log } from '~/services/logger/log'
import { z } from 'zod'

// Endpoint where buttons/etc can invoke
const app = new Elysia({ prefix: '/fn' })

app.get('/', () => 'pong')

app.post('/', res => log('log', `${JSON.stringify(res)}`))

app.post('/validation/email', res => z.string().email().parse(res.body))
export default app
