import React from "react";
import './css/Header.css';
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


function Header() {
  return (
    <header>
      <Navbar bg="white" className="py-4" variant="ligth" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="Logo">Coastal<span>Cart</span></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll"><i class="fas fa-ellipsis-v"></i></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto"></Nav>
            <LinkContainer to="/cart">
              <Nav.Link className="cart"> <i class="fas fa-shopping-bag"></i>Cart</Nav.Link>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
