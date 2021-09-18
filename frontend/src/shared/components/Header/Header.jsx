import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import atlasLogo from "../../../assets/Logo-Atlas.png";

// classes
import classes from "./Header.module.css";

function Header() {
  const [navClass, setNavClass] = useState("");
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };
    if (showNav) {
      setNavClass(`${classes.navbar}`);
    } else {
      setNavClass(`${classes.navbar} ${classes.navbarhide}`);
    }
  }, [showNav]);

  return (
    <header className={navClass}>
      <Navbar
        bg="light"
        expand="lg"
        collapseOnSelect
        className={`${classes.navbarColor} p-2`}
      >
        <Container>
          <LinkContainer to="/home">
            <img
              src={atlasLogo}
              alt="Atlas Logo"
              className={classes.brandlogo}
            />
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <LinkContainer to="/home">
                <Nav.Link>
                  <i className="fas fa-home p-2"></i> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  <i className="fas fa-running p-2"></i> About Us
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>
                  <i className="fas fa-shopping-bag p-2"></i> Shop
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/news">
                <Nav.Link>
                  <i className="fab fa-readme p-2"></i> News
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/events">
                <Nav.Link>
                  <i className="fab fa-elementor p-2"></i> Events
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
