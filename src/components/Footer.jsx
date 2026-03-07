const navLinks = [
  { label: 'Home',     href: 'home' },
  { label: 'About',    href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact',  href: 'contact' },
]

const services = [
  'Web Design',
  'Full Stack Development',
  'Web Development',
  'App Development',
  'Quality Assurance',
  'System Design & Architecture',
]

const socials = [
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: '#1da1f2',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: '#1877f2',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    color: '#e1306c',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ronamay-0408',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    color: '#f0f6fc',
  },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function Footer() {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <style>{`
        @keyframes footerFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .footer-link {
          transition: all 0.25s ease;
          display: flex; align-items: center; gap: 6px;
          font-size: 13px;
        }
        .footer-link:hover { color: #60a5fa; padding-left: 4px; }
        .footer-link::before {
          content: '▸';
          color: #60a5fa;
          font-size: 10px;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.25s ease;
        }
        .footer-link:hover::before { opacity: 1; transform: translateX(0); }
        .social-btn { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .social-btn:hover { transform: translateY(-4px) scale(1.1); }
      `}</style>

      {/* Top gradient border */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #7c3aed, #60a5fa, #7c3aed, transparent)',
      }} />

      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: 0, left: '10%',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, right: '10%',
          width: '250px', height: '250px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="relative z-10 flex justify-center px-4">
        <div className="max-w-[70rem] w-full">

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 pb-10">

            {/* About */}
            <div style={{ animation: 'footerFadeIn 0.6s ease forwards', animationDelay: '0s', opacity: 0 }}>
              {/* Logo */}
              <div style={{
                fontWeight: 900, fontSize: '28px', marginBottom: '16px',
                background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Georgia', serif",
              }}>RONA</div>

              <p style={{
                color: '#9ca3af', fontSize: '13px',
                lineHeight: 1.7, marginBottom: '20px',
                fontFamily: "'Courier New', monospace",
              }}>
                Feel free to reach out if you'd like to connect, collaborate, or discuss any projects!
              </p>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {socials.map(({ label, href, icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    style={{
                      width: '40px', height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid rgba(255,255,255,0.1)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#9ca3af',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color + '66'; e.currentTarget.style.background = color + '15' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{ animation: 'footerFadeIn 0.6s ease forwards', animationDelay: '0.1s', opacity: 0 }}>
              <h3 style={{
                color: '#f1f5f9', fontWeight: 700, fontSize: '15px',
                marginBottom: '20px', letterSpacing: '0.05em',
                fontFamily: "'Georgia', serif",
              }}>Quick Links</h3>
              <div style={{
                width: '32px', height: '2px',
                background: 'linear-gradient(90deg, #60a5fa, transparent)',
                borderRadius: '2px', marginBottom: '16px',
              }} />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="footer-link"
                      style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div style={{ animation: 'footerFadeIn 0.6s ease forwards', animationDelay: '0.2s', opacity: 0 }}>
              <h3 style={{
                color: '#f1f5f9', fontWeight: 700, fontSize: '15px',
                marginBottom: '20px', letterSpacing: '0.05em',
                fontFamily: "'Georgia', serif",
              }}>Services</h3>
              <div style={{
                width: '32px', height: '2px',
                background: 'linear-gradient(90deg, #7c3aed, transparent)',
                borderRadius: '2px', marginBottom: '16px',
              }} />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                {services.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollTo('services')}
                      className="footer-link"
                      style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div style={{ animation: 'footerFadeIn 0.6s ease forwards', animationDelay: '0.3s', opacity: 0 }}>
              <h3 style={{
                color: '#f1f5f9', fontWeight: 700, fontSize: '15px',
                marginBottom: '20px', letterSpacing: '0.05em',
                fontFamily: "'Georgia', serif",
              }}>Have a Question?</h3>
              <div style={{
                width: '32px', height: '2px',
                background: 'linear-gradient(90deg, #0ea5e9, transparent)',
                borderRadius: '2px', marginBottom: '16px',
              }} />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0 }}>
                {[
                  {
                    href: '#',
                    text: 'Sto. Domingo, Albay 4508',
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
                    color: '#60a5fa',
                  },
                  {
                    href: 'tel:9998563419',
                    text: '999-856-3419',
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
                    color: '#7c3aed',
                  },
                  {
                    href: 'mailto:balangatronamay@gmail.com',
                    text: 'balangatronamay@gmail.com',
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                    color: '#0ea5e9',
                  },
                ].map(({ href, text, icon, color }, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '8px',
                      background: `${color}15`, border: `1px solid ${color}33`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color, flexShrink: 0,
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {icon}
                      </svg>
                    </div>
                    <a href={href} style={{
                      color: '#9ca3af', fontSize: '13px',
                      lineHeight: 1.5, transition: 'color 0.2s ease',
                      textDecoration: 'none',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = color}
                      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                    >{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px', paddingBottom: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '12px',
          }}>
            <p style={{
              color: '#4b5563', fontSize: '12px',
              fontFamily: "'Courier New', monospace",
              letterSpacing: '0.05em',
            }}>
              Copyright © {new Date().getFullYear()}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}>Rona May Balangat</span>
              {' '}— All rights reserved
            </p>
            <p style={{
              color: '#374151', fontSize: '11px',
              fontFamily: "'Courier New', monospace",
              letterSpacing: '0.2em',
            }}>built with React & Tailwind</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer