import { nav, profile, socials } from '../data/content'

function Sidebar({ active, go, isDark, setIsDark }) {
  return (
    <aside className="sidebar glass">
      {/* ── Identity ─────────────────────────── */}
      <div className="side-profile">
        <div className="avatar-ring">
          <img src={profile.photo} alt={profile.name} />
        </div>
        <div>
          <h1 className="side-name">{profile.name}</h1>
          <p className="side-handle">{profile.handle}</p>
        </div>
      </div>

      <div className="side-socials">
        {socials.map((s) => (
          <a
            key={s.label}
            className="icon-btn"
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
          >
            <i className={`bi ${s.icon}`} />
          </a>
        ))}
      </div>

      <div className="side-rule" />

      {/* ── Navigation ───────────────────────── */}
      <nav className="side-nav">
        {nav.map((item) => {
          const on = active === item.id
          return (
            <button
              key={item.id}
              className={`nav-item${on ? ' active' : ''}`}
              onClick={() => go(item.id)}
              aria-current={on ? 'page' : undefined}
            >
              {on && <span className="nav-pill" />}
              <i className={`bi ${item.icon}`} />
              <span className="nav-label">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* ── Footer ───────────────────────────── */}
      <div className="side-foot">
        <a
          className="btn btn-primary"
          href={profile.resume}
          download="Rona_May_Balangat_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-download" /> Download CV
        </a>

        <button
          className="theme-row"
          onClick={() => setIsDark((v) => !v)}
          aria-label="Toggle colour theme"
        >
          <span>{isDark ? 'dark' : 'light'} mode</span>
          <span className={`switch${isDark ? ' on' : ''}`}>
            <b><i className={`bi ${isDark ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`} /></b>
          </span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
