# Delete A Collection

`DELETE` `/schema/:collection`

### Example:

`/schema/cat`

### <Badge type="tip" text="Success Response:" />

```json
[{
    "status": 200,
    "data": true
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
