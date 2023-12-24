import { Temp_Schema, Temp_Type } from '../schemas/Temp_Schema';

export const returnSchema = () => {
  const obj: Temp_Type = {
    name: 'Young J',
    email: 'jrlbidamin@gmail.com',
    url: 'https://lundlabs.xyz',
  };
  return { data: obj, schema: Temp_Schema };
};
