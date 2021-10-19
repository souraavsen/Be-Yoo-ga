import React from 'react'
import tips1 from "../../Images/tips1.jpeg";
import tips2 from "../../Images/tips2.jpeg";

const TipsAndTricks = () => {
    return (
      <div>
        <h1 className='text-5xl text-center pt-8 pb-12 font-semibold text-red-400'>
          Tips & Tricks
        </h1>
        <div>
          <div className='w-5/6 mx-auto px-6 py-4 rounded-md shadow-md mt-10 mb-16 bg-red-100 lg:flex justify-between items-center'>
            <div className='mb-12 lg:w-5/12 lg:mb-0'>
              <img src={tips1} alt='' />
            </div>
            <div className='lg:w-1/2'>
              <h2 className='text-2xl font-semibold pb-4'>
                Respect Your Body’s Inner Wisdom And Limitations
              </h2>

              <p className='text-justify'>
                Don’t push yourself to do anything that feels dangerous or wrong
                for you. This is ‘Ahimsa’, the practice of non-harm, which is
                essential to skilful and beneficial practice of yoga. Be aware
                of contraindications relevant to your specific circumstances:
                for example some poses are not to be practiced during early
                pregnancy, with certain injuries, or during menstruation,
                whereas other poses may be very helpful.
              </p>
            </div>
          </div>
          <div className='w-5/6 mx-auto px-6 py-4 rounded-md shadow-md mt-10 mb-16 bg-red-100 lg:flex justify-between items-center'>
            <div className='pb-10 lg:w-1/2 lg:pb-0'>
              <h2 className='text-2xl font-semibold pb-4'>
                Respect Your Body’s Inner Wisdom And Limitations
              </h2>

              <p className='text-justify'>
                Particularly at the beginning, it will be difficult to
                accomplish every pose covered in your class. If you find that
                you’re having trouble, your instructor can help you find ways to
                make it easier on your body. Don’t be afraid to use blocks,
                straps, or blankets to make the practice easier for your body.
              </p>
              <h2 className='text-2xl font-semibold py-4'>
                Use a clean non-slip mat
              </h2>

              <p className='text-justify'>
                A yoga mat allows you to work through your routine without
                worrying about slipping in the poses. It also provides padding
                for your joints, especially your wrists and knees. Make sure you
                choose a mat with enough stickiness or grip to hold your hands
                and feet in place. Also, clean your mat regularly to maintain
                its traction and prevent unpleasant smells.
              </p>
            </div>
            <div className='mb-12 lg:w-5/12 lg:mb-0'>
              <img src={tips2} alt='' />
            </div>
          </div>
        </div>
      </div>
    );
}

export default TipsAndTricks
