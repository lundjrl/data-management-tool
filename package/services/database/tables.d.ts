import type { Table } from '~/schemas/forms/Table';
type FN = (tableData: Table) => Promise<boolean>;
/**
 * Create a new database table.
 * @param tableData
 * @returns boolean
 */
export declare const createTable: FN;
/**
 * Delete a database table.
 * @param tableData
 * @returns boolean
 */
export declare const deleteTable: FN;
export {};
