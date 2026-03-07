import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',     href: 'home' },
  { label: 'About',    href: 'about' },
  { label: 'Resume',   href: 'resume' },
  { label: 'Services', href: 'services' },
  { label: 'Skills',   href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact',  href: 'contact' },
]

function Navbar({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActive]  = useState('home')
  const [scrolled, setScrolled]     = useState(false)

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const observers = []
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef[0]) setActive(href)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isScrollingRef = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      setActive(id)
      isScrollingRef[1](true)
      el.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => isScrollingRef[1](false), 1000)
    }
    setMenuOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes navFadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes linkFadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nav-link-item {
          position: relative;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #7c3aed, #0ea5e9);
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-item:hover::after,
        .nav-link-item.active::after {
          width: 100%;
        }
        .nav-link-item.active {
          color: #60a5fa;
        }
        .dark-toggle {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .dark-toggle:hover {
          transform: rotate(20deg) scale(1.15);
        }
        .mobile-link {
          animation: linkFadeIn 0.3s ease forwards;
          opacity: 0;
        }
      `}</style>

      <header
        style={{
          animation: 'navFadeDown 0.5s ease',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.12)' : 'none',
          padding: scrolled ? '10px 8px' : '16px 8px',
        }}
        className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900 backdrop-blur-md border-b border-transparent dark:border-gray-800"
      >
        <nav className="max-w-[70rem] w-full mx-auto flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            style={{ transition: 'all 0.3s ease' }}
            className="text-[25px] font-bold text-gray-900 dark:text-white focus:outline-none hover:opacity-80"
          >
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>RONA</span>
          </button>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`nav-link-item text-sm font-medium focus:outline-none
                  ${activeSection === href
                    ? 'active text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {label}
              </button>
            ))}

            {/* Dark/Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="dark-toggle cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile right side: toggle + hamburger */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="dark-toggle cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div style={{
                width: '20px', height: '14px',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <span style={{
                  display: 'block', height: '2px', borderRadius: '2px',
                  background: 'currentColor',
                  transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                  transition: 'transform 0.3s ease',
                }} />
                <span style={{
                  display: 'block', height: '2px', borderRadius: '2px',
                  background: 'currentColor',
                  opacity: menuOpen ? 0 : 1,
                  transition: 'opacity 0.2s ease',
                }} />
                <span style={{
                  display: 'block', height: '2px', borderRadius: '2px',
                  background: 'currentColor',
                  transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                  transition: 'transform 0.3s ease',
                }} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl sm:hidden flex flex-col"
        style={{
          animation: menuOpen ? 'mobileMenuIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: menuOpen ? 'none' : 'transform 0.3s ease',
          borderLeft: '1px solid rgba(124,58,237,0.2)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <span style={{
            fontWeight: 800, fontSize: '18px',
            background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>RONA</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 focus:outline-none"
          >✕</button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="mobile-link text-left py-3 px-4 rounded-lg font-medium focus:outline-none transition-colors"
              style={{
                animationDelay: `${i * 60}ms`,
                color: activeSection === href ? '#60a5fa' : undefined,
                background: activeSection === href ? 'rgba(96,165,250,0.08)' : 'transparent',
              }}
              onMouseEnter={e => { if (activeSection !== href) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { if (activeSection !== href) e.currentTarget.style.background = 'transparent' }}
            >
              <span className={activeSection === href ? 'text-blue-400' : 'text-gray-700 dark:text-gray-200'}>
                {activeSection === href && <span style={{ marginRight: '8px', color: '#7c3aed' }}>▸</span>}
                {label}
              </span>
            </button>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="mt-auto px-6 py-6 border-t border-gray-100 dark:border-gray-800">
          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '10px', letterSpacing: '0.2em',
            color: '#6b7280', textTransform: 'uppercase',
          }}>// portfolio</p>
        </div>
      </div>
    </>
  )
}

export default Navbar