import { Prisma } from '@prisma/client'


export enum Keys {
  'crew' = 'crew',
  'duty' = 'duty',
  'monster' = 'monster',
}

export type ModelName = Uncapitalize<Prisma.ModelName>
