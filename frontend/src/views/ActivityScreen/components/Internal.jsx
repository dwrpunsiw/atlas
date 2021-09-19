import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";

// components
import ActivityImages from "../components/ActivityImages";

// classes
import classes from "../classes/Internal.module.css";

// data
import { internal } from "../../../shared/dummy/imagesDummy";

function Internal() {
  return (
    <div className="internal">
      <Container fluid className={`px-0 p-5 ${classes.internalHead}`}>
        <h4 className="text-center text-decoration-underline">Internal</h4>
      </Container>
      <Container fluid>
        <Row>
          {internal.map((activity) => {
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

export default Internal;
