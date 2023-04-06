import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'
import Button from './Button'

const FormBuilder = ({ schema }) => {
  const validationSchema = yup.object().shape(
    schema.fields.reduce((schemaObj, field) => {
      schemaObj[field.name] = field.validation || yup.string()
      return schemaObj
    }, {})
  )

  const initialValues = schema.fields.reduce((valuesObj, field) => {
    valuesObj[field.name] = field.value || ''
    return valuesObj
  }, {})

  const onSubmit = (values) => {
    console.log(values)
  }

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return (
          <div>
            <label>{field.label}</label>
            <Field
              type="text"
              name={field.name}
            />
            <ErrorMessage name={field.name}/>
          </div>
        )
      case 'number':
        return (
          <div>
            <label>{field.label}</label>
            <Field
              type="number"
              name={field.name}
            />
            <ErrorMessage name={field.name}/>
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
      {({ errors }) => (
        <Form>
          {schema.fields.map((field) => renderField(field))}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormBuilder
