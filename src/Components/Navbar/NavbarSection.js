import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo-1.png";

const NavbarSection = () => {
  return (
    <div className='sticky top-0 z-50'>
      <Navbar bg='light' expand='lg'>
        <Container className='mx-20'>
          <div className='flex justify-center items-center'>
            <img src={logo} className='mr-2' width='25px' alt='' />
            <Navbar.Brand className='font-semibold text-2xl' to='/'>
              Be Better
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto flex items-center'>
              <Link
                className='mr-4 text-black border-b-2 border-transparent hover:border-red-400'
                to='/'
              >
                Home
              </Link>
              <Link className='mr-4 text-black border-b-2 border-transparent hover:border-red-400' to='/about'>
                About
              </Link>
              <Link className='mr-4 text-black border-b-2 border-transparent hover:border-red-400' to='#link'>
                Services
              </Link>
              <Link
                className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                to='/signup'
              >
                Sign up
              </Link>
              <Link
                className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                to='/signin'
              >
                Sign in
              </Link>
              <Link
                className='px-3 py-1 mr-2 my-auto hover:bg-red-300 hover:text-white rounded-full border-2 border-red-400 text-black'
                to='#signin'
              >
                Log out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
