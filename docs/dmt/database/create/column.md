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
