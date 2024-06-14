import React from 'react'
import Signup from '../_components/Signup'

function SignUp() {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-blue-400 font-bold'>SignUp Now</h1>
        <h1 className='text-xl font-bold'>We got you covered</h1>
      </div>
      <div className='h-full w-full flex items-center justify-center'>
      <Signup />
      </div>
    </div>
  )
}

export default SignUp