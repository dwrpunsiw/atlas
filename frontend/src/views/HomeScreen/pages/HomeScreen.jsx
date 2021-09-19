import React from "react";
import { motion } from "framer-motion";

// classes
import classes from "../classes/HomeScreen.module.css";

function HomeScreen() {
  return (
    <motion.div
      className={classes.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Home Page
    </motion.div>
  );
}

export default HomeScreen;
