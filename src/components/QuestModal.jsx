import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function QuestModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="quest-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.article
            className="quest-modal"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.2, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
          >
            <button type="button" className="modal-close" onClick={onClose}>
              Close
            </button>
            <p className="quest-tag">{project.tag}</p>
            <h3>{project.name}</h3>
            {project.description.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="quest-details">
              <div>
                <h4>Tech Stack</h4>
                <p>{project.stack.join(' • ')}</p>
              </div>
              <div>
                <h4>Challenge</h4>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h4>Solution</h4>
                <p>{project.solution}</p>
              </div>
              <div>
                <h4>Result</h4>
                <p>{project.result}</p>
              </div>
            </div>

            <div className="quest-links">
              {project.links.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default QuestModal;
