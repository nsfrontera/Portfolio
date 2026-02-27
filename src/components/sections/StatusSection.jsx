import React from 'react';
import SectionShell from '../SectionShell';

function StatusSection({ status }) {
  return (
    <SectionShell
      title="Status"
      subtitle="Current profile summary, engineering oath, and operating directives."
    >
      <p className="status-oath">"{status.oath}"</p>
      <p>{status.about}</p>
      <ul className="line-list">
        {status.directives.map((directive) => (
          <li key={directive}>{directive}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default StatusSection;
