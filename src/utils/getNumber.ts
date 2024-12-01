import { Numberish } from '~/types/NumberIsh'

/**
 * Given a numberish, convert to a number
 */
export const getNumber = (val: Numberish): number => {
  if (typeof val === 'number') return val
  if (typeof val === 'bigint') return Number(val)
  return parseInt(val)
}
