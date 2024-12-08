[Data Management Tool](../../../../index.md) / [schemas/forms/Table\_Column](../index.md) / Table\_Column\_Type

# Type Alias: Table\_Column\_Type

> **Table\_Column\_Type**: `object`

## Type declaration

### hidden?

> `optional` **hidden**: `boolean`

### length?

> `optional` **length**: `number`

### name

> **name**: `string`

### note?

> `optional` **note**: `string`

### nullable?

> `optional` **nullable**: `boolean`

### readonly?

> `optional` **readonly**: `boolean`

### relationship?

> `optional` **relationship**: `object`

#### relationship.foreignKey

> **foreignKey**: `string`

#### relationship.primaryKey

> **primaryKey**: `string`

#### relationship.referencedColumn

> **referencedColumn**: `string`

#### relationship.referencedTable

> **referencedTable**: `string`

#### relationship.relatedTo

> **relatedTo**: `string`

#### relationship.relationshipType

> **relationshipType**: `RelationshipType`

### required?

> `optional` **required**: `boolean`

### type

> **type**: `"SERIAL"` \| `"TEXT"` \| `"VARCHAR"` \| `"TIMESTAMP"`

### unique?

> `optional` **unique**: `boolean`

### validationMessage?

> `optional` **validationMessage**: `string`

## Defined in

src/schemas/forms/Table\_Column.ts:22
