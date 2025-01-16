# Get JSON Schema Of A Table

Get a JSON object of a table's schema.

URL: `/database/json/schema/:collection`

Params:
- `collection` - name of table you want to read.

Method: `GET`

#### <Badge type="tip" text="This is still a work in progress!" />

### Body:

```json
{}
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
