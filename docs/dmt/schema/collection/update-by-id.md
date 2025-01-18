# Create A New Record In A Collection

`POST` `/schema/:collection`

### Example:

`/schema/cat`

### <Badge type="tip" text="Success Response:" />

```json
[{
    "id": 1,
    "name": "Casper",
    ... other fields based on your schema
}]
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
