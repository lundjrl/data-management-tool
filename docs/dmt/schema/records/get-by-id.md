# Get A Database Record

`GET` `/schema/:collection/:id`

Retrieving a record will return the record.

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
