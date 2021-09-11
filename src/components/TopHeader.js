import React from "react";
import "./css/TopNav.css";
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from '../actions/userActions'

function TopHeader() {

  const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


  return (
    <header>
      <Container fluid className="py-3 top__nav">
        <Nav className="nav justify-content-between">
          <div className="nav__top-left d-flex">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Welcome to <span className="top__span">CoastalCart</span>
              </a>
            </li>
            <li className="nav-item nav__top-media">
              <a href="#" className="nav-link">
                Follow:{" "}
                <span className="top__span">
                  <i className="fab fa-twitter-square"></i>
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
          </div>
          <div className="top__nav-right d-flex">
            <li className="nav-item nav__top-media">
              <a href="#" className="nav-link">
                Call us :- <span className="top__span">+919483527972</span>
              </a>
            </li>
            <Nav className="m-auto" varient="primary">  
              {userInfo ? (
                      <NavDropdown title={userInfo.name} id='username'>
                          <LinkContainer to='/profile'>
                              <NavDropdown.Item>Profile</NavDropdown.Item>
                          </LinkContainer>

                          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                      </NavDropdown>
                  ) : (
                      <LinkContainer to='/login'>
                              <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                          </LinkContainer>
                      )}
                        
            </Nav>
          </div>
        </Nav>
      </Container>
    </header>
  );
}

export default TopHeader;
