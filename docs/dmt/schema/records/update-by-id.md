# Update A Database Record

`PATCH` `/schema/:collection/:id`

Updating a record will return the updated record.

### Example:

`/schema/cat/1`


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
