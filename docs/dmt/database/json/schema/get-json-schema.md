# Get JSON Schema Of Your Database

Get a JSON object of a table's schema.

URL: `/database/json/schema/:collection`

Method: `GET`

#### <Badge type="tip" text="This is still a work in progress!" />

### Body:

```json
{}
```

### Success Response:

```json
{
    "name": "cat",
    "dbName": null,
    "schema": null,
    "fields": [
        {
            "name": "id",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": true,
            "isReadOnly": false,
            "hasDefaultValue": true,
            "type": "Int",
            "nativeType": null,
            "default": {
                "name": "autoincrement",
                "args": []
            },
            "isGenerated": false,
            "isUpdatedAt": false
        },
        {
            "name": "name",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "hasDefaultValue": false,
            "type": "String",
            "nativeType": [
                "VarChar",
                [
                    "50"
                ]
            ],
            "isGenerated": false,
            "isUpdatedAt": false
        },
        {
            "name": "age",
            "kind": "scalar",
            "isList": false,
            "isRequired": false,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "hasDefaultValue": false,
            "type": "String",
            "nativeType": [
                "VarChar",
                []
            ],
            "isGenerated": false,
            "isUpdatedAt": false
        },
        {
            "name": "coat_color",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "hasDefaultValue": false,
            "type": "String",
            "nativeType": [
                "VarChar",
                [
                    "255"
                ]
            ],
            "isGenerated": false,
            "isUpdatedAt": false
        }
    ],
    "primaryKey": null,
    "uniqueFields": [],
    "uniqueIndexes": [],
    "isGenerated": false
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
