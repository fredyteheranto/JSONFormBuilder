import React, { createElement, type FC, type FormHTMLAttributes, type ReactNode } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { type NumberSchema, type StringSchema } from 'yup'
import Button from './Button'
import InputText, { type InputTextProps } from './InputText'
import Select, { type SelectProps } from './Select'

export type FormField = {
  component: string
  name: string
  validation: StringSchema | NumberSchema
} & (InputTextProps | SelectProps)

type Props = {
  fields: FormField[]
  submitForm: (values: any) => void
  buttonText?: string
} & FormHTMLAttributes<HTMLFormElement>

const Components: Record<string, any> = {
  input: InputText,
  select: Select,
  button: Button
}

const FormBuilder: FC<Props> = ({ fields, submitForm, buttonText = 'Submit', className, ...props }) => {
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

  const { values, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { setSubmitting, resetForm }) => {
        submitForm(values)
        resetForm({ values: initialValues })
        setSubmitting(false)
      }
    })

  const renderField = (field: FormField): ReactNode => {
    const { component, validation, className, ...props } = field
    if (typeof Components[component] !== 'undefined') {
      return createElement(
        Components[component],
        {
          key: field.id,
          onChange: handleChange,
          value: values[field.name as (keyof typeof values)],
          ...props
        }
        // renderChildren(field.children)
      )
    }
    return createElement(
      () => <div>It seems to be a mismatch in your form configuration schema on ID {field.id}.</div>,
      { key: field.id }
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {fields.map((field, index) => <div key={index} className={field.className}>{renderField(field)}</div>)}
      <Button type={'submit'} variant={'primary'} disabled={isSubmitting}>
        {buttonText}
      </Button>
    </form>
  )
}

export default FormBuilder
