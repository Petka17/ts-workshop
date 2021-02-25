/* eslint-disable @typescript-eslint/no-unused-vars */

// --- typeof --- //
// works ONLY for basic types like string, number
export const normalizeName = (name: string | null): string => {
  if (typeof name === 'string') {
    return name.toLowerCase().replace(/\W/g, '')
  }

  return ''
}

// --- value === null --- //

// export const normalizeName = (name: string | null): string => {
//   if (name === null) return ''

//   return name.toLowerCase().replace(/\W/g, '')
// }

// --- falsy --- //

// export const normalizeName = (name: string | null): string => {
//   if (!name) /* name === null || name === '' */ return ''

//   return name.toLowerCase().replace(/\W/g, '')
// }

// export const normalizeName = (name: string | null): string => {
//   if (name) return name.toLowerCase().replace(/\W/g, '')
//   // name
//   return ''
// }

// --- Array.isArray() --- //

// export const extractError = (value: string[] | string): string => {
//   return Array.isArray(value) ? value[0] : value
// }

// --- instanceof --- //
// for classes only

// class ClientError {
//   code: number
//   text: string

//   constructor(code: number, message: string) {
//     this.code = code
//     this.text = message
//   }
// }

// // interface ClientError {
// //   code: number
// //   text: string
// // }

// export const getErrorMessage = (error: Error | ClientError) => {
//   if (error instanceof ClientError) {
//     return error.text
//   }

//   return error.message
// }

// --- in operator --- //

// interface User {
//   firstName: string
//   lastName: string
// }

// interface Admin {
//   login: string
//   role: string
// }

// export const isAdmin = (user: User | Admin) => {
//   if ('login' in user) {
//     return { user, isAdmin: true }
//   } else {
//     return { user, isAdmin: false }
//   }
// }

// --- Guard functions --- //

// const isString = (value: string | null): value is string => typeof value === 'string'

// export const normalizeName = (name: string | null): string => {
//   if (isString(name)) {
//     return name.toLowerCase().replace(/\W/g, '')
//   }

//   return ''
// }
