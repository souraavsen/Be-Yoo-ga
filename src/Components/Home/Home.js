import React from "react";
import HomeServices from "./HomeServices/HomeServices";
import Slider from "./Slider/Slider";
import AllTrainers from "./Trainers/AllTrainers";
import Welcome from "./Welcome/Welcome";

const Home = () => {
  return <div>
    <Slider></Slider>
    <Welcome></Welcome>
    <HomeServices></HomeServices>
    <AllTrainers></AllTrainers>
  </div>;
};

export default Home;
