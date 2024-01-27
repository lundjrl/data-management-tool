import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { baseRoute } from '~/ui'

const app = new Elysia({ prefix: '/ui' })

app.use(html({ autoDetect: false }))

app.get('/', e => {
  e.set.headers['Content-Type'] = 'text/html; charset=utf8'
  return baseRoute()
})

export default app
