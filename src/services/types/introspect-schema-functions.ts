import { Prisma } from '@prisma/client'

import { NEW_LINE_CHAR, TAB_CHAR } from '~/utils/constants'

export const ERROR_RESPONSE = '[object | unknown, number]'

const generateImportHeader = (modelNames: typeof Prisma.ModelName): string => {
  const models = Object.keys(modelNames).join(', ')

  let str = `import type { ${models}, Prisma } from '@prisma/client'${NEW_LINE_CHAR}`
  str += `import type { BatchPayload } from '~/types/BatchPayload'${NEW_LINE_CHAR}`

  return str
}

const generateFindFirst = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type FindFirstOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', params: Prisma.${model}FindFirstArgs): Promise<[${model} | null, number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

const generateFindMany = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type FindManyOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', params: Prisma.${model}FindManyArgs): Promise<[${model} | null, number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

const generateCreate = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type CreateOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', params: Prisma.${model}CreateArgs['data']): Promise<[${model}, number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

const generateCreateMany = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type CreateManyOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', params: Prisma.${model}CreateManyInput[]): Promise<[${model}[], number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

const generateUpdate = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type UpdateOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', id: number, params: Prisma.${model}UpdateInput): Promise<[${model}, number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

const generateUpdateMany = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type UpdateManyOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', dataParams: Prisma.${model}UpdateManyArgs['data'], whereParams: Prisma.${model}UpdateManyArgs['where']): Promise<[${model}[], number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

const generateDelete = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type DeleteOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', params: Prisma.${model}DeleteArgs['where']): Promise<[${model}, number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

const generateDeleteMany = (modelName: typeof Prisma.ModelName): string => {
  let str = `export type DeleteManyOverload = {${NEW_LINE_CHAR}`

  let overloads = ''
  for (const model in modelName) {
    overloads += `${TAB_CHAR}(key: '${model}', params: Prisma.${model}DeleteArgs['where']): Promise<[BatchPayload, number] | ${ERROR_RESPONSE}>${NEW_LINE_CHAR}`
  }

  str += `${overloads}}`

  return str
}

/**
 * Generates types for Prisma wrapper functions and returns the result.
 */
export const introspectSchemaFunctions = async () => {
  let resultString = ''

  resultString += generateImportHeader(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateFindFirst(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateFindMany(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateCreate(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateCreateMany(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateUpdate(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateUpdateMany(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateDelete(Prisma.ModelName)
  resultString += NEW_LINE_CHAR
  resultString += NEW_LINE_CHAR
  resultString += generateDeleteMany(Prisma.ModelName)

  const path = './src/types/generated/functions.ts'
  await Bun.write(path, resultString)

  return resultString
}
