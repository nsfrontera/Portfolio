import React from 'react';
import { motion } from 'framer-motion';

function SectionShell({ title, subtitle, children }) {
  return (
    <motion.section
      className="section-shell"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
    >
      <header className="section-header">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </header>
      {children}
    </motion.section>
  );
}

export default SectionShell;
