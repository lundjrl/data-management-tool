# Deleting Tables

Delete a database table.

URL: `/database/delete/table`

Method: `POST`

### Body:

```json
{
    "name": "cat",
}
```

### Success Response:

```json
{
    "status": 200,
    "data": "complete true"
}
```

### Error Response:

```json
{
    "status": 400,
    "data": {
      "issues": []
    }
}
```
