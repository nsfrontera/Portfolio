import React from 'react';

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${4 + index * 5.1}%`,
  delay: `${(index % 9) * 1.4}s`,
  duration: `${14 + (index % 5) * 3}s`,
  opacity: 0.1 + (index % 4) * 0.07,
}));

function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-gradient" />
      <div className="bg-vignette" />
      <div className="bg-grain" />
      <div className="dust-layer">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="dust"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BackgroundFX;
