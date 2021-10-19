import React from "react";

const HomeService = (props) => {
  const { service_name, img, days } = props.service;

  return (
    <div className='w-80 lg:w-96 flex my-8 bg-gradient-to-br from-red-50 shadow-md px-8 py-4 -mt-6 hover:bg-gray-50 cursor-pointer rounded-sm mx-auto'>
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
    </div>
  );
};

export default HomeService;
