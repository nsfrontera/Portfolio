import React from 'react';
import { motion } from 'framer-motion';

function HeroScreen({ identity, onEnterArchive }) {
  return (
    <section className="hero-screen">
      <motion.div
        className="hero-panel"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.2, 1, 0.3, 1] }}
      >
        <p className="hero-overline">Character Archive</p>
        <h1>{identity.name}</h1>
        <p className="hero-class">Class: {identity.classTitle}</p>
        <p className="hero-summary">{identity.summary}</p>

        <div className="quick-stats">
          {identity.stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <button type="button" className="btn-primary" onClick={onEnterArchive}>
            Enter Archive
          </button>
          <a className="btn-secondary" href={identity.resumePdfUrl} target="_blank" rel="noreferrer">
            Summon Resume (PDF)
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroScreen;
