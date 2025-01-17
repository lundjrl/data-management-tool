<!-- Introspect, introspect schema functions, introspect routes -->
# Introspect The Database Schema

Generate types for the API endpoints based on your database schema.

`GET` `/orm/introspect`

### <Badge type="tip" text="Success Response:" />

```json
{
    "status": 200,
    "data": "Introspection complete. Please view the types under src/types/generated"
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

### Specific Generations

You can also generate a types file to add to your front-end app.
Calling more specific orm endpoints will generate the types for your database schema and return the types file as text.

`GET` `/orm/introspect/fn`

### <Badge type="tip" text="Success Response:" />

```json
import type { cat } from '@prisma/client'
import type { BatchPayload } from '~/types/BatchPayload'

export type FindFirstOverload = {
  (key: 'cat', params: Prisma.catFindFirstArgs): Promise<cat | null>
  ...
}
...
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


`GET` `/orm/introspect/routes`

### <Badge type="tip" text="Success Response:" />

```json
import type { cat } from '@prisma/client'
...
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
