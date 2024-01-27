import { Env } from '@adonisjs/env'

const validator = Env.rules({
  PORT: Env.schema.number(),
  DATABASE_URL: Env.schema.string(),
})

export function env() {
  return validator.validate(process.env)
}

export { validator }
