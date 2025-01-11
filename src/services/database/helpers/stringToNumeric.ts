import type { Data_Type_Type } from "~/schemas/forms/Data_Types"

export const adjustQueryRestriction = (col: string, type: Data_Type_Type) => {
  switch (type) {
    case 'INT': return `USING (trim(${col})::integer)`
    default: return ''
  }
}
