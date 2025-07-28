import React from 'react';
import { Link } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col p-3 max-w-3xl mx-auto md:flex-row md:items-center gap-6'>
        {/* Left side */}
        <div className='md:w-1/2'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Saksham's</span>
            <span className='text-black'>Blog</span>
          </Link>
          <p className='text-sm mt-2'>This is a blog app made by Saksham Shakya.</p>
        </div>

        {/* Right side (Form) */}
        <div className='md:w-1/2'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label  value="Your username" />
              <TextInput
                id="username"
                type="text"
                placeholder="Enter your username"
                className="[&>input]:!bg-white [&>input]:!text-black"
                style={{ background: "white", color: "black" }}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" value="Your email" />
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                className="[&>input]:!bg-white [&>input]:!text-black"
                style={{ background: "white", color: "black" }}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" value="Your password" />
              <TextInput
                id="password"
                type="password"
                placeholder="password"
                className="[&>input]:!bg-white [&>input]:!text-black"
                style={{ background: "white", color: "black" }}
                required
              />
            </div>
            
            <Button type="submit"  className="mt-4 bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl">
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5 align-items-center justify-center'>
            <span>Have an Account? </span>
            <Link to="/sign-in" className='text-blue-500 hover:underline'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;