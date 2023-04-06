import React, { type FC } from 'react'
import logo from './logo.svg'
import FormBuilder from './FormBuilder'
import * as yup from 'yup'

const App: FC = () => {
  const fields = [
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
        <FormBuilder fields={fields} submitForm={handleSubmit}/>
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
