import React, { type FC, type ReactElement } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { type NumberSchema, type StringSchema } from 'yup'
import Button from './Button'

interface FormField {
  name: string
  label: string
  type: string
  value?: string | number
  validation?: StringSchema | NumberSchema
}

interface Props {
  fields: FormField[]
  submitForm: (values: any) => void
}

const FormBuilder: FC<Props> = ({ fields, submitForm }) => {
  const initialValues = fields.reduce(
    (valuesObj, field) => ({ ...valuesObj, [field.name]: '' }),
    {}
  )

  const validationSchema = Yup.object().shape(
    fields.reduce(
      (schemaObj, field) => ({
        ...schemaObj,
        [field.name]: field.validation ?? Yup.string()
      }),
      {}
    )
  )

  const onSubmit = (values: any): void => {
    submitForm(values)
  }

  const renderField = (field: FormField): ReactElement | null => {
    switch (field.type) {
      case 'text':
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <Field
              type="text"
              name={field.name}
            />
            <ErrorMessage name={field.name} />
          </div>
        )
      case 'number':
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <Field
              type="number"
              name={field.name}
            />
            <ErrorMessage name={field.name} />
          </div>
        )
      // Add additional field types as needed
      default:
        return null
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          {fields.map((field) => renderField(field))}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormBuilder
