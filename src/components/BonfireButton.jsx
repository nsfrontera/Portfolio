import React from 'react';
import { motion } from 'framer-motion';

function BonfireButton({ visible }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return null;
  }

  return (
    <motion.button
      type="button"
      className="bonfire-btn"
      onClick={scrollTop}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      aria-label="Return to top"
    >
      <span className="rune" aria-hidden="true">
        ᛟ
      </span>
      Bonfire
    </motion.button>
  );
}

export default BonfireButton;
