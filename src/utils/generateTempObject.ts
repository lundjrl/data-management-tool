import { Temp_Schema, Temp_Type } from '~/schemas/Temp_Schema'

export const generateTempObject = () => {
  const x: Temp_Type = {
    name: 'Young J',
    email: 'jrlbidamin@gmail.com',
    url: 'https://lundlabs.xyz',
  }

  return Temp_Schema.parse(x)
}
