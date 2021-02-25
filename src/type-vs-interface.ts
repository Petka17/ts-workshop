type TUser = {
  firstName: string
  dob: string
  lastName: string
}

interface IUser {
  firstName: string
  dob: string
}

export class User implements IUser {
  firstName: string
  dob: string

  constructor(firstName: string, dob: string) {
    this.firstName = firstName
    this.dob = dob
  }
}

// ------------------

type TSomeFn = (value: number) => void

interface ISomeFn {
  (value: number): void
}

export const someFn: TSomeFn = (val) => {
  console.log(val)
}

// -----------------

type ErrorList = string[]

interface IErrorList {
  [index: number]: string
}

// ----------------------

// there is no unions for interfaces

// ----------------------

// --- Interface extensibility --- //

interface JQuery {
  append(): JQuery
}

interface JQuery {
  showInternals(): void
}

export const makePage = ($: JQuery) => {
  $.append().showInternals()
}

// --------------------------

type Fields = 'firstName' | 'lastName' | 'role'

type UserMeta = {
  [key in Fields]: {
    type: 'text' | 'dropdown' | 'checkbox'
    label?: string
  }
}

export const userMeta: UserMeta = {
  firstName: {
    type: 'text',
  },
  lastName: {
    type: 'text',
    label: 'Last Name *',
  },
  role: {
    type: 'dropdown',
  },
}

// ----------------

interface ApplicationForm {
  stepName: string
  residenceStatusUS: string
  income: number
}

export type ApplicationFormPartial = Partial<ApplicationForm>

export const tt: ApplicationFormPartial = {}
