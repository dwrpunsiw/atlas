import React from "react";
import { motion } from "framer-motion";

function EventsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Events Page
    </motion.div>
  );
}

export default EventsScreen;
