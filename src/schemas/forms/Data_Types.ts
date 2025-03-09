import { z } from 'zod'

export const Data_Type_Schema = z.union([
  // Numeric
  z.literal('INT'),
  z.literal('SERIAL'),
  z.literal('SMALLINT'),

  // Strings
  z.literal('TEXT'),
  z.literal('UUID'),
  z.literal('VARCHAR'),

  // Dates
  z.literal('TIMESTAMP'),

  // Other
  z.literal('BOOLEAN'),
  z.literal('JSON'),
])

export type Data_Type_Type = z.infer<typeof Data_Type_Schema>
