import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signin = () => {
  const {
    setEmail,
    setPassword,
    signInWithEmail,
    googleSignin,
    error,
    setError,
  } = useAuth();
  // const location = useLocation();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  return (
    <div className='flex flex-col h-screen pt-16'>
      <form
        class='flex flex-col w-full max-w-lg mx-auto'
        onSubmit={(e) => {
          signInWithEmail(e);
        }}
      >
        <div className='flex mb-6'>
          <Link className='w-full hover:text-black' to={"/signup"}>
            <div className='py-2 text-center'>Sign Up</div>
          </Link>
          <Link className='w-full hover:text-black' to={"/signin"}>
            <div className='bg-red-300 py-2 text-center'>Sign In</div>
          </Link>
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
              onChange={handleEmail}
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
              onChange={handlePassword}
            />
            <p class='text-xs italic text-red-500 text-center'>{error}</p>
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
      <p className='text-center pt-6'>
        Haven't created account yet?{" "}
        <span className='text-red-500 hover:text-red-500'>
          <Link to={"/signup"}>Sign up</Link>
        </span>
      </p>
      <div className='flex items-center w-full max-w-lg mx-auto py-10'>
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
};

export default Signin;
