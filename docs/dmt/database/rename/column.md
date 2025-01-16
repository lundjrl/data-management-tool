# Renaming Columns

Change the name of a column in a database table.

`POST` `/database/rename/column`

### Body:

```json
{
    "name": "cat",
    "columns": [
        {
           "columnName": "ages",
           "newColumnName": "age"
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
