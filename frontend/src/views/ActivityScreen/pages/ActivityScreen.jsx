import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

// classes
// import classes from "../classes/ActivityScreen.module.css";

// components
import GaneshaRuniversity from "../components/GaneshaRuniversity";
import Internal from "../components/Internal";

function ActivityScreen() {
  return (
    <motion.div
      className="activity"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid className="px-0">
        <div className="activity__title d-flex justify-content-center p-4">
          <h3>Our Activity</h3>
        </div>
        <div className="activity__content">
          <GaneshaRuniversity />
          <Internal />
        </div>
      </Container>
    </motion.div>
  );
}

export default ActivityScreen;
