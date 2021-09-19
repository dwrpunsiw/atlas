import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// classes
// import classes from "../classes/ActivityScreen.module.css";

// components
import ActivityImages from "../components/ActivityImages";

import { garun, internal } from "../../../shared/dummy/imagesDummy";

function ActivityScreen() {
  return (
    <div className="activity">
      <Container fluid>
        <div className="activity__title d-flex justify-content-center p-4">
          <h3>Our Activity</h3>
        </div>
        <div className="activity__content">
          <Container className="mb-3" fluid>
            <h4 className="text-center text-decoration-underline">
              Ganesha Runiversity
            </h4>
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
                    <ActivityImages activity={activity} />
                  </Col>
                );
              })}
            </Row>
          </Container>
          <Container fluid>
            <h4 className="text-center text-decoration-underline">Internal</h4>
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
                    <ActivityImages activity={activity} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default ActivityScreen;
