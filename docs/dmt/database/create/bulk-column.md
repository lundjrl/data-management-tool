# Creating Multiple Columns

Create multiple new columns in a table.

`POST` `/database/create/bulk/column`

Column Data Types: `INT | SERIAL | SMALLINT | TEXT | UUID | VARCHAR | TIMESTAMP | BOOLEAN | JSON`

### Body:

```json
{
    "name": "cat",
     "columns": [{
        "name": "id",
        "type": "VARCHAR",
        "required": true,
        "unique": true
    },
    {
        "name": "name",
        "type": "VARCHAR",
        "length": 50,
        "nullable": false,
        "unique": false,
        "required": true
    },
    ]
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
