import React from 'react'
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Signin = () => {
  const { googleSignin} = useAuth()
    return (
      <div className='flex flex-col h-screen pt-28  '>
        <form class='flex flex-col w-full max-w-lg mx-auto'>
          <div className='flex mb-6'>
            <div className='w-full py-2 text-center'>
              <Link className='hover:text-black' to={"/signup"}>
                Sign Up
              </Link>
            </div>
            <div className='w-full bg-red-300 py-2 text-center'>
              <Link className='hover:text-black' to={"/signin"}>
                Sign In
              </Link>
            </div>
          </div>

          <div className='-mx-3 mb-6'>
            <div class='w-full px-3'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                E-mail
              </label>
              <input
                class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='emial'
                required
                placeholder='example@example.com'
              />
            </div>
          </div>

          <div class='flex flex-wrap -mx-3 mb-6'>
            <div class='w-full px-3'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-password'
              >
                Password
              </label>
              <input
                class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='password'
                required
                placeholder='password'
              />
            </div>
          </div>
          <div className='mx-auto'>
            <button
              className='px-8 py-2 text-white font-semibold mt-8 bg-red-400 rounded-full hover:bg-red-300'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </form>
        <div className='flex items-center w-full max-w-lg mx-auto mt-10 py-10'>
          {/* For Signup with google */}
          <button
            className='w-1/3 py-2 text-white font-semibold bg-red-400 rounded-full mx-auto hover:bg-red-300'
            onClick={googleSignin}
          >
            <i class='fab fa-google'></i> Google
          </button>
          {/* For Signup with facebook  */}
          <button className=' w-1/3 py-2 text-white font-semibold bg-red-400 rounded-full mx-auto hover:bg-red-300'>
            <i class='fab fa-facebook-f'></i> Facebook
          </button>
          <button></button>
        </div>
      </div>
    );
}

export default Signin
