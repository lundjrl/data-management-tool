import { Prisma } from "@prisma/client"

const tab = "\t"
const newLine = "\n"

const generateImportHeader = (modelNames: typeof Prisma.ModelName): string => {
  const models = Object.keys(modelNames).join(", ")

  let str = `import type { ${models}, Prisma } from '@prisma/client'\n`
  str += `import type { BatchPayload } from '~/types/BatchPayload'\n`

  return str
}

const generateFindFirst = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type FindFirstOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}FindFirstArgs): Promise<${model} | null>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateFindMany = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type FindManyOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}FindManyArgs): Promise<${model} | null>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateCreate = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type CreateOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}CreateArgs['data']): Promise<${model}>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateCreateMany = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type CreateManyOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}CreateManyInput[]): Promise<${model}[]>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateUpdate = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type UpdateOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', id: number, params: Prisma.${model}UpdateInput): Promise<${model}>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateUpdateMany = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type UpdateManyOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', dataParams: Prisma.${model}UpdateManyArgs['data'], whereParams: Prisma.${model}UpdateManyArgs['where']): Promise<${model}[]>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateDelete = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type DeleteOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}DeleteArgs['where']): Promise<${model}>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateDeleteMany = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type DeleteManyOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}DeleteArgs['where']): Promise<BatchPayload>${newLine}`
  }

  str += `${overloads}}`

  return str
}

/**
 * Generates types for Prisma wrapper functions and returns the result.
 */
export const introspection = async () => {
  let resultString = ""

  resultString += generateImportHeader(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateFindFirst(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateFindMany(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateCreate(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateCreateMany(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateUpdate(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateUpdateMany(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateDelete(Prisma.ModelName)
  resultString += newLine
  resultString += newLine
  resultString += generateDeleteMany(Prisma.ModelName)

  const path = "./src/types/generated/functions.ts"
  await Bun.write(path, resultString)

  return resultString
}
