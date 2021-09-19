import React from "react";
import { Container } from "react-bootstrap";

// modules
import OrganogramImg from "../../../assets/Organogram.jpeg";

// classes
import classes from "../classes/Organogram.module.css";

function Organogram() {
  return (
    <div className="organogram">
      <Container fluid className={`px-0 p-5 ${classes.organogramHead}`}>
        <h4 className="text-center text-decoration-underline">
          Organogram Badan Pengurus
        </h4>
        <h4 className="text-center text-decoration-underline">
          Atletik Ganesha ITB
        </h4>
        <h4 className="text-center text-decoration-underline">2021</h4>
      </Container>
      <Container fluid className="d-flex justify-content-center px-0">
        <img
          src={OrganogramImg}
          alt="Organogram"
          className={classes.organogramImg}
        />
      </Container>
    </div>
  );
}

export default Organogram;
