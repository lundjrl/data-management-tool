<div align="center">
    <a href="https://github.com/lundjrl/data-management-tool">
      <img alt="Data Management Tool's mascot" src="images/readme-logo.png" width="200px">
    </a>
    <h3 align="center" style="font-size: 24px; margin-top: -24px">
      Data Management Tool
    </h3>
    <p align="center">A small, organized, schema management API</p>
    <div style="margin-top: 1rem">
      <a href="https://github.com/lundjrl/great-asset/actions/workflows/build.yml">
        <img alt="Passes Build" src="https://github.com/lundjrl/great-asset/actions/workflows/build.yml/badge.svg" />
      </a>
      <a href="https://opensource.org/licenses/MIT" style="margin-left: 10px">
        <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?color=blue" />
      </a>
      <a href="https://github.com/lundjrl/great-asset/actions/workflows/tsc.yml" style="margin-left: 10px">
        <img alt="Passes TSC checks" src="https://github.com/lundjrl/great-asset/actions/workflows/tsc.yml/badge.svg" />
      </a>
    </div>
</div>

<!-- Relevant Links section -->
<details>
  <summary>Relevant Links</summary>
  <ol>
    <li>
      <a href="https://sparkbusinessworks.postman.co/workspace/GA-Workspace~b8d212cc-0a2e-4e7c-a8d5-940ef5cf5f56/collection/28729570-1d13e580-4cac-456d-b939-acca422820cc?action=share&creator=28729570&active-environment=28729570-cd3ea200-137f-434a-b168-b5a53337f296" target="_blank">Postman</a>
    </li>
    <li>
      <a href="https://drive.google.com/drive/u/1/folders/1af3onOTX2v7sOIQcTjMO9r3A6XnZx8MW" target="_blank">Roadmap</a>
    </li>
  </ol>
</details>

<!-- Table of contents section -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#️-about">About</a>
    </li>
    <li>
      <a href="#️-documentation">Documentation</a>
    </li>
    <li>
      <a href="#️-frequently-asked-questions">FAQ</a>
    </li>
  </ol>
</details>
<br />

## 🕷️ About

The Data Management Tool (DMT) is a self-hosted API that allows folks with little to no database experience to manage their database.

The goal is you never have to write SQL. Just CRUD your models with API calls.

After creating a new model, enjoy CRUD endpoints automatically generated for you.

### Features

1. Manage your database models with API calls.
2. CRUD your data with generated API routes.
3. (coming soon) Generate types for your data models.
<br />

## 📚 Documentation

### Getting Started

To get started make sure you have Docker installed.
After that's done, spin up the API and Database containers with

```bash
./start
```

and navigate to http://localhost:4000/ with your browser to see the API running.

#### API docs

Scalar UI is enabled by default to showcase the REST API. Check it out at `http://localhost:4000/docs`

We additionally expose an openAPI doc at `http://localhost:4000/docs/json`

#### Adding ENV variables

By default, DMT asks you to create a `.env` file from the `.env.example` file in this repo. Out of the box, the port and a PostgreSQL query string is already mapped for you.

All new Env vars need to be added to `.env` as well as typed in `./env.ts` for type safety.

#### Setting up a database

Running the start command should spin up an empty postgres database for you.

To apply the `prisma/schema.prisma` db schema to postgres, run `./bun run db:schema:push`

To overwrite the prisma schema with your local db, run `./bun run db:schema:pull`

For general prisma help, run `./bun run db:help`

<br />

### Generating Types

We're working on generating types for the API endpoints. These types can either be consumed in a custom SDK or within your project.

Invoking `http://localhost:4000/orm/introspect` will return a text output of generated function types for the nested functions inside of the `schema` endpoints. We're working on extending this type generation to the outer routes.

### Running documentation

Run `./documentation` to spin up the Vitepress server.

<br />

## Frequently Asked Questions

What's up with the spider mascot?

- Bold Jumping Spiders (Phidippus Audax) are organized, intelligent, and beautiful creatures. I picked the mascot to represent the mindset of keeping a database clean and tidy `¯\_(ツ)_/¯` Did you know they can dream?
