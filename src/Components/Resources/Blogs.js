import React from 'react'
import { Card } from "react-bootstrap";
import blog1 from "../../Images/blog1.jpg";
import blog2 from "../../Images/blog-3.jpg";
import blog3 from "../../Images/blog4.jpg";

const Blogs = () => {
    return (
      <div>
        {/* Fro Blog */}
        <div className='pb-12'>
          <div>
            <h1 className='text-5xl text-center pt-8 pb-12 font-semibold font_akronim text-red-400'>
              Blogs
            </h1>
            <div className='w-5/6 mx-auto mt-10 mb-16 lg:flex justify-between items-center'>
              <div className='mb-12 lg:w-5/12 lg:mb-0'>
                <img src={blog1} alt='' />
              </div>
              <div className='lg:w-1/2'>
                <h2 className='text-2xl font-semibold pb-4'>
                  How to boost your eco-friendly yoga practive
                </h2>

                <p className='text-justify'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.
                  <br />
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English. The
                  feeling of calmness the yoga brings will soon make you return
                  to your mat over and over. Yoga is addictive. <br /> By the
                  way, don’t be hard on yourself if you skip a day. If you skip
                  just a single practice, it doesn’t mean that you failed the
                  whole yoga-everyday experiment. <br /> If you get bored
                  somewhere along the way, try to enrich your yoga experience.
                  Even if you practice yoga on your own, visit a studio once in
                  a while to taste the atmosphere and to try a new yoga style.
                </p>
              </div>
            </div>
          </div>

          <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='mx-auto shadow-md cursor-pointer my-8'>
              <Card className='w-80 h-96'>
                <Card.Img className='h-44' variant='top' src={blog1} />
                <Card.Body>
                  <Card.Title className='h-20'>
                    A weekly therapeutic yoga class focused on balancing the
                    nervous system.
                  </Card.Title>
                  <Card.Text className='truncate'>
                    Have you heard about the benefits of yoga but aren't
                    comfortable rolling up into a yoga studio?
                  </Card.Text>
                  <button className='text-red-500 py-2'>Read More</button>
                </Card.Body>
              </Card>
            </div>

            <div className='mx-auto shadow-md cursor-pointer my-8'>
              <Card className='w-80 h-96'>
                <Card.Img className='h-44' variant='top' src={blog2} />
                <Card.Body>
                  <Card.Title className='h-20'>
                    Ultimate Pull-Up Program & Ultimate Push-Up Program
                  </Card.Title>
                  <Card.Text className='truncate'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button className='text-red-500 py-2'>Read More</button>
                </Card.Body>
              </Card>
            </div>

            <div className='mx-auto shadow-md cursor-pointer my-8'>
              <Card className='w-80 h-96'>
                <Card.Img className='h-44' variant='top' src={blog3} />
                <Card.Body>
                  <Card.Title>
                    FIND PEACE WITH KUNDALINI YOGA AND MEDITATION
                  </Card.Title>
                  <Card.Text className='truncate'>
                    Every time we place the body in an asana (pose), we should
                    be focusing on that pose. By focusing the mind on the body
                    while in a pose, we experience the asana in full.
                  </Card.Text>
                  <button className='text-red-500 py-2'>Read More</button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blogs
