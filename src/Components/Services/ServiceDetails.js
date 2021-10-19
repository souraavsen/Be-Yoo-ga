import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";

const ServiceDetails = () => {

  const [service, setService] = useState([]);


  // geting te clicked service id
  const { serviceId } = useParams();

  // const [services] = useServices();
  
  useEffect(() => {
    fetch("./Data.json")
    .then((res) => res.json())
    .then((data) => setService(data));
  }, []);
  
  console.log(service);
  // Finding the selected service according to service's id
  const clickedService = service.filter((service) => service.id === serviceId);
  console.log(clickedService);

  return (
    <div>
      <Card className='w-8/12 mx-auto mb-20'>
        <Card.Img variant='top' src='https://i.ibb.co/nwwyzRK/kids.jpg' />
        <Card.Body>
          <Card.Title>{clickedService.service_name}</Card.Title>
          <Card.Text>{clickedService.description}</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Days in Week: {clickedService.days}</ListGroupItem>
          <ListGroupItem>Fees: ${clickedService.fee}/Month</ListGroupItem>
          <ListGroupItem>{clickedService.type}</ListGroupItem>
        </ListGroup>
        <Card.Body className='flex items-center'>
          <button className='px-5 rounded-full py-1 mx-auto bg-red-400 text-white font-semibold'>
            Join
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
