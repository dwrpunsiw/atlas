import React from "react";
import { Row, Col, Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// classess
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <Navbar
        expand="md"
        collapseOnSelect
        className={`${classes.footerColor} p-1 d-flex flex-column`}
        sticky="bottom"
      >
        <Container className="justify-content-center" fluid>
          <Nav>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
        <Container className="justify-content-center" fluid>
          <div className="d-flex flex-column justify-content-center">
            <ul className={`${classes.list} d-flex justify-content-center`}>
              <li>
                <h6 className={`${classes.text} p-0 m-0`}>Social Media</h6>
              </li>
            </ul>
            <ul className={`${classes.list} d-flex justify-content-center`}>
              <li>
                <a
                  href="https://www.instagram.com/atletikganesha"
                  className={`${classes.link} mx-2`}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/atletikganesha"
                  className={`${classes.link} mx-2`}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/atletikganesha/"
                  className={`${classes.link} mx-2`}
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/atletik-ganesha/"
                  className={`${classes.link} mx-2`}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </Container>
        <div className="copyright">
          <Row>
            <Col className="text-center">Copyright &copy; Wisnu PW</Col>
          </Row>
        </div>
      </Navbar>

      {/* <Container className={`${classes.footerContainer}`}>
        <ul className={`${classes.footer} d-flex justify-content-center`}>
          <li>
            <NavLink to="/about" className={`${classes.link} p-3`}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={`${classes.link} p-3`}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </Container> */}
    </footer>
  );
}

export default Footer;
