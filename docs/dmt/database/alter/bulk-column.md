# Altering Multiple Columns

Change the datatype of many columns in a database table.

`POST` `/database/alter/bulk/column`

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
