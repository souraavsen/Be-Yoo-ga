import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../../Images/logo-1.png";

const NavbarSection = () => {
  return (
    <div className='sticky top-0 z-50'>
      <Navbar bg='light' expand='lg'>
        <Container className='mx-20'>
          <div className='flex justify-center items-center'>
            <img src={logo} className='mr-2' width='25px' alt='' />
            <Navbar.Brand className='font-semibold text-2xl' href='/'>
              Be Better
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                className='mr-2 text-black border-b-2 border-transparent hover:border-red-400'
                href='/'
              >
                Home
              </Nav.Link>
              <Nav.Link className='mr-2 text-black border-b-2 border-transparent hover:border-red-400' href='/about'>
                About
              </Nav.Link>
              <Nav.Link className='mr-2 text-black border-b-2 border-transparent hover:border-red-400' href='#link'>
                Services
              </Nav.Link>
              <Nav.Link
                className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                href='/signup'
              >
                Sign up
              </Nav.Link>
              <Nav.Link
                className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                href='/signin'
              >
                Sign in
              </Nav.Link>
              <Nav.Link
                className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                href='#signin'
              >
                Log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
