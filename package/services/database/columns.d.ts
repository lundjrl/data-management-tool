import type { Alter_Table } from '~/schemas/forms/Alter_Table';
import type { Table } from '~/schemas/forms/Table';
type FN = (tableData: Table) => Promise<boolean>;
/**
 * Alter an existing table column.
 * @param tableData
 * @returns boolean
 */
export declare const alterColumn: FN;
/**
 * Alter an existing table column.
 * @param tableData
 * @returns boolean
 */
export declare const alterBulkColumn: FN;
/**
 * Create a new table column.
 * @param tableData
 * @returns boolean
 */
export declare const createColumn: FN;
/**
 * Create new table columns.
 * @param tableData
 * @returns boolean
 */
export declare const createBulkColumns: FN;
/**
 * Delete a database table.
 * @param tableData
 * @returns boolean
 */
export declare const deleteColumn: FN;
/**
 * Delete database tables.
 * @param tableData
 * @returns boolean
 */
export declare const deleteBulkColumns: FN;
type RenameFN = (tableData: Alter_Table) => Promise<boolean>;
/**
 * Rename an existing table column.
 * @param tableData
 * @returns boolean
 */
export declare const renameColumn: RenameFN;
/**
 * Rename existing table columns.
 * @param tableData
 * @returns boolean
 */
export declare const renameBulkColumns: RenameFN;
export {};
