import { useEffect, useRef, useState } from 'react'

const info = [
  { label: 'Name',          value: 'Rona May Balangat' },
  { label: 'Date of Birth', value: 'February 28, 2003' },
  { label: 'Address',       value: 'Sto. Domingo, Albay' },
  { label: 'Email',         value: 'balangatronamay@gmail.com' },
  { label: 'Phone',         value: '999-856-3419' },
]

const stats = [
  { number: 7,   label: 'Projects\nCompleted' },
  { number: 2,   label: 'Happy\nClients' },
  { number: 3,   label: 'Years\nLearning' },
  { number: 100, label: 'Cups of\nCoffee' },
]

function CountUp({ target, trigger }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const duration = 1400
    const step = timestamp => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, target])

  return <span>{count}</span>
}

function About() {
  const sectionRef = useRef(null)
  const [visible, setVisible]     = useState(false)
  const [statsVisible, setStats]  = useState(false)
  const [imgHovered, setImgHover] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setStats(true), 600)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 py-24 px-4 overflow-hidden"
    >
      <style>{`
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes aboutFadeLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutFadeRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .about-fade-left  { animation: aboutFadeLeft  0.8s ease forwards; }
        .about-fade-right { animation: aboutFadeRight 0.8s ease forwards; animation-delay: 0.2s; opacity: 0; }
        .about-fade-up    { animation: aboutFadeUp    0.7s ease forwards; }
        .stat-item { transition: all 0.3s ease; }
        .stat-item:hover { transform: translateY(-4px); }
        .info-row { transition: all 0.25s ease; }
        .info-row:hover { padding-left: 8px; }
        .img-float { animation: floatImg 5s ease-in-out infinite; }
      `}</style>

      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-[70rem] w-full relative z-10">

        {/* Section label */}
        {visible && (
          <div className="about-fade-up flex items-center gap-3 mb-12">
            <div style={{
              width: '32px', height: '2px',
              background: 'linear-gradient(90deg, #7c3aed, #60a5fa)',
              borderRadius: '2px',
            }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '11px', letterSpacing: '0.35em',
              color: '#60a5fa', textTransform: 'uppercase',
            }}>who I am</span>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* ── Image column ── */}
          {visible && (
            <div className="about-fade-left w-full lg:w-[42%] flex justify-center">
              <div
                className="relative"
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                style={{ width: '100%', maxWidth: '380px' }}
              >
                {/* Rotating gradient border */}
                <div style={{
                  position: 'absolute', inset: '-3px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #60a5fa, #7c3aed, #60a5fa)',
                  backgroundSize: '200%',
                  animation: 'shimmer 3s linear infinite',
                  opacity: imgHovered ? 1 : 0.5,
                  transition: 'opacity 0.3s ease',
                  zIndex: 0,
                }} />

                {/* Corner accents */}
                {[
                  { top: '-8px', left: '-8px', borderTop: '3px solid #60a5fa', borderLeft: '3px solid #60a5fa', borderTopLeftRadius: '8px' },
                  { top: '-8px', right: '-8px', borderTop: '3px solid #7c3aed', borderRight: '3px solid #7c3aed', borderTopRightRadius: '8px' },
                  { bottom: '-8px', left: '-8px', borderBottom: '3px solid #7c3aed', borderLeft: '3px solid #7c3aed', borderBottomLeftRadius: '8px' },
                  { bottom: '-8px', right: '-8px', borderBottom: '3px solid #60a5fa', borderRight: '3px solid #60a5fa', borderBottomRightRadius: '8px' },
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: '20px', height: '20px', zIndex: 2, ...s }} />
                ))}

                {/* Image */}
                <div className="img-float relative z-1 rounded-2xl overflow-hidden" style={{ zIndex: 1 }}>
                  <img
                    src={`${import.meta.env.BASE_URL}contents/ronabg.png`}
                    alt="Rona May Balangat"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', display: 'block',
                      filter: imgHovered ? 'brightness(1.05)' : 'brightness(0.95)',
                      transition: 'filter 0.4s ease, transform 0.4s ease',
                      transform: imgHovered ? 'scale(1.03)' : 'scale(1)',
                    }}
                  />
                  {/* Overlay badge */}
                  <div style={{
                    position: 'absolute', bottom: '16px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(8,8,18,0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(96,165,250,0.3)',
                    borderRadius: '100px',
                    padding: '6px 16px',
                    whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center', gap: '8px',
                  }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', color: '#e2e8f0', letterSpacing: '0.1em' }}>
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Text column ── */}
          {visible && (
            <div className="about-fade-right w-full lg:w-[58%]">

              {/* Heading */}
              <div className="relative mb-6">
                <h1
                  className="text-gray-100 dark:text-gray-800 absolute top-0 left-0 z-0 leading-none select-none pointer-events-none"
                  style={{ fontSize: 'clamp(60px, 10vw, 120px)', fontWeight: 900 }}
                >About</h1>
                <h2
                  className="text-gray-900 dark:text-white relative z-10 font-black"
                  style={{ fontSize: 'clamp(32px, 5vw, 48px)', paddingTop: '20px' }}
                >
                  About <span style={{
                    background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>Me</span>
                </h2>
                <div style={{
                  width: '48px', height: '3px',
                  background: 'linear-gradient(90deg, #60a5fa, #7c3aed)',
                  borderRadius: '2px', marginTop: '8px',
                }} />
              </div>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-[15px]">
                I'm an Information Technology graduate with a strong passion for technology and problem-solving. I enjoy creating websites that centralize information and make processes easy and simple for users. In my free time, I enjoy cooking, experimenting with new recipes, and building custom furniture — always blending creativity with functionality.
              </p>

              {/* Info list */}
              <ul className="flex flex-col gap-3 mb-8">
                {info.map(({ label, value }, i) => (
                  <li
                    key={i}
                    className="info-row flex items-start gap-3 py-2 border-b border-gray-100 dark:border-gray-800"
                    style={{
                      animation: `aboutFadeUp 0.5s ease forwards`,
                      animationDelay: `${0.4 + i * 0.08}s`,
                      opacity: 0,
                    }}
                  >
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#60a5fa', flexShrink: 0, marginTop: '7px',
                    }} />
                    <span className="font-bold text-gray-900 dark:text-white text-sm w-32 shrink-0">{label}</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{value}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/resume.pdf"
                download="Rona_May_Balangat_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                  color: 'white', fontWeight: 700,
                  padding: '12px 32px', borderRadius: '100px',
                  fontSize: '13px', letterSpacing: '0.15em',
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

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map(({ number, label }, i) => (
            <div
              key={i}
              className="stat-item text-center rounded-2xl py-6 px-4"
              style={{
                background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                animation: statsVisible ? `aboutFadeUp 0.6s ease forwards` : 'none',
                animationDelay: `${i * 0.1}s`,
                opacity: statsVisible ? undefined : 0,
              }}
            >
              <p style={{
                fontFamily: "'Georgia', serif",
                fontSize: '36px', fontWeight: 800,
                background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1, marginBottom: '8px',
              }}>
                <CountUp target={number} trigger={statsVisible} />+
              </p>
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '11px', color: '#9ca3af',
                letterSpacing: '0.08em', whiteSpace: 'pre-line',
              }}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About