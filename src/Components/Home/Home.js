import React from "react";
import HomeServices from "./HomeServices/HomeServices";
import Slider from "./Slider/Slider";
import Welcome from "./Welcome/Welcome";

const Home = () => {
  return <div>
    <Slider></Slider>
    <Welcome></Welcome>
    <HomeServices></HomeServices>
  </div>;
};

export default Home;
