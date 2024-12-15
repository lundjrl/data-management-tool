import {Prisma} from '@prisma/client'

import { NEW_LINE_CHAR } from '~/utils/constants'

const generateImportHeader = (modelNames: typeof Prisma.ModelName): string => {
  const models = Object.keys(modelNames).join(", ")

  return `import type { ${models}, Prisma } from '@prisma/client'${NEW_LINE_CHAR}`
}

export const introspectRoutes = async () => {
let resultString = ""

resultString = generateImportHeader(Prisma.ModelName)
resultString += NEW_LINE_CHAR
resultString += NEW_LINE_CHAR

const path = "./src/types/generated/schema-routes.ts"
await Bun.write(path, resultString)

return resultString
}
