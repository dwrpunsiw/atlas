import React from "react";
import { motion } from "framer-motion";

// components
import Organogram from "../components/Organogram";

function AboutScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Organogram />
    </motion.div>
  );
}

export default AboutScreen;
