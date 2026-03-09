import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'Web Developer',
  'PHP & Laravel Dev',
  'React Developer',
]

function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [visible, setVisible] = useState(false)

  // Entrance animation trigger
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden px-4"
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(6px); opacity: 0.4; }
        }
        @keyframes orbitPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(1.05); }
        }
        .fade-up-1 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.7s; opacity: 0; }
        .fade-up-5 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.9s; opacity: 0; }
        .fade-up-6 { animation: fadeUp 0.7s ease forwards; animation-delay: 1.1s; opacity: 0; }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .scroll-bounce { animation: scrollBounce 1.5s ease-in-out infinite; }
        .float-bob { animation: floatBob 4s ease-in-out infinite; }
        .orbit-ring { animation: orbitPulse 4s ease-in-out infinite; }
        .orbit-ring-2 { animation: orbitPulse 6s ease-in-out infinite 1s; }
        .btn-primary {
          position: relative; overflow: hidden;
          transition: all 0.3s ease;
        }
        .btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #3b82f6, #7c3aed);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(96,165,250,0.4); }
        .btn-secondary {
          transition: all 0.3s ease;
        }
        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Orbit rings */}
        <div className="orbit-ring absolute rounded-full border border-blue-400/10 dark:border-blue-400/10"
          style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="orbit-ring-2 absolute rounded-full border border-purple-400/10 dark:border-purple-400/10"
          style={{ width: '700px', height: '700px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

        {/* Gradient blobs */}
        <div style={{
          position: 'absolute', top: '15%', right: '10%',
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '8%',
          width: '260px', height: '260px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        {/* Floating code snippets */}
        {[
          { text: '<Developer />', top: '18%', left: '6%', delay: '0s' },
          { text: '{ code: true }', top: '72%', right: '6%', delay: '1s' },
          { text: 'Laravel::make()', top: '30%', right: '4%', delay: '2s' },
          { text: 'useState(🚀)', bottom: '30%', left: '4%', delay: '1.5s' },
        ].map((item, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: item.top, bottom: item.bottom,
            left: item.left, right: item.right,
            fontFamily: "'Courier New', monospace",
            fontSize: '12px',
            color: 'rgba(96,165,250,0.25)',
            animation: `floatBob ${3 + i}s ease-in-out infinite`,
            animationDelay: item.delay,
            userSelect: 'none',
          }}>{item.text}</div>
        ))}

        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} className="dark:opacity-5" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl w-full">

        {/* Hello badge */}
        <div className="fade-up-1 inline-flex items-center gap-2 mb-6">
          <div style={{
            background: 'rgba(96,165,250,0.1)',
            border: '1px solid rgba(96,165,250,0.3)',
            borderRadius: '100px',
            padding: '6px 18px',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#60a5fa',
              boxShadow: '0 0 8px #60a5fa',
              display: 'inline-block',
              animation: 'blink 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '12px', letterSpacing: '0.3em',
              color: '#60a5fa', textTransform: 'uppercase',
            }}>Available for work</span>
          </div>
        </div>

        {/* Greeting */}
        <p className="fade-up-2 text-gray-500 dark:text-gray-400 tracking-[0.4em] text-sm uppercase mb-3">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="fade-up-3 font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(38px, 7vw, 80px)' }}>
          Rona May{' '}
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Balangat</span>
        </h1>

        {/* Typewriter role */}
        <div className="fade-up-4 flex items-center justify-center gap-2 mb-8"
          style={{ minHeight: '44px' }}>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 'clamp(16px, 3vw, 26px)',
            color: '#60a5fa',
            fontWeight: 600,
          }}>{displayed}</span>
          <span className="cursor-blink" style={{
            width: '2px', height: '28px',
            background: '#60a5fa',
            display: 'inline-block',
            borderRadius: '1px',
          }} />
        </div>

        {/* Description */}
        <p className="fade-up-5 text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed text-base">
          Passionate about building clean, efficient web applications — from pixel-perfect frontends to robust backends.
        </p>

        {/* CTAs */}
        <div className="fade-up-6 flex flex-wrap gap-4 justify-center">
          <a
            href="/my-portfolio/resume.pdf"
            download="Rona_May_Balangat_CV.pdf"
            rel="noopener noreferrer"
            className="btn-primary relative z-0 inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold tracking-wide"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download CV
            </span>
          </a>
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-secondary inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold tracking-wide border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:border-blue-400 dark:hover:border-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            My Works
          </a>
        </div>

        {/* Social links */}
        <div className="fade-up-6 flex justify-center gap-4 mt-8">
          {[
            {
              label: 'GitHub',
              href: 'https://github.com/ronamay-0408',
              icon: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />,
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/rona-may-balangat-50037b289?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
              icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />,
            },
            {
              label: 'Email',
              href: 'balangatronamay@email.com',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
            },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} aria-label={label}
              style={{ transition: 'all 0.25s ease' }}
              className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-blue-400 hover:text-blue-400 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce">
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '10px', letterSpacing: '0.2em',
          color: '#9ca3af', textTransform: 'uppercase',
        }}>scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, #60a5fa, transparent)',
        }} />
      </div>

    </section>
  )
}

export default Home