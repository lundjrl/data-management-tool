/**
 * Standardize the response format.
 */
export const response = (data: unknown, status: number) => ({
  data,
  status,
})
