interface Values {
  firstName: string
  vipFlag: boolean
}

const getValue = (name: keyof Values, values: Values) => {
  return values[name]
}

// const getValue = <T extends keyof Values>(name: T, values: Values): Values[T] => {
//   return values[name]
// }

export const value = getValue('firstName', { firstName: 'Petr', vipFlag: false })

// -----------

// export const getObjectKeys = <T extends string, K>(obj: { [key in T]?: K }): T[] =>
//   Object.keys(obj).map((key) => key as T)

// // ------------

// export type DeepReadOnlyObject<T> = { readonly [K in keyof T]: DeepReadOnly<T[K]> }

// export type DeepReadOnly<T> = T extends (infer E)[][]
//   ? ReadonlyArray<ReadonlyArray<DeepReadOnlyObject<E>>>
//   : T extends (infer E)[]
//   ? ReadonlyArray<DeepReadOnlyObject<E>>
//   : T extends object
//   ? DeepReadOnlyObject<T>
//   : T

// type ROValues = DeepReadOnly<{
//   firstName: string
//   vipFlag: true
// }>

// const val: ROValues = {
//   firstName: '',
//   vipFlag: true,
// }

// val.vipFlag = false
