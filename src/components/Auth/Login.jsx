import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email,'is email and',password,'is password')
    setEmail('')
    setPassword('')
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='shadow-2xl px-7 py-15 rounded-lg bg-neutral-900'>
        <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col gap-5'>
          <h1 className='text-4xl flex justify-center'>Welcome Back</h1>
          <p className='text-sm text-gray-400 flex justify-center mb-5'>Sign in to your account!</p>
          <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            className='py-3 px-4 rounded-lg outline-none w-80 text-sm placeholder:text-gray-400 bg-black'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required
            className='py-3 px-4 rounded-lg outline-none w-80 text-sm placeholder:text-gray-400 bg-black' type="Password"
            placeholder='Enter password' />
          <button className='mt-3 bg-blue-500 flex justify-center w-80 py-2 rounded-lg'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login