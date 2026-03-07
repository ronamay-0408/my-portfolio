import { useState, useEffect, useCallback } from 'react';

const base = import.meta.env.BASE_URL

const projects = [
  {
    id: 'voting-system',
    title: 'Voting System',
    description: 'A secure digital voting platform built to streamline electoral processes with real-time results, voter authentication, and audit trails.',
    tech: ['NodeJS', 'JavaScript'],
    cover: `${base}projects/voting-system.png`,
    screenshots: [`${base}projects/voting-system.png`],
    category: 'Web App',
    color: '#7c3aed',
  },
  {
    id: 'inventory-system',
    title: 'Inventory System',
    description: 'A full-featured inventory management system with stock tracking, reporting dashboards, and supplier management.',
    tech: ['Java'],
    cover: `${base}projects/inventory-system-jav.png`,
    screenshots: [`${base}projects/inventory-system-jav.png`],
    category: 'Web System',
    color: '#0ea5e9',
  },
  {
    id: 'glassesEcom',
    title: 'Glasses E-Commerce',
    description: 'A sleek online store for eyewear with product filtering, cart management, and a smooth checkout experience.',
    tech: ['Html', 'CSS', 'Bootstrap'],
    cover: `${base}projects/glassesEcom/1.png`,
    screenshots: Array.from({ length: 2 }, (_, i) => `${base}projects/glassesEcom/${i + 1}.png`),
    category: 'E-Commerce',
    color: '#E34F26',
  },
  {
    id: 'busina',
    title: 'BUsina',
    description: 'Vehicle Registration & Violation Management for Bicol University, Developed a web application for managing vehicle registrations and tracking violations.',
    tech: ['React', 'Node JS', 'MySQL'],
    cover: `${base}projects/busina/1.png`,
    screenshots: Array.from({ length: 5 }, (_, i) => `${base}projects/busina/${i + 1}.png`),
    category: 'Web System & Mobile App',
    color: '#339933',
  },
  {
    id: 'iraya',
    title: 'Iraya',
    description: 'A community-driven platform connecting local artisans and buyers, celebrating indigenous culture and craftsmanship.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'WordPress'],
    cover: `${base}projects/iraya/1.png`,
    screenshots: Array.from({ length: 8 }, (_, i) => `${base}projects/iraya/${i + 1}.png`),
    category: 'Website',
    color: '#FF2D20',
  },
  {
    id: 'coe',
    title: 'Center of Excellence Self-Assessment tool',
    description: 'A web-based tool for managing and evaluating requirements for Center of Excellence accreditation.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'Laravel', 'Tailwind', 'Preline'],
    cover: `${base}projects/coe/1.png`,
    screenshots: Array.from({ length: 8 }, (_, i) => `${base}projects/coe/${i + 1}.png`),
    category: 'Web System',
    color: '#4479A1',
  },
];

