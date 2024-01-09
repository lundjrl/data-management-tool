import P from '../node_modules/@prisma/migrate/dist/commands/DbPull'
// import Bun from 'bun'

// Pull the latest version of the DB and update ORM schema.
export const introspection = () => {
  const introspection = new P.DbPull()
  introspection
    .parse(['--schema=./prisma/schema.prisma'])
    .then(res => console.log('James Res:', res))
    .catch(err => console.error('DB ERROR:', err))
  // const result = Bun.spawnSync({ cmd: ['prisma', 'db', 'pull'] })

  const n = introspection.help()
  console.log('James N:', n)
  // const consoleMsg = result.success ? 'Success' : 'Error'

  console.log('done')
}
