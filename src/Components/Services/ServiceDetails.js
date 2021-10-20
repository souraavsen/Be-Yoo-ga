import React, { useContext, useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router";
import { data } from "./ServiceData";

const ServiceDetails = () => {
  // geting te clicked service id
  const { serviceId } = useParams();
  console.log(serviceId);

  const clickedService = data.find((service) => service.id == serviceId);

  return (
    <div>
      <Card className='w-11/12 lg:w-8/12 mx-auto mb-20'>
        <Card.Img className='w-screen' variant='top' src={clickedService.img} />
        <div className='lg:grid lg:grid-cols-2 justify-center '>
          <Card.Body>
            <Card.Title>{clickedService.service_name}</Card.Title>
            <Card.Text>{clickedService.description}</Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush border-l-2 pt-10'>
            <ListGroupItem>
              Days in Week: <span className="text-red-500 font-medium">{clickedService.days}</span>
            </ListGroupItem>
            <ListGroupItem>
              Fees: <span className="text-red-500 font-medium">${clickedService.fee}/Month</span>
            </ListGroupItem>
            <ListGroupItem><span className="text-red-500 font-medium px-2 py-1 border-2 border-red-500 rounded-full">{clickedService.type}</span></ListGroupItem>
          </ListGroup>
        </div>
        <Card.Body className='flex items-center'>
          <button className='px-5 rounded-full my-10 py-1 mx-auto bg-red-400 text-white font-semibold'>
            Join
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
