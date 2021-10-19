import React from "react";
import logo from "../../../Images/logo-1.png";

const Welcome = () => {
  return (
    <div className='pb-16'>
      <h1 className='text-3xl text-center pt-16 pb-12 font-semibold text-red-500'>
        Welcome to Be Yoo-ga
      </h1>
      <div className='container md:flex justify-between'>
        <div className='w-1/3 mx-auto mb-6 md:w-1/2 flex justify-center items-center'>
          <img src={logo} alt='' />
        </div>

        <div className='md:w-1/2 lg:w-1/2'>
          <h1 className='text-xl pb-4 font-semibold text-black text-justify'>
            Be Yoo-ga
          </h1>
          Be Yoo-ga is a plartform which help people to keep fit and healthy. It
          a ont only offline but also a online based plartform here a lot of
          expart trainers share their experience and teach people to do their
          best. <br />
          Yoga is not a religion, it is a way of living that aims towards a
          healthy mind in a healthy body. <br />
          Man is a physical, mental and spiritual being; yoga helps promote a
          balanced development of all the three. Other forms of physical
          exercises, like aerobics, assure only physical well-being. They have
          little to do with the development of the spiritual or astral body.
          <br />
          The art of practicing yoga helps in controlling an individual’s mind,
          body and soul. It brings together physical and mental disciplines to
          achieve a peaceful body and mind; it helps manage stress and anxiety
          and keeps you relaxing.
        </div>
      </div>
    </div>
  );
};

export default Welcome;
