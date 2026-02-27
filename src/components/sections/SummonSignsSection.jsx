import React from 'react';
import SectionShell from '../SectionShell';

function SummonSignsSection({ summonSigns }) {
  return (
    <SectionShell
      title="Summon Signs"
      subtitle="Use these links to connect, collaborate, or request full project records."
    >
      <div className="summon-links">
        {summonSigns.map((sign) => (
          <a key={sign.label} href={sign.url} target="_blank" rel="noreferrer">
            {sign.label}
          </a>
        ))}
      </div>
    </SectionShell>
  );
}

export default SummonSignsSection;
