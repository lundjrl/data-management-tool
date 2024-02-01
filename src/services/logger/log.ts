type LoggingTypes = 'log' | 'error' | 'table' | 'warn'
type FN = (type: LoggingTypes, msg: string) => void

// TODO: Set up logger here, just added wrapper for now.
export const log: FN = (type, msg) => {
  switch (type) {
    case 'error':
      console.error(msg)
    case 'log':
      console.log(msg)
    case 'table':
      console.log(msg)
    case 'warn':
      console.log(msg)
  }
}
