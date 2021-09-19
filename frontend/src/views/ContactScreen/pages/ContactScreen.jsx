import React from "react";
import { motion } from "framer-motion";

function ContactScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Contact Page
    </motion.div>
  );
}

export default ContactScreen;
