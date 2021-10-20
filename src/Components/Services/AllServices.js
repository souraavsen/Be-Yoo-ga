import React from 'react'
import useServices from '../../Hooks/useServices'
import Service from './Service';

const AllServices = () => {

    const [services]=useServices()

    return (
      <div>
        {/* <img src={serviceheader} className='-mt-16' alt='' /> */}
        <div className='pt-4 pb-16'>
          <h1 className='text-3xl md:text-3xl lg:text-5xl text-center pt-8 pb-12 font-semibold text-red-400'>
            All Services
          </h1>

          <div className='flex flex-col item-center mx-auto'>
            <div className='w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
              {services.map((service) => (
                <Service key={service.id} service={service}></Service>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default AllServices
