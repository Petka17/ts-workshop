/* eslint-disable @typescript-eslint/no-unused-vars */

export const normalizeName = (name) => {
  return name.toLowerCase().replace(/\W/g, '')
}

const firstName = ''

normalizeName(firstName)

// -----------------

// export const normalizeName = (name: string | null): string => {
//   if (typeof name === 'string') {
//     return name.toLowerCase().replace(/\W/g, '')
//   }

//   return ''
// }

// const isString = (value: string | null): value is string => typeof value === 'string'
