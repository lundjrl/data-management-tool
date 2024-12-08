[Data Management Tool](../../../../index.md) / [services/orm/init](../index.md) / prisma

# Variable: prisma

> `const` **prisma**: `PrismaClient`\<`object`, `never`, `DefaultArgs`\>

## Type declaration

### datasources?

> `optional` **datasources**: `Datasources`

Overwrites the datasource url from your schema.prisma file

### datasourceUrl?

> `optional` **datasourceUrl**: `string`

Overwrites the datasource url from your schema.prisma file

### errorFormat?

> `optional` **errorFormat**: `ErrorFormat`

#### Default

```ts
"colorless"
```

### log?

> `optional` **log**: (`LogLevel` \| `LogDefinition`)[]

#### Example

```
// Defaults to stdout
log: ['query', 'info', 'warn', 'error']

// Emit as events
log: [
  { emit: 'stdout', level: 'query' },
  { emit: 'stdout', level: 'info' },
  { emit: 'stdout', level: 'warn' }
  { emit: 'stdout', level: 'error' }
]
```
Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).

### transactionOptions?

> `optional` **transactionOptions**: `object`

The default values for transactionOptions
maxWait ?= 2000
timeout ?= 5000

#### transactionOptions.isolationLevel?

> `optional` **isolationLevel**: `TransactionIsolationLevel`

#### transactionOptions.maxWait?

> `optional` **maxWait**: `number`

#### transactionOptions.timeout?

> `optional` **timeout**: `number`

## Defined in

src/services/orm/init.ts:5
