import { Temp_Schema } from '../schemas/Temp_Schema'

import type { Temp_Type } from '../schemas/Temp_Schema'

/**
 * TODO: Change to return types from db schema
 */
export const returnSchema = () => {
  const obj: Temp_Type = {
    name: 'Young J',
    email: 'jrlbidamin@gmail.com',
    url: 'https://lundlabs.xyz',
  }
  return { data: obj, schema: Temp_Schema }
}
