import React from "react";
import { motion } from "framer-motion";

function NewsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      News Page
    </motion.div>
  );
}

export default NewsScreen;
