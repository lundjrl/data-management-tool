import Bun from 'bun'
import { log } from '../src/services/logger/log'

// Pull the latest version of the DB and update ORM schema.
export const introspection = () => {
  const result = Bun.spawnSync({ cmd: ['bunx', 'prisma', 'db', 'pull'] })
  const buf = result.stdout

  const str = buf.toString()
  const consoleMsg = result.success ? 'Success' : 'Error'

  log('log', `${consoleMsg} - ${str}`)
  return
}
