import React from "react";
import { Link } from "react-router-dom";

const HomeService = (props) => {
  const { id, service_name, img, days } = props.service;

  return (
    <Link
      to={`/services-details/${id}`}
      className='w-80 lg:w-96 flex my-8 bg-gradient-to-br from-gray-100 shadow-md px-8 py-4 -mt-6 hover:bg-gray-50 cursor-pointer rounded-bl-3xl rounded-tr-3xl mx-auto hover:text-black'
    >
      <img
        className='w-32 h-32 rounded-full mx-auto my-2 border-2 border-gray-300'
        src={img}
        alt=''
      />
      <div className='flex flex-col justify-center items-center ml-6'>
        <h4 className='text-xl font-semibold py-2 text-center'>
          {service_name}
        </h4>
        <p className='text-red-500'>{days}</p>
      </div>
      <div>
        {/* <i class='fas fa-sticky-note text-xl text-red-400'></i> */}
        <i class='fas fa-thumbtack text-sm text-red-900 transform rotate-45'></i>
      </div>
    </Link>
  );
};

export default HomeService;
