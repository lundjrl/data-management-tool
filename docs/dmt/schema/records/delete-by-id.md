# Delete A Database Record

`DELETE` `/schema/:collection/:id`

Deleting a record will return the record that was deleted.

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
