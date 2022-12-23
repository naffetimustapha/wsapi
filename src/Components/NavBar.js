import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ws-API</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Users">Users</Nav.Link>
            <Nav.Link href="Admin">Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar