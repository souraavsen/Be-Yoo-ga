import React from "react";

const Events = () => {
  return (
    <div className='my-10'>
      {/* ongoinging Event section  */}
      <div>
        <h2 className='text-xl md:text-3xl lg:text-5xl text-center pt-8 pb-4 font-semibold text-red-400'>
          Ongoing Events
        </h2>
        <div className='md:w-1/2 lg:w-1/2 mx-auto'>
          <div className='flex bg-green-50 p-4 rounded-lg shadow-md my-4'>
            <div>
              <i class='fas fa-bell mr-4 text-green-800'></i>
            </div>
            <div className='flex flex-col'>
              <div className='lg:text-xl text-black font-semibold'>
                Yoga for People Who Don't Usually Do Yoga
              </div>
              <p className='text-black font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt lg:text-lg'></i> Tue, Oct 19, 2021
                7:30 PM +06
              </p>
            </div>
          </div>

          <div className='flex bg-green-50 p-4 rounded-lg shadow-md my-4'>
            <div>
              <i class='fas fa-bell mr-4 text-green-800'></i>
            </div>
            <div className='flex flex-col'>
              <div className='lg:text-xl text-black font-semibold'>
                Chair Yoga with Kate Alesio
              </div>
              <p className='text-black font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt lg:text-lg'></i> Tue, Oct 19, 2021
                10:00 PM +06
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcomming Event section  */}
      <div>
        <h2 className='text-xl md:text-3xl lg:text-5xl text-center pt-6 pb-4 font-semibold text-red-400'>
          Upcomming Events
        </h2>
        <div className='md:w-1/2 lg:w-1/2 mx-auto'>
          <div className='flex bg-red-100 p-4 rounded-lg shadow-md my-4'>
            <div>
              <i class='fas fa-bell mr-4 text-red-700'></i>
            </div>
            <div className='flex flex-col'>
              <div className='lg:text-xl text-black font-semibold'>
                FITNESS: Lunchtime Yoga
              </div>
              <p className='text-black font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt lg:text-lg'></i> Fri, Oct 22, 2021
                11:00 PM +06
              </p>
            </div>
          </div>

          <div className='flex bg-red-100 p-4 rounded-lg shadow-md my-4'>
            <div>
              <i class='fas fa-bell mr-4 text-red-700'></i>
            </div>
            <div className='flex flex-col'>
              <div className='lg:text-xl text-black font-semibold'>
                Bal` ance - The Online Yoga Edition
              </div>
              <p className='text-black font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt lg:text-lg'></i> Sat, Oct 23, 2021
                6:00 PM +06
              </p>
            </div>
          </div>

          <div className='flex bg-red-100 p-4 rounded-lg shadow-md my-4'>
            <div>
              <i class='fas fa-bell mr-4 text-red-700'></i>
            </div>
            <div className='flex flex-col'>
              <div className='lg:text-xl text-black font-semibold'>
                Understanding Patanjali Yoga Sutras
              </div>
              <p className='text-black font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt lg:text-lg'></i> Mon, Nov 1, 2021
                6:00 PM +06 +
              </p>
            </div>
          </div>

          <div className='flex bg-red-100 p-4 rounded-lg shadow-md my-4'>
            <div>
              <i class='fas fa-bell mr-4 text-red-700'></i>
            </div>
            <div className='flex flex-col'>
              <div className='lg:text-xl text-black font-semibold'>
                Sunday Morning Yoga (all levels)
              </div>
              <p className='text-black font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt lg:text-lg'></i> Sun, Oct 24, 2021
                9:00 PM +06
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
