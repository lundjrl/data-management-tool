import { Prisma } from "@prisma/client"

const tab = "\t"
const newLine = "\n"

const generateImportHeader = (modelNames: typeof Prisma.ModelName): string => {
  const models = Object.keys(modelNames).join(", ")

  return `import type { ${models} } from '@prisma/client'\n`
}

const generateFindFirst = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type FindFirstOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}FindFirstArgs) => Promise<${model} | null>${newLine}`
  }

  str += `${overloads}}`

  return str
}



const generateFindMany = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type FindManyOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}FindManyArgs) => Promise<${model} | null>${newLine}`
  }

  str += `${overloads}}`

  return str
}

const generateFindMany = (modelName: typeof Prisma.ModelName): string => {
  let str = "export type FindManyOverload = {\n"

  let overloads = ""
  for (const model in modelName) {
    overloads += `${tab}(key: '${model}', params: Prisma.${model}FindManyArgs) => Promise<${model} | null>${newLine}`
  }

  str += `${overloads}}`

  return str
}

export const introspection = () => {
  let resultString = ""

  resultString += generateImportHeader(Prisma.ModelName)
  resultString += newLine
  resultString += generateFindFirst(Prisma.ModelName)
  resultString += newLine
  resultString += generateFindMany(Prisma.ModelName)

  // TODO: After loop, save string types to file for consumption.
  return resultString
}
