import React from 'react';
import SectionShell from '../SectionShell';

function BossesSection({ projects, onOpenProject }) {
  return (
    <SectionShell
      title="Bosses Defeated"
      subtitle="Major engineering problems solved through architecture, discipline, and iteration."
    >
      <div className="quest-grid">
        {projects.map((project) => (
          <article key={project.id} className="quest-card">
            <p className="quest-tag">{project.tag}</p>
            <h3>{project.name}</h3>
            <p>{project.short}</p>
            <button type="button" className="quest-link" onClick={() => onOpenProject(project)}>
              Open Lore Page
            </button>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default BossesSection;
