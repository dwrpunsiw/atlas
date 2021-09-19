import React from "react";
import { motion } from "framer-motion";

function ShopScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Shop Page
    </motion.div>
  );
}

export default ShopScreen;
