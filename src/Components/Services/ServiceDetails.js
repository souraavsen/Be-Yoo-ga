import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ServiceDetails = () => {
    return (
      <div>
        <Card className='w-8/12 mx-auto mb-20'>
          <Card.Img variant='top' src='https://i.ibb.co/nwwyzRK/kids.jpg' />
          <Card.Body>
            <Card.Title>Kids Yoga</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam rem facere quis, a non sapiente quia
              animi. Eaque non consequatur delectus, repudiandae nihil adipisci,
              doloribus quisquam praesentium alias iure totam. Tenetur in
              adipisci earum? Dicta perspiciatis quas ea error eius. Autem
              quidem voluptatum recusandae iure quia illum consequuntur
              voluptatem doloribus temporibus molestiae aperiam porro ad quae
              pariatur impedit, enim, quisquam quos laboriosam asperiores dolor
              ut! Esse odit, molestiae iusto quaerat, cumque voluptatem, est
              provident repudiandae a reiciendis nostrum sunt. Delectus odit,
              ipsa consequatur eos consequuntur incidunt unde vel dolorem
              possimus minima laudantium quam eaque esse veniam provident fugit
              veritatis aperiam!
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>Friday, Tuesday</ListGroupItem>
            <ListGroupItem>80</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body className='flex items-center'>
            <button className='px-5 rounded-full py-1 mx-auto bg-red-400 text-white font-semibold'>
              Join
            </button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default ServiceDetails
