import { Elysia } from 'elysia'
import { z } from 'zod'

import { log } from '~/services/logger/log'
import { getCollections } from '~/services/orm/getCollections'

// Endpoint where buttons/etc can invoke
const app = new Elysia({ prefix: '/fn' })

app.post('/', res => log('log', `${JSON.stringify(res)}`))

app.get('/collections', getCollections)

app.post('/validation/email', res => z.string().email().parse(res.body))

export default app
