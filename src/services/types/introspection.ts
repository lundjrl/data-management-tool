import { introspectRoutes } from './introspect-routes'
import { introspectSchemaFunctions } from './introspect-schema-functions'

export const introspection = async () => {
  const promises = [
    await introspectSchemaFunctions(),
    await introspectRoutes(),
  ]

  await Promise.all(promises)

  return { status: 200, data: 'Introspection complete. Please view the types under src/types/generated' }
}
