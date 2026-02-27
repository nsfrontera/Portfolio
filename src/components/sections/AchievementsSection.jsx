import React from 'react';
import SectionShell from '../SectionShell';

function AchievementsSection({ achievements }) {
  return (
    <SectionShell
      title="Achievements"
      subtitle="Impact milestones and high-value outcomes across engineering efforts."
    >
      <ul className="line-list achievements-list">
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default AchievementsSection;
