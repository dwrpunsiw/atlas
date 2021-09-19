import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";

// components
import ActivityImages from "../components/ActivityImages";

// classes
import classes from "../classes/GaneshaRuniversity.module.css";

// data
import { garun } from "../../../shared/dummy/imagesDummy";

function GaneshaRuniversity() {
  return (
    <div className="garun">
      <Container fluid className={`px-0 p-5 ${classes.garunHead}`}>
        <h4 className="text-center text-decoration-underline">
          Ganesha Runiversity
        </h4>
      </Container>
      <Container fluid>
        <Row>
          {garun.map((activity) => {
            return (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="px-0"
                key={activity._id}
              >
                <LazyLoadComponent>
                  <ActivityImages activity={activity} />
                </LazyLoadComponent>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default GaneshaRuniversity;
