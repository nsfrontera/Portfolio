import React, { useEffect, useMemo, useRef, useState } from 'react';
import BackgroundFX from './components/BackgroundFX';
import BonfireButton from './components/BonfireButton';
import HeroScreen from './components/HeroScreen';
import QuestModal from './components/QuestModal';
import SoulsMenu from './components/SoulsMenu';
import AchievementsSection from './components/sections/AchievementsSection';
import AttributesSection from './components/sections/AttributesSection';
import BossesSection from './components/sections/BossesSection';
import ChronicleSection from './components/sections/ChronicleSection';
import EquipmentSection from './components/sections/EquipmentSection';
import StatusSection from './components/sections/StatusSection';
import SummonSignsSection from './components/sections/SummonSignsSection';
import { menuSections, resumeData } from './data/resumeData';

const sectionMap = {
  status: StatusSection,
  attributes: AttributesSection,
  equipment: EquipmentSection,
  achievements: AchievementsSection,
  chronicle: ChronicleSection,
  bosses: BossesSection,
  summon: SummonSignsSection,
};

function App() {
  const [activeSection, setActiveSection] = useState('status');
  const [activeProject, setActiveProject] = useState(null);
  const [showBonfire, setShowBonfire] = useState(false);
  const archiveRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setShowBonfire(window.scrollY > 440);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const CurrentSection = useMemo(() => sectionMap[activeSection], [activeSection]);

  const handleEnterArchive = () => {
    archiveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app-shell">
      <BackgroundFX />
      <HeroScreen identity={resumeData.identity} onEnterArchive={handleEnterArchive} />

      <section className="archive-layout" ref={archiveRef} id="archive">
        <SoulsMenu
          sections={menuSections}
          activeSection={activeSection}
          onSelect={setActiveSection}
        />

        <main className="archive-panel">
          <CurrentSection
            status={resumeData.status}
            attributes={resumeData.attributes}
            equipment={resumeData.equipment}
            achievements={resumeData.achievements}
            chronicle={resumeData.chronicle}
            projects={resumeData.bossFights}
            summonSigns={resumeData.summonSigns}
            onOpenProject={setActiveProject}
          />
        </main>
      </section>

      <QuestModal project={activeProject} onClose={() => setActiveProject(null)} />
      <BonfireButton visible={showBonfire} />
    </div>
  );
}

export default App;
