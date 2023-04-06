import * as yup from 'yup'

export const schema = {
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      validation: yup.string().required('First name is required')
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      validation: yup.string().required('Last name is required')
    },
    {
      name: 'streetName',
      label: 'Street Name',
      type: 'text',
      validation: yup.string().required('Street name is required')
    },
    {
      name: 'streetNumber',
      label: 'Street Number',
      type: 'number',
      validation: yup.number().required('Street number is required')
    },
    {
      name: 'postalCode',
      label: 'Postal Code',
      type: 'text',
      validation: yup.string().required('Postal code is required')
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      validation: yup.string().required('City is required')
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      validation: yup.string().required('Country is required')
    }
  ]
}
