const AdonisEnv = await import('@adonisjs/env')

const Env = AdonisEnv.Env

const validator = Env.rules({
  PORT: Env.schema.number(),
  DATABASE_URL: Env.schema.string(),
})

export function env() {
  return validator.validate(process.env)
}

export { validator }
