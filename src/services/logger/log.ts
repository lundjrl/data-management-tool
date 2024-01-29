type LoggingTypes = 'log' | 'error' | 'table' | 'warn'
type FN = (type: LoggingTypes, msg: string) => void

// TODO: Set up logger here, just added wrapper for now.
export const log: FN = (type, msg) => {
  console[type](msg)
}
