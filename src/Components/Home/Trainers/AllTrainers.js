import React from "react";
import trainer1 from "../../../Images/trnr1.jpg";
import trainer2 from "../../../Images/trnr2.jpg";
import trainer3 from "../../../Images/trnr3.jpg";

const AllTrainers = () => {
  return (
    <div className='container md:flex justify-center items-center pb-24'>
      <div className='flex flex-col mx-auto justify-center items-center pb-10 lg:pb-0 lg:w-5/12'>
        <h1 className='text-3xl text-center font-semibold text-red-500'>
          Our Trainers
        </h1>
        <h1>Meet Our Professional Trainers</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='flex flex-col justify-center items-center pb-6 pt-10 bg-red-50 mx-auto rounded-md shadow-md'>
          <div>
            <img className='mx-auto' src={trainer1} width='60%' alt='' />
          </div>
          <div className='flex flex-col justify-center items-center mx-auto pt-3'>
            <h3 className='text-lg font-bold'>Lily Watson</h3>
            <p className='text-red-500'>Senior Trainer</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center pb-6 pt-10 bg-red-50 mx-auto rounded-md shadow-md'>
          <div>
            <img className='mx-auto' src={trainer2} width='60%' alt='' />
          </div>
          <div className='flex flex-col justify-center items-center mx-auto pt-3'>
            <h3 className='text-lg font-bold'>Justic Stepheni</h3>
            <p className='text-red-500'>Fitness Instructor</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center pb-6 pt-10 bg-red-50 mx-auto rounded-md shadow-md'>
          <div>
            <img className='mx-auto' src={trainer3} width='60%' alt='' />
          </div>
          <div className='flex flex-col justify-center items-center mx-auto pt-3'>
            <h3 className='text-lg font-bold'>Daisy Lou</h3>
            <p className='text-red-500'>Junios Trainer.</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center py-3'>
        <i class='fas fa-chevron-circle-right text-4xl mx-auto text-red-500 cursor-pointer'></i>
      </div>
    </div>
  );
};

export default AllTrainers;
