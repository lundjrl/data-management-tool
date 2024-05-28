# Great Asset!

<p align="center">
  <img src="images/Logo.png" alt="Data Management Tool's mascot">
</p>

<div align="center">

<a href="">[![Passes build](https://github.com/lundjrl/great-asset/actions/workflows/build.yml/badge.svg)](https://github.com/lundjrl/great-asset/actions/workflows/build.yml)</a>
<a href="">[![Passes TSC checks](https://github.com/lundjrl/great-asset/actions/workflows/tsc.yml/badge.svg)](https://github.com/lundjrl/great-asset/actions/workflows/tsc.yml)
</a>
<a href="">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?color=blue)](https://opensource.org/licenses/MIT)</a>

</div>

Building a great asset for the company.

More info here: https://drive.google.com/drive/u/1/folders/1af3onOTX2v7sOIQcTjMO9r3A6XnZx8MW

## Elysia with Bun runtime

### Getting Started

To get started make sure you have Docker installed.
After that's done, spin up the API and Database containers with

```bash
./start
```

Open http://localhost:8056/ with your browser to see the API running.

The API has swagger doc support baked in, check the result at http://localhost:8056/swagger

### Adding ENV variables

All Env vars need to be added to `.env` as well as typed in `./env.ts` for type safety.

### Setting up a database

Running the start command should spin up an empty postgres database for you.

To apply the `prisma/schema.prisma` db schema to postgres, run `./bun run db:schema:push`

To overwrite the prisma schema with your local db, run `./bun run db:schema:pull`

For general prisma help, run `./bun run db:help`
