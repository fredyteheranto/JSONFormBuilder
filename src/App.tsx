import React, { type FC } from 'react'
import logo from './logo.svg'
import FormBuilder, { type FormField } from './FormBuilder'
import * as yup from 'yup'

const App: FC = () => {
  const fields: FormField[] = [
    {
      component: 'input',
      id: 'first-name',
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      className: 'col-span-12 lg:col-span-6',
      fullWidth: true,
      validation: yup.string().required('First name is required')
    },
    {
      component: 'input',
      id: 'last-name',
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      className: 'col-span-12 lg:col-span-6',
      fullWidth: true,
      validation: yup.string().required('Last name is required')
    },
    {
      component: 'input',
      id: 'street-name',
      name: 'streetName',
      label: 'Street Name',
      type: 'text',
      className: 'col-span-12 lg:col-span-10',
      fullWidth: true,
      validation: yup.string().required('Street name is required')
    },
    {
      component: 'input',
      id: 'street-number',
      name: 'streetNumber',
      label: 'Street Number',
      type: 'text',
      className: 'col-span-12 lg:col-span-2',
      fullWidth: true,
      validation: yup.number().required('Street number is required')
    },
    {
      component: 'input',
      id: 'postal-code',
      name: 'postalCode',
      label: 'Postal Code',
      type: 'text',
      className: 'col-span-12 lg:col-span-4',
      fullWidth: true,
      validation: yup.string().required('Postal code is required')
    },
    {
      component: 'input',
      id: 'city',
      name: 'city',
      label: 'City',
      type: 'text',
      className: 'col-span-12 lg:col-span-8',
      fullWidth: true,
      validation: yup.string().required('City is required')
    },
    {
      component: 'input',
      id: 'country',
      name: 'country',
      label: 'Country',
      type: 'text',
      className: 'col-span-12',
      fullWidth: true,
      validation: yup.string().required('Country is required')
    }
  ]

  const handleSubmit = (values: any): void => {
    console.log(values)
    // handle submit logic here
  }

  return (
    <div className="flex h-screen flex-col justify-between lg:container lg:mx-auto">
      <header className="flex pb-3 lg:mb-3 lg:border-b w-full items-center justify-between">
        <img src={logo} className={'max-w-[120px]'} alt="logo"/>
        <h1 className={'text-5xl font-bold text-gray-500'}>
          React JSON Form Builder
        </h1>
      </header>
      <main>
        <FormBuilder fields={fields} submitForm={handleSubmit} className={'mb-4 grid gap-4 md:grid-cols-12'}/>
      </main>
      <footer className={'text-center py-4'}>
        <p className="text-sm">&copy; 2023 by Alexander Weigelt</p>
        <address>
          Contact <a href="mailto:webdesign@alexander-weigelt.de">webdesign@alexander-weigelt.de</a>
        </address>
      </footer>
    </div>
  )
}

export default App