const Modal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(c => (c - 1 + project.screenshots.length) % project.screenshots.length), [project]);
  const next = useCallback(() => setCurrent(c => (c + 1) % project.screenshots.length), [project]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'modalFadeIn 0.25s ease',
      }}
    >
      <style>{`
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .thumb-scroll::-webkit-scrollbar { height: 4px; }
        .thumb-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 2px; }
        .thumb-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
      `}</style>

      <div className="projects-modal"
        onClick={e => e.stopPropagation()}
        style={{
        //   background: '#1f2937 ',
          borderRadius: '20px',
          border: `1px solid ${project.color}44`,
          boxShadow: `0 0 60px ${project.color}22`,
          width: '100%', maxWidth: '900px',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          animation: 'modalSlideUp 0.3s ease',
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '20px 28px',
          borderBottom: `1px solid ${project.color}22`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: project.color, boxShadow: `0 0 10px ${project.color}`,
            }} />
            <span style={{
              color: '#fff', fontFamily: "'Courier New', monospace",
              fontWeight: 700, fontSize: '16px', letterSpacing: '0.1em',
            }}>{project.title}</span>
            <span style={{
              background: `${project.color}22`, color: project.color,
              fontSize: '10px', fontFamily: "'Courier New', monospace",
              padding: '3px 10px', borderRadius: '20px',
              border: `1px solid ${project.color}44`,
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{project.category}</span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%', width: '36px', height: '36px',
              color: '#fff', cursor: 'pointer', fontSize: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >✕</button>
        </div>

        {/* Main image viewer */}
        <div style={{
          position: 'relative', flexShrink: 0,
          background: '#080812',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: '420px', overflow: 'hidden',
        }}>
          <img
            key={current}
            src={project.screenshots[current]}
            alt={`${project.title} screenshot ${current + 1}`}
            style={{
              maxWidth: '100%', maxHeight: '100%',
              objectFit: 'contain',
              animation: 'modalFadeIn 0.2s ease',
            }}
          />

          {project.screenshots.length > 1 && (
            <>
              <button onClick={prev} style={{
                position: 'absolute', left: '16px',
                background: 'rgba(0,0,0,0.6)', border: `1px solid ${project.color}44`,
                borderRadius: '50%', width: '44px', height: '44px',
                color: '#fff', cursor: 'pointer', fontSize: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = `${project.color}33`}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >←</button>
              <button onClick={next} style={{
                position: 'absolute', right: '16px',
                background: 'rgba(0,0,0,0.6)', border: `1px solid ${project.color}44`,
                borderRadius: '50%', width: '44px', height: '44px',
                color: '#fff', cursor: 'pointer', fontSize: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = `${project.color}33`}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >→</button>

              {/* Counter */}
              <div style={{
                position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.7)', borderRadius: '20px',
                padding: '4px 14px', color: '#fff',
                fontFamily: "'Courier New', monospace", fontSize: '11px',
                border: `1px solid ${project.color}33`,
              }}>
                {current + 1} / {project.screenshots.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {project.screenshots.length > 1 && (
          <div className="thumb-scroll" style={{
            display: 'flex', gap: '8px', padding: '12px 20px',
            overflowX: 'auto', flexShrink: 0,
            borderTop: `1px solid ${project.color}22`,
            // background: '#1f2937',
          }}>
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                onClick={() => setCurrent(i)}
                style={{
                  width: '72px', height: '48px', objectFit: 'cover',
                  borderRadius: '6px', cursor: 'pointer', flexShrink: 0,
                  border: `2px solid ${i === current ? project.color : 'transparent'}`,
                  opacity: i === current ? 1 : 0.5,
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>
        )}

        {/* Footer info */}
        <div style={{
          padding: '16px 28px',
          borderTop: `1px solid ${project.color}22`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '10px',
          flexShrink: 0,
        }}>
          <p style={{
            color: '#94a3b8', fontSize: '13px',
            fontFamily: "'Courier New', monospace", margin: 0,
            maxWidth: '520px', lineHeight: 1.6,
          }}>{project.description}</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {project.tech.map(t => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#cbd5e1', fontSize: '10px',
                fontFamily: "'Courier New', monospace",
                padding: '3px 10px', borderRadius: '20px',
                letterSpacing: '0.05em',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const isLarge = false;

  return (
    <div
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        // borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '16/9',
        border: `1px solid ${hovered ? project.color + '88' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 0 32px ${project.color}30` : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
      }}
    >
      {/* Project image */}
      <img
        src={project.cover}
        alt={project.title}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'block',
        }}
      />

      {/* Permanent subtle gradient at bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      {/* Category badge — always visible */}
      <div style={{
        position: 'absolute', top: '14px', left: '14px',
        background: `${project.color}22`,
        border: `1px solid ${project.color}55`,
        borderRadius: '20px', padding: '4px 12px',
        color: project.color,
        fontFamily: "'Courier New', monospace",
        fontSize: '10px', letterSpacing: '0.12em',
        textTransform: 'uppercase',
        backdropFilter: 'blur(8px)',
        transition: 'opacity 0.3s ease',
        opacity: hovered ? 0 : 1,
      }}>{project.category}</div>

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, rgba(8,8,18,0.93) 0%, ${project.color}22 100%)`,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'flex-start',
        padding: '28px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
        backdropFilter: 'blur(2px)',
      }}>
        {/* Glowing dot + category */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: project.color, boxShadow: `0 0 10px ${project.color}`,
            flexShrink: 0,
          }} />
          <span style={{
            color: project.color, fontFamily: "'Courier New', monospace",
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>{project.category}</span>
        </div>

        <h3 style={{
          color: '#fff', margin: '0 0 10px',
          fontFamily: "'Georgia', serif",
          fontSize: isLarge ? '26px' : '20px',
          fontWeight: 800, letterSpacing: '-0.01em',
          textShadow: `0 0 30px ${project.color}55`,
        }}>{project.title}</h3>

        <p style={{
          color: '#cbd5e1', margin: '0 0 16px',
          fontFamily: "'Courier New', monospace",
          fontSize: '12px', lineHeight: 1.7,
          maxWidth: '420px',
        }}>{project.description}</p>

        {/* Tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px', padding: '3px 10px',
              color: '#e2e8f0', fontSize: '10px',
              fontFamily: "'Courier New', monospace",
              letterSpacing: '0.05em',
            }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          color: project.color,
          fontFamily: "'Courier New', monospace",
          fontSize: '12px', letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}>
          <span>View Screenshots</span>
          <span style={{ fontSize: '16px' }}>→</span>
        </div>
      </div>

      {/* Bottom title bar — visible when not hovered */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '12px 16px',
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}>
        <p style={{
          color: '#fff', margin: 0,
          fontFamily: "'Georgia', serif",
          fontSize: '15px', fontWeight: 700,
          textShadow: '0 1px 8px rgba(0,0,0,0.8)',
        }}>{project.title}</p>
      </div>
    </div>
  );
};

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 dark:border-gray-700 pb-24 px-2">
      <style>{`
        @keyframes projectFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .project-card-enter {
          animation: projectFadeIn 0.5s ease forwards;
          opacity: 0;
        }

        @media (max-width: 640px) {
        .projects-grid { grid-template-columns: repeat(1, 1fr) !important; }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
        .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 640px) {
  .projects-modal { margin: 10px !important; }
  .projects-modal img { height: 220px !important; }
}
      `}</style>

      <div className="max-w-[70rem] w-full items-stretch">

        {/* Section heading */}
        <div className="relative flex justify-center items-center pt-5 pb-10">
          <h1
            className="text-gray-300 dark:text-gray-600 absolute z-0 top-5"
            style={{ fontSize: 'clamp(80px, 12vw, 140px)', fontWeight: 900 }}
          >
            Projects
          </h1>
          <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
            Projects
          </h2>
        </div>

        {/* Description */}
        <div className="relative z-10 text-center px-4 mb-12">
          <p className="text-gray-600 dark:text-gray-300">
            I enjoy tackling real-world challenges and delivering innovative solutions from front-end to back-end.
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          padding: '0 8px',
        }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card-enter"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ProjectCard
                project={project}
                index={i}
                onClick={setActiveProject}
              />
            </div>
          ))}
        </div>

        {/* Hint */}
        <p style={{
          textAlign: 'center',
          marginTop: '24px',
          color: '#6b7280',
          fontFamily: "'Courier New', monospace",
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
        }}>hover to preview · click to explore</p>

      </div>

      {/* Modal */}
      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

export default Projects;