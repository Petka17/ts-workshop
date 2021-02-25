type Action = 'REQUEST_START' | 'REQUEST_SUCCESS' | 'REQUEST_ERROR'

interface State {
  status: 'idle' | 'loading' | 'success' | 'error'
}

export const reducer = (action: Action, state: State): State => {
  switch (action) {
    case 'REQUEST_START':
      console.log(action)
      return { ...state, status: 'loading' }

    case 'REQUEST_SUCCESS':
      console.log(action)
      return { ...state, status: 'success' }

    case 'REQUEST_ERROR':
      console.log(action)
      return { ...state, status: 'error' }

    // default:
    //   throw new UnreachableError(action, 'Not all actions checked')
  }
}

// class UnreachableError extends Error {
//   constructor(val: never, message: string) {
//     super(`TypeScript thought we could never end up here\n${message}`)
//     console.error(val)
//   }
// }
