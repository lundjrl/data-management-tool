# Renaming Multiple Columns

Change the name of many columns in a database table.

`POST` `/database/rename/bulk/column`

### Body:

```json
{
    "name": "cat",
    "columns": [
        {
           "columnName": "ages",
           "newColumnName": "age"
        },
        {
          "columnName": "coat",
          "newColumnName": "coat_color"
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
