# Creating Columns

Create a new column for a table.

`POST` `/database/create/column`

Column Data Types: `INT | SERIAL | SMALLINT | TEXT | UUID | VARCHAR | TIMESTAMP | BOOLEAN | JSON`

### Body:

```json
{
  "name": "cat",
  "columns": [
    {
      "name": "age",
      "type": "INT"
    }
  ]
}
```

#### With a FK o2o relationship
```json
{
  "name": "foreign_relation_column",
  "type": "VARCHAR",
  "nullable": true,
  "unique": false,
  "required": true,
  "relationship": {
    "foreignKeyName": "foreign_relation_column_fk",
    "referencedTable": "another_table",
    "referencedColumn": "table_pk_id_name",
    "relationshipType": "o2o"
  }
}
```

### <Badge type="tip" text="Success Response:" />

```json
{
  "status": 200,
  "data": true
}
```

### <Badge type="danger" text="Error Response:" />

```json
{
  "status": 400,
  "data": {
    "issues": []
  }
}
```
