import { $ } from 'bun'

/**
 * Update the ORM schema with the database schema
 */
export const generate = async () => await $`bun run db:schema:pull`
