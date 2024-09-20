import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>

      <div className="grid sm:grid-cols-7 grid-rows-1 gap-4">
        <div
         className="px-8 mt-12 col-span-4 sm:mx-auto sm:mt-0 sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center h-custom-h">
          <div>
            <span className="text-3xl font-bold">
              Create a new account
            </span>
          </div>
          <div
            className='mt-5 flex flex-col gap-y-4'>
            <input type="text" name="" id="username" placeholder='Username'
              className='text-md rounded-sm p-2 focus:outline-none border border-gray-700' />

            <input type="text" name="" id="email" placeholder='Email'
              className='text-md rounded-sm p-2 focus:outline-none border border-gray-700' />

            <input type="text" name="" id="email" placeholder='Password'
              className='text-md rounded-sm p-2 focus:outline-none border border-gray-700' />

            <button
              className="text-md rounded-sm bg-blue-500 text-white  p-2">
              Sign Up
            </button>
          </div>
          <Link to="/signin">
            <span
              className="mt-2 text-xs text-blue-900">
              Already have an account? Sign In
            </span>
          </Link>
        </div>
        <div
          className='col-span-3  items-center justify-center pb-10 hidden sm:flex '>
          <img src="/public/images/signup.jpg" alt=""
            className="h-full w-full rounded-sm object-cover  " />

     
        </div>
      </div>

    </>
  )
}
