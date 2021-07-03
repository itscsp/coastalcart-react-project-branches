import React from "react";
import './css/Header.css';
import { Container, Row, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="white" className="py-4" variant="ligth" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand  href="#" className="Logo">Coastal<span>Cart</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"><i class="fas fa-ellipsis-v"></i></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Nav.Link href="/cart" className="cart"> <i class="fas fa-shopping-bag"></i>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
