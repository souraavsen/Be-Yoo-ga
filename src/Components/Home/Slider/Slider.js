import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
const Slider = () => {
  return (
    <div className='-mt-12'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className='slide1 lg:min-h-screen'>
            <div className='slide1-content min-h-screen pl-8 pr-20 py-20 bg-gray-300 bg-opacity-70 flex flex-col justify-end'>
              <h3 className='text-2xl font-bold text-black pb-4'>
                Connect to your inner flow
              </h3>
              <p className='text-black sm:w-4/12 lg:w-6/12 lg:text-lg'>
                "It's not about being good at something. It's about being good
                to yourself."
                <br />
                <br />
                When it comes to challenges and tackling problems, yoga works
                amazingly. When you get on a yoga mat and begin to practice, you
                are made to deal with everything that comes to you and asked to
                face it gracefully. 
              </p>
              <button className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-full text-white bg-red-400 hover:bg-red-300'>
                Explore
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='slide2 lg:min-h-screen'>
            <div className='slide2-content ml-auto min-h-screen pl-8 pr-20 py-20 bg-gray-300 bg-opacity-70 flex flex-col justify-end'>
              <h3 className='text-2xl font-bold text-black pb-4'>
                Basic Yoga and Meditation for Beginners
              </h3>
              <p className='text-black sm:w-4/12 lg:w-6/12 lg:text-lg'>
                "Yoga is an invaluable gift of India's ancient tradition. This
                tradition is 5000 years old. It embodies the unity of mind and
                body; thought and action; restraint and fulfillment; harmony
                between man and the nature; a holistic approach to health and
                well-being. It is not about exercise but to discover the sense
                of oneness with yourself, the world and the nature."
              </p>
              <button className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-full text-white bg-red-400 hover:bg-red-300'>
                Explore
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='slide3 lg:w-screen lg:min-h-screen'>
            <div className='slide3-content min-h-screen pl-8 pr-20 py-20 bg-gray-300 bg-opacity-70 flex flex-col justify-end items-end lg:pr-48 md:pr-48'>
              <h3 className='text-2xl font-bold text-black pb-4'>
                Develop Life Through Yoga
              </h3>
              <p className='text-black sm:w-4/12 lg:w-6/12 lg:text-lg'>
                The art of practicing yoga helps in controlling an individual's
                mind, body and soul. It brings together physical and mental
                disciplines to achieve a peaceful body and mind; it helps manage
                stress and anxiety and keeps you relaxing."You cannot always
                control what goes on outside. But you can always control what
                goes on inside."
              </p>
              <button className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-full text-white bg-red-400 hover:bg-red-300'>
                Explore
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
