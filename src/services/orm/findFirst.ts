import { prisma } from "./init"

import type { FindFirstOverload } from "~/types/generated/functions"

export const findFirst: FindFirstOverload = async (key, params) => {
  const response = await prisma[key].findFirst(params)

  return response as ReturnType<FindFirstOverload>
}
