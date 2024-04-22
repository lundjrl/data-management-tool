import { Elysia } from 'elysia'
import { getCollections } from '~/services/orm/getCollections'

const app = new Elysia({ prefix: '/search' })

const search = async (query: string, filters?: string, pagination?: string) => {
  const collections = await getCollections()

  const q = collections
    .map(
      (el, index) =>
        `select coalesce(id, null), coalesce(name, '') from ${el} ${index === collections.length - 1 ? '' : 'union'} `,
    )
    .join('')

  return { collections, q, query, filters, pagination }
}

app.get('/:query', ({ params: { query } }) => search(query))
app.get('/:query/:filters', ({ params: { query, filters } }) => search(query, filters))
app.get('/:query/:filters/:pagination', ({ params: { query, filters, pagination } }) =>
  search(query, filters, pagination),
)

export default app
