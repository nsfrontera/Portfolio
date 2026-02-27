import React from 'react';
import SectionShell from '../SectionShell';

function EquipmentSection({ equipment }) {
  const groups = Object.entries(equipment);

  return (
    <SectionShell
      title="Equipment"
      subtitle="Primary tools and technologies used to ship resilient products."
    >
      <div className="equipment-grid">
        {groups.map(([group, values]) => (
          <article key={group} className="equipment-card">
            <h3>{group}</h3>
            <p>{values.join(' • ')}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default EquipmentSection;
