import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar variant='dark' bg='primary' >
        <Container>
            <Navbar.Brand>Lifted</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Today's Workout</Nav.Link>
            <Nav.Link href="#link">My Exercises</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header