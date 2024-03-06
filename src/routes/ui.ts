import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import Home from '~/ui/pages/Home'
import Models from '~/ui/pages/Models'

const app = new Elysia({ prefix: '/ui' })

app.use(html({ autoDetect: false }))

app.get('/', e => {
  e.set.headers['Content-Type'] = 'text/html; charset=utf8'
  return Home()
})

app.get('/models', e => {
  e.set.headers['Content-Type'] = 'text/html; charset=utf8'
  return Models()
})

export default app
