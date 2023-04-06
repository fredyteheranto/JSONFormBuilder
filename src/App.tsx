import React from 'react'
import logo from './logo.svg'
import FormBuilder from './FormBuilder'
import { schema } from './schema'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  return (
    <div className="flex h-screen flex-col justify-between lg:container lg:mx-auto">
      <header className="flex pb-3 lg:mb-3 lg:border-b w-full items-center justify-between">
        <img src={logo} className={'max-w-[120px]'} alt="logo"/>
        <h1 className={'text-5xl font-bold text-gray-500'}>
          React JSON Form Builder
        </h1>
      </header>
      <main>
        <FormBuilder schema={schema}/>
      </main>
    </div>
  )
}

export default App
