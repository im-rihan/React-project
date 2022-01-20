import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Route> */}
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
            {/* </Route> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
