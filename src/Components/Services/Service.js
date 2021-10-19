import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css"

const Service = (props) => {
    const { service_name, img, description, days, fees, type } = props.service
    
    console.log(img);
  return (
    <div>
      <Card className='w-80 mx-auto shadow-md'>
        <Card.Img className='card_img' variant='top' src={img} />
        <Card.Body className='flex flex-col items-center'>
          <Card.Title>{service_name}</Card.Title>
          <Card.Text className='text-justify h-28'>
            {description.slice(0, 140)} ...
          </Card.Text>
          <p className='text-red-500'>{days}</p>
          <p className='font-semibold text-red-500'>${fees}/Month</p>
          <p className='text-red-500'>{type}</p>
          <button className='my-6 px-4 rounded-full py-1 bg-red-400 text-white font-semibold'>
            Explore
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
