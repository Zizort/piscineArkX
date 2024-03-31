import { Button, FloatingLabel, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left logo*/}
        <div className='flex-1'>
        <Link to='/' 
        className='font-bold dark:text-white text-4xl'>
          blog
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >stack</span>
        </Link>
        <p className='text-sm mt-5'>
          welcome to your tech blog.
        </p>
        </div>
        {/*right*/}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Enter Username'/>
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Enter Email'/>
              <TextInput type='text' placeholder='EX: user@email.com' id='username' />
            </div>
            <div>
              <Label value='Enter Password'/>
              <TextInput type='text' placeholder='Password' id='username' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
