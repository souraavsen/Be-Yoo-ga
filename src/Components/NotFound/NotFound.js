import React from 'react'
import { Link } from 'react-router-dom'
import notfoundGIF from "../../Images/notfound.gif"

const NotFound = () => {

    // this Component is for the wrong routes
    return (
      <div>
        <div className='flex flex-col items-center w-7/12 pb-16 mx-auto my-10 rounded-md bg-gray-200'>
          <img src={notfoundGIF} alt='' />
          <h1 className='text-lg text-gray-900'>
            404! The Page you are looking for is not found.
          </h1>
          <Link
            to='/'
            className='bg-red-400 py-2 px-5 mt-6 rounded-full text-white font-semibold'
          >
            Go back to Home
          </Link>
        </div>
      </div>
    );
}

export default NotFound
