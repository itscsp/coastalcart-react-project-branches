import React from "react";
import "./css/TopNav.css";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function TopHeader() {
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
            <Nav className="m-auto">
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </div>
        </Nav>
      </Container>
    </header>
  );
}

export default TopHeader;
