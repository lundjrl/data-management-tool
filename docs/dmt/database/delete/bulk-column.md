# Deleting Multiple Columns

Remove many columns from a database table.

`POST` `/database/delete/bulk/column`

### Body:

```json
{
    "name": "cat",
    "columns": [
        {
           "name": "age",
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
