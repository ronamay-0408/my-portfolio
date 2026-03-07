import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 0,   label: 'Awards',           icon: '🏆' },
  { number: 7,   label: 'Complete Projects', icon: '🚀' },
  { number: 2,   label: 'Happy Customers',   icon: '😊' },
  { number: 100, label: 'Cups of Coffee',    icon: '☕' },
]

function CountUp({ target, trigger }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = null
    const duration = 1600
    const step = (timestamp) => {
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

function Design() {
  const statsRef = useRef(null)
  const bannerRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs1.disconnect() } },
      { threshold: 0.2 }
    )
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setBannerVisible(true); obs2.disconnect() } },
      { threshold: 0.2 }
    )
    if (statsRef.current) obs1.observe(statsRef.current)
    if (bannerRef.current) obs2.observe(bannerRef.current)
    return () => { obs1.disconnect(); obs2.disconnect() }
  }, [])

  return (
    <section className="relative bg-white dark:bg-gray-900 pb-0 overflow-hidden">
      <style>{`
        @keyframes statsFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bannerFadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmerMove {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hire-btn {
          position: relative; overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hire-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
        .hire-btn:hover::before { opacity: 1; }
        .hire-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(96,165,250,0.45); }
        .hire-btn span { position: relative; z-index: 1; }
      `}</style>

      {/* ── Stats row ── */}
      <div ref={statsRef} className="flex justify-center px-4 pt-0 pb-0">
        <div className="max-w-[70rem] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ number, label, icon }, i) => (
              <div
                key={label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  animation: statsVisible ? `statsFadeUp 0.6s ease forwards` : 'none',
                  animationDelay: `${i * 0.1}s`,
                  opacity: statsVisible ? undefined : 0,
                  transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                  border: `1px solid ${hovered === i ? 'rgba(96,165,250,0.5)' : 'rgba(128,128,128,0.15)'}`,
                  boxShadow: hovered === i ? '0 12px 32px rgba(96,165,250,0.15)' : '0 2px 8px rgba(0,0,0,0.06)',
                  borderRadius: '16px',
                  padding: '28px 16px',
                  textAlign: 'center',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="bg-gray-100 dark:bg-gray-800"
              >
                {/* Glow on hover */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(circle at center, rgba(96,165,250,0.06) 0%, transparent 70%)',
                  opacity: hovered === i ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                }} />

                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>

                <h3 style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '38px', fontWeight: 900,
                  background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1, margin: '0 0 8px',
                }}>
                  <CountUp target={number} trigger={statsVisible} />
                  {number > 0 && <span style={{ fontSize: '24px' }}>+</span>}
                </h3>

                <p style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px', letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }} className="text-gray-600 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hire Me Banner ── */}
      <div
        ref={bannerRef}
        className="relative mt-10 overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: 'url(/contents/bg_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '520px',
          animation: bannerVisible ? 'bannerFadeIn 0.8s ease forwards' : 'none',
          opacity: bannerVisible ? undefined : 0,
        }}
      >
        {/* Dark overlay with gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(8,8,18,0.85) 100%)',
        }} />

        {/* Ambient glows */}
        <div style={{
          position: 'absolute', top: '20%', left: '10%',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', right: '10%',
          width: '250px', height: '250px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, padding: '60px 24px' }}>

          {/* Label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(96,165,250,0.1)',
            border: '1px solid rgba(96,165,250,0.3)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '24px',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#4ade80', boxShadow: '0 0 8px #4ade80',
              display: 'inline-block',
            }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '11px', color: '#60a5fa',
              letterSpacing: '0.3em', textTransform: 'uppercase',
            }}>Available for work</span>
          </div>

          <h2 style={{
            color: 'white', fontWeight: 900,
            fontSize: 'clamp(32px, 5vw, 58px)',
            lineHeight: 1.15, marginBottom: '12px',
            fontFamily: "'Georgia', serif",
            letterSpacing: '-0.02em',
          }}>
            I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Available</span>
            {' '}for
          </h2>
          <h2 style={{
            color: 'white', fontWeight: 900,
            fontSize: 'clamp(32px, 5vw, 58px)',
            lineHeight: 1.15, marginBottom: '36px',
            fontFamily: "'Georgia', serif",
            letterSpacing: '-0.02em',
          }}>Web Development</h2>

          {/* Divider */}
          <div style={{
            width: '48px', height: '2px',
            background: 'linear-gradient(90deg, #60a5fa, #7c3aed)',
            margin: '0 auto 36px',
            borderRadius: '2px',
          }} />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hire-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
              color: 'white', fontWeight: 700,
              padding: '14px 40px', borderRadius: '100px',
              fontSize: '13px', letterSpacing: '0.2em',
              textTransform: 'uppercase', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(96,165,250,0.35)',
            }}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Design