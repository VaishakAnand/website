import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';

function CustomNavbar(props) {
  return (
    <>
      <style type="text/css">
        {`
        .bg-purp {
          background-color: #242e33!important;
        }
        .nav-link:hover {
          // text-transform: uppercase;
          color:  !important;
        }
        `}
      </style>

      <Navbar collapseOnSelect expand="sm" bg="purp" variant="dark">
        <LinkContainer to='/'>
      <Navbar.Brand href="/">{' '}Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/others'>
              <Nav.Link>Others</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>

  )
}


export default CustomNavbar;