import React from "react";
import './css/TopNav.css';
import { Container, Nav } from "react-bootstrap";

function TopHeader() {
  return (
    <header>
      <Container fluid className="py-3 top__nav">
        <Nav className="nav justify-content-between">
          <div class="nav__top-left d-flex">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Welcome to <span class="top__span">CoastalCart</span>
              </a>
            </li>
            <li class="nav-item nav__top-media">
              <a href="#" class="nav-link">
                Follow:{" "}
                <span class="top__span">
                  <i class="fab fa-twitter-square"></i>
                  <i class="fab fa-facebook-square"></i>
                  <i class="fab fa-instagram"></i>
                </span>
              </a>
            </li>
          </div>
          <div class="top__nav-right d-flex">
              <li class="nav-item nav__top-media">
                <a href="#" class="nav-link">Call us :- <span class="top__span">+919483527972</span></a>
              </li>
              <Nav className="m-auto">
              <Nav.Link href="/cart"> <i class="fas fa-user"></i>Login</Nav.Link>
              </Nav>
          </div>
        </Nav>
      </Container>
    </header>
  );
}

export default TopHeader;
