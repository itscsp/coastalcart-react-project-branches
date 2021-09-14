import React from "react";
import './css/Header.css';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Navbar, Nav, NavDropdown  } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  return (
    <header className="header-main">
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

            {/* if he is admin */}
            {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenue'>
                    <LinkContainer to='/admin/userlist'>
                        <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/productlist'>
                        <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/orderlist'>
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>

                </NavDropdown>
            )}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
