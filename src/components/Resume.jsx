import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    period: '2025 — Present',
    role: 'Junior Programmer',
    company: 'Bicol University – ICTO',
    type: 'Full-time',
    color: '#60a5fa',
    description: 'Responsible for developing and maintaining software applications that enhance the university\'s digital infrastructure. Collaborating with cross-functional teams to design, implement, and optimize solutions that improve user experience and operational efficiency. Committed to delivering high-quality code and continuously learning new technologies.',
    tags: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
  },
  {
    period: '2024 — 2025',
    role: 'Full Stack Developer',
    company: 'Bicol University – Capstone',
    type: 'Project',
    color: '#7c3aed',
    description: 'Worked on BUsina, a full-scale vehicle registration and security system developed for the entire Bicol University. Combining user management, system security, and data processing into a unified platform designed to streamline vehicle entry and exit while enhancing campus-wide safety and efficiency.',
    tags: ['React', 'Node JS', 'MySQL', 'Full Stack'],
  },
  {
    period: '2021 — 2025',
    role: 'Information Technology Degree',
    company: 'Bicol University – BSIT',
    type: 'Education',
    color: '#0ea5e9',
    description: 'Specializing in developing solutions that bridge the gap between technology and real-world applications. Explored the full spectrum of IT — from software development and databases to networking and systems analysis — while pursuing hands-on projects that blend creativity with technical skills.',
    tags: ['BSIT', 'Software Dev', 'Databases', 'Networking'],
  },
]

function TimelineCard({ item, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animation: visible ? `resumeFadeUp 0.7s ease forwards` : 'none',
        animationDelay: `${0.2 + index * 0.15}s`,
        opacity: visible ? undefined : 0,
        display: 'flex',
        gap: '0',
      }}
    >
      {/* Timeline spine */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        marginRight: '24px', flexShrink: 0,
      }}>
        {/* Dot */}
        <div style={{
          width: '14px', height: '14px', borderRadius: '50%',
          background: item.color,
          boxShadow: hovered ? `0 0 16px ${item.color}` : `0 0 8px ${item.color}88`,
          border: `2px solid ${item.color}`,
          flexShrink: 0, marginTop: '4px',
          transition: 'box-shadow 0.3s ease',
          zIndex: 1,
        }} />
        {/* Line */}
        {index < experiences.length - 1 && (
          <div style={{
            width: '2px', flexGrow: 1, marginTop: '6px',
            background: `linear-gradient(to bottom, ${item.color}44, transparent)`,
            minHeight: '40px',
          }} />
        )}
      </div>

      {/* Card */}
      <div
        className="bg-gray-100 dark:bg-gray-800"
        style={{
          flex: 1,
          background: hovered ? `linear-gradient(135deg, rgba(31,41,55,0.06) 0%, ${item.color}10 100%)` : undefined,
          border: `1px solid ${hovered ? item.color + '55' : 'rgba(128,128,128,0.15)'}`,
          borderRadius: '16px',
          padding: '24px 28px',
          marginBottom: '24px',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: hovered ? 'translateX(6px)' : 'translateX(0)',
          boxShadow: hovered ? `0 8px 32px ${item.color}20` : '0 2px 12px rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Corner accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '48px', height: '48px',
          borderTop: `2px solid ${item.color}44`,
          borderRight: `2px solid ${item.color}44`,
          borderTopRightRadius: '16px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }} />

        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
          <div>
            <p style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '12px', color: item.color,
              letterSpacing: '0.1em', marginBottom: '6px',
              fontWeight: 700,
            }}>{item.period}</p>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800, margin: 0,
              fontFamily: "'Georgia', serif",
              letterSpacing: '-0.01em',
            }} className="text-gray-900 dark:text-gray-100">{item.role}</h3>
            <p style={{
              fontSize: '12px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              fontFamily: "'Courier New', monospace",
              marginTop: '4px', fontWeight: 600,
            }} className="text-gray-500 dark:text-gray-400">{item.company}</p>
          </div>
          <span style={{
            background: `${item.color}18`,
            border: `1px solid ${item.color}44`,
            color: item.color,
            fontSize: '10px', fontFamily: "'Courier New', monospace",
            padding: '4px 12px', borderRadius: '100px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            whiteSpace: 'nowrap', alignSelf: 'flex-start',
          }}>{item.type}</span>
        </div>

        {/* Divider */}
        <div style={{
          width: '100%', height: '1px',
          background: `linear-gradient(90deg, ${item.color}33, transparent)`,
          margin: '14px 0',
        }} />

        {/* Description */}
        <p style={{
          fontSize: '14px',
          lineHeight: 1.8, margin: '0 0 16px',
        }} className="text-gray-600 dark:text-gray-400">{item.description}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {item.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '11px',
              fontFamily: "'Courier New', monospace",
              padding: '3px 10px', borderRadius: '100px',
              border: `1px solid ${item.color}44`,
              color: item.color,
              background: `${item.color}10`,
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Resume() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 pb-24 px-4 overflow-hidden"
    >
      <style>{`
        @keyframes resumeFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '20%', right: '-5%',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', left: '-5%',
          width: '280px', height: '280px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-[70rem] w-full relative z-10">

        {/* Heading */}
        <div className="relative flex justify-center items-center pt-5 pb-10">
          <h1
            className="text-gray-300 dark:text-gray-600 absolute z-0 top-5 select-none"
            style={{ fontSize: 'clamp(80px, 12vw, 140px)', fontWeight: 900 }}
          >Resume</h1>
          <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
            Resume
          </h2>
        </div>

        {/* Sub label */}
        {visible && (
          <div
            style={{ animation: 'resumeFadeUp 0.6s ease forwards', opacity: 0 }}
            className="flex items-center gap-3 mb-2"
          >
            <div style={{
              width: '32px', height: '2px',
              background: 'linear-gradient(90deg, #7c3aed, #60a5fa)',
              borderRadius: '2px',
            }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '11px', letterSpacing: '0.35em',
              color: '#60a5fa', textTransform: 'uppercase',
            }}>experience & education</span>
          </div>
        )}

        {/* Description */}
        <div
          style={{
            animation: visible ? 'resumeFadeUp 0.6s ease forwards' : 'none',
            animationDelay: '0.1s', opacity: visible ? undefined : 0,
          }}
          className="text-center px-4 mb-12"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm always eager to learn, grow, and connect with others who share similar passions — whether it's discussing the latest in tech, trading cooking tips, or sharing furniture design ideas.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {experiences.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} visible={visible} />
          ))}
        </div>

        {/* Download CTA */}
        {visible && (
          <div
            style={{ animation: 'resumeFadeUp 0.7s ease forwards', animationDelay: '0.7s', opacity: 0 }}
            className="flex justify-center mt-4"
          >
            <a
              href="/resume.pdf"
              download="Rona_May_Balangat_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                color: 'white', fontWeight: 700,
                padding: '14px 36px', borderRadius: '100px',
                fontSize: '12px', letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(96,165,250,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(96,165,250,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(96,165,250,0.3)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download CV
            </a>
          </div>
        )}

      </div>
    </section>
  )
}

export default Resume
