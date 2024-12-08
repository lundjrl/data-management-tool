<div>
<table border="0" style="background-color: none; width: 100%">
 <tr>
 </tr>
 <tr>
    <td>
      <img alt="Data Management Tool's mascot" src="images/Logo.png" width="300px">
    </td>
    <td>
      <div>
        <h1>Data Management Tool</h1>
        <p>A small, organized, schema management API</p>
      </div>
      <div style="margin-top: 1rem">
        <a href="https://github.com/lundjrl/great-asset/actions/workflows/build.yml">
          <img alt="Passes Build" src="https://github.com/lundjrl/great-asset/actions/workflows/build.yml/badge.svg" />
        </a>
      </div>
      <div style="margin-top: 1rem">
        <a href="https://opensource.org/licenses/MIT">
          <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?color=blue" />
        </a>
      </div>
      <div style="margin-top: 1rem">
        <a href="https://github.com/lundjrl/great-asset/actions/workflows/tsc.yml">
            <img alt="Passes TSC checks" src="https://github.com/lundjrl/great-asset/actions/workflows/tsc.yml/badge.svg" />
        </a>
      </div>
    </td>
 </tr>
</table>
</div>

More info here: https://drive.google.com/drive/u/1/folders/1af3onOTX2v7sOIQcTjMO9r3A6XnZx8MW

## Elysia with Bun runtime

### Getting Started

To get started make sure you have Docker installed.
After that's done, spin up the API and Database containers with

```bash
./start
```

Open http://localhost:4000/ with your browser to see the API running.

The API has swagger doc support baked in, check the result at http://localhost:4000/swagger

### Adding ENV variables

All Env vars need to be added to `.env` as well as typed in `./env.ts` for type safety.

### Setting up a database

Running the start command should spin up an empty postgres database for you.

To apply the `prisma/schema.prisma` db schema to postgres, run `./bun run db:schema:push`

To overwrite the prisma schema with your local db, run `./bun run db:schema:pull`

For general prisma help, run `./bun run db:help`

### Running documentation

Run `./documentation` to spin up the Vitepress server.

Api docs should be available at `http://localhost:5173`
