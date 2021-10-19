import React from 'react'
import blog1 from '../../Images/blog1.jpg'

const Resources = () => {
    return (
      <div>
        {/* Fro Blog */}
        <div>
          <h1 className='text-5xl text-center pt-8 pb-12 font-semibold font_akronim text-red-400'>
            Blogs
          </h1>
          <div className='w-5/6 mx-auto mt-10 mb-16 flex justify-between items-center'>
            <div className='w-5/12'>
              <img src={blog1} alt='' />
            </div>
            <div className='w-1/2'>
              <h2 className='text-2xl font-semibold pb-4'>
                The Potentials of the Third Generation Postwar Contemporary
                Artists in Japan
              </h2>
              <p className='text-green-800 font-semibold pb-2'>
                <i class='far fa-clock'></i> October 5 — Art for Breakfast 2021
              </p>
              <p className='text-justify'>
                Art for Breakfast is delighted to invite an artist, Etsu Egami,
                to our October program. Ms. Egami is in high demand, even in
                Covid ridden 2021, she has been actively exhibiting her works in
                Hong Kong, Paris, New York and Taipei. Viewed as one of the
                leaders in representing the third generation of Japanese postwar
                contemporary artists, she will base her discussion on the
                potentials of this group.
                <br />
                Born in 1994 in the suburbs of Tokyo, Ms. Egami has spent her
                childhood years abroad in the United States and in Europe. After
                completing her BFA/ MFA at the Central Academy of Fine Arts
                (CAFA) in Beijing, she also studied abroad in Germany at
                Karlsruhe University of Arts and Design. She was recently
                nominated for Forbes Asia 30 UNDER 30 2020 amongst other awards.
              </p>
            </div>
          </div>
        </div>

        {/* Fro Tips and Tricks*/}
        <div></div>
      </div>
    );
}

export default Resources
