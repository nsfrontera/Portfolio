import React from 'react';

function SoulsMenu({ sections, activeSection, onSelect }) {
  return (
    <nav className="souls-menu" aria-label="Archive sections">
      <p className="menu-title">Archive Menu</p>
      <ul>
        {sections.map((section) => {
          const active = section.id === activeSection;
          return (
            <li key={section.id}>
              <button
                type="button"
                className={active ? 'menu-link active' : 'menu-link'}
                onClick={() => onSelect(section.id)}
              >
                {section.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SoulsMenu;
