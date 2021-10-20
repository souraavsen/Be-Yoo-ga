import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import HomeService from "./HomeService";

const HomeServices = () => {
  const [services] = useServices();

  // first 6 jobs
  const hilightedServes = services.slice(0, 6);

    return (
      <div className="container pb-16 flex flex-col justify-center items-center">
        <h1 className='text-3xl text-center pt-16 pb-24 font-semibold text-red-500'>
          Our Popular Services
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {hilightedServes.map((service) => (
            <HomeService service={service}></HomeService>
          ))}
            </div>
            <Link to={'/services'} className="px-4 py-2 my-6 rounded-full bg-red-400 text-white font-semibold">Explore More</Link>
      </div>
    );
};

export default HomeServices;
