interface ApplicationForm {
  stepName: string
  residenceStatusUS: string
  income: number
  ssn: string
  dob: string
}

type ApplicationFormField = keyof ApplicationForm

type ApplicationFormFieldMeta = {
  [key in ApplicationFormField]: {
    type: 'text' | 'dropdown' | 'checkbox' | 'money'
    validate?: (value: any) => string | boolean
    label?: string
  }
}

export const formValues: ApplicationForm = {
  stepName: 'Employment',
  residenceStatusUS: 'E1',
  income: 123123,
  ssn: '325345',
  dob: '',
}

const formMeta: ApplicationFormFieldMeta = {
  stepName: {
    type: 'text',
  },
  residenceStatusUS: {
    type: 'dropdown',
  },
  income: {
    type: 'money',
    validate: (value) => (isNaN(value) ? 'should be number' : true),
  },
  ssn: {
    type: 'text',
  },
  dob: {
    type: 'text',
  },
}

type ErrorResult = {
  [key in ApplicationFormField]?: string
}

export const validate = (formValues: ApplicationForm): ErrorResult =>
  Object.keys(formValues)
    .map((field) => field as ApplicationFormField)
    .reduce((result: ErrorResult, field) => {
      const validate = formMeta[field].validate
      const value = formValues[field]
      const error = validate ? validate(value) : true

      if (error === true) return result

      return {
        ...result,
        [field]: typeof error === 'string' ? error : 'error',
      }
    }, {})
