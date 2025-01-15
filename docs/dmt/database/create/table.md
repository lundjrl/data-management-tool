# Creating Tables

Create a new database table.

URL: `/database/create/table`

Method: `POST`

Column Data Types: `SERIAL | TEXT | VARCHAR | TIMESTAMP`

#### Good to know:
You need to set the unique field on a column in order for the system to recognize your new table.

### Body:

```json
{
    "name": "cat",
    "columns": [{
        "name": "id",
        "type": "VARCHAR",
        "required": true,
        "unique": true
    },
    {
        "name": "name",
        "type": "VARCHAR",
        "length": 50,
        "nullable": false,
        "unique": false,
        "required": true
    },
     {
        "name": "age",
        "type": "VARCHAR",
        "nullable": true,
        "unique": false,
        "required": true
    },
     {
        "name": "coat_color",
        "type": "VARCHAR",
        "length": 255,
        "nullable": false,
        "unique": false,
        "required": true
    }]
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
