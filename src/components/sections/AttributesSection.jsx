import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionShell from '../SectionShell';

function AttributesSection({ attributes }) {
  const [expanded, setExpanded] = useState(attributes[0]?.name ?? '');

  return (
    <SectionShell
      title="Attributes"
      subtitle="Core disciplines measured by practical impact and project evidence."
    >
      <div className="attribute-list">
        {attributes.map((attribute) => {
          const isOpen = expanded === attribute.name;
          return (
            <article key={attribute.name} className={isOpen ? 'attribute-card open' : 'attribute-card'}>
              <button
                type="button"
                className="attribute-head"
                onClick={() => setExpanded(isOpen ? '' : attribute.name)}
              >
                <div>
                  <h3>{attribute.name}</h3>
                  <p>Rating: {attribute.level}</p>
                </div>
                <div className="attribute-meter" aria-hidden="true">
                  <span style={{ width: `${attribute.level}%` }} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    className="attribute-body"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p>
                      <strong>Tools:</strong> {attribute.tools.join(' • ')}
                    </p>
                    <p>
                      <strong>Projects:</strong> {attribute.projects.join(' • ')}
                    </p>
                    <ul className="line-list">
                      {attribute.evidence.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default AttributesSection;
