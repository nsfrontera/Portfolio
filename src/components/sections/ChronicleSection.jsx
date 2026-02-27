import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionShell from '../SectionShell';

function ChronicleSection({ chronicle }) {
  const [openEntry, setOpenEntry] = useState(chronicle[0]?.id ?? '');

  return (
    <SectionShell title="Chronicle" subtitle="Career timeline with responsibilities and measurable outcomes.">
      <div className="timeline">
        {chronicle.map((entry) => {
          const isOpen = openEntry === entry.id;

          return (
            <article key={entry.id} className={isOpen ? 'timeline-entry open' : 'timeline-entry'}>
              <button
                type="button"
                className="timeline-head"
                onClick={() => setOpenEntry(isOpen ? '' : entry.id)}
              >
                <span>{entry.era}</span>
                <div>
                  <h3>{entry.title}</h3>
                  <p>{entry.guild}</p>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    className="timeline-body"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ul className="line-list">
                      {entry.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
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

export default ChronicleSection;
