type StringOrNull = string | null

type TransforFn = (name: StringOrNull) => string

export const normalizeName: TransforFn = (name) => {
  if (name === null) return ''

  return name.toLowerCase().replace(/\W/g, '')
}

export const normName = normalizeName('TR23')

// -----------

// type StringOrNull = string | null

// type TransformFn = (name: StringOrNull) => string

// export const normalizeName: TransformFn = (name) => {
//   if (name === null) return ''

//   return name.toLowerCase().replace(/\W/g, '')
// }

// export const normName = normalizeName('TR23')

// ---------

// export type User = {
//   firstName: string
//   email: string
// }

// export type Admin = User & {
//   numberOfTickets: number | null
//   role: string // there are a better way to define such fields
// }

// export const admin: Admin = {
//   firstName: 'Gilad',
//   email: 'gilad@jaspercard.com',
//   numberOfTickets: null,
//   role: 'validator',
// }
