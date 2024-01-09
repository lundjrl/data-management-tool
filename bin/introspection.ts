import Bun from 'bun'
import { log } from '../src/services/logger/log'

// Pull the latest version of the DB and update ORM schema.
export const introspection = () => {
  const result = Bun.spawnSync({ cmd: ['bunx', 'prisma', 'db', 'pull'] })

  const consoleMsg = result.success ? 'Success' : 'Error'

  log(consoleMsg)
  return
}
