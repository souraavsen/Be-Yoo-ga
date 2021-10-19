import { useState, useEffect } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    
    console.log(services);
  return [services, setServices];
};

export default useServices;
