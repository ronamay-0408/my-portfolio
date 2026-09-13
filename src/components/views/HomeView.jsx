import {
  dailyDrivers, experience, profile, projects, services, skills, stats,
} from '../../data/content'

const Tile = ({ span, onClick, icon, title, sub, children }) => (
  <div
    className="card lift tile"
    style={{ gridColumn: `span ${span}` }}
    onClick={onClick}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
    role="button"
    tabIndex={0}
  >
    <span className="arrow"><i className="bi bi-arrow-up-right" /></span>
    <div className="tile-head">
      <span className="card-ico"><i className={`bi ${icon}`} /></span>
      <h3>{title}</h3>
    </div>
    <p className="sub">{sub}</p>
    {children}
  </div>
)

function HomeView({ go }) {
  const topSkills = skills.slice(0, 4)

  return (
    <div className="home">
      {/* ── Hero ─────────────────────────────── */}
      <section className="hero" style={{ '--i': 0 }}>
        <div>
          <span className="eyebrow">Hello, I&rsquo;m Rona May</span>
          <h1 className="display" style={{ marginTop: 12 }}>
            {profile.headline[0]}{' '}
            <span className="accented">{profile.headline[1]}</span>
          </h1>
          <p className="lede">{profile.tagline}</p>
        </div>
      </section>

      {/* ── Daily drivers ────────────────────── */}
      <section className="tools" style={{ '--i': 1 }}>
        <div className="tools-head">
          <small>Daily drivers</small>
          <strong>Tools I work with</strong>
        </div>
        <div className="tools-list">
          {dailyDrivers.map((t) => (
            <span key={t.name}>
              <img src={t.logo} alt="" /> {t.name}
            </span>
          ))}
        </div>
      </section>

      {/* ── Bento ────────────────────────────── */}
      <section className="bento" style={{ '--i': 2 }}>
        <Tile
          span={6}
          onClick={() => go('projects')}
          icon="bi-folder2-open"
          title="Projects"
          sub="Systems, websites and apps built to solve real problems."
        >
          <div className="stack-shots">
            {projects.slice(0, 3).map((p) => (
              <img key={p.id} src={p.cover} alt={p.title} loading="lazy" />
            ))}
          </div>
        </Tile>

        <Tile
          span={3}
          onClick={() => go('about')}
          icon="bi-person"
          title="About"
          sub="Who I am and how I work."
        >
          <div className="tile-photo">
            <img src={profile.photo} alt={profile.name} />
          </div>
        </Tile>

        <Tile
          span={3}
          onClick={() => go('skills')}
          icon="bi-stack"
          title="Skills"
          sub="The stack I reach for."
        >
          <ul className="mini-list">
            {topSkills.map((s) => (
              <li key={s.name}>
                <img src={s.logo} alt="" style={{ width: 15, height: 15, objectFit: 'contain' }} />
                {s.name}
                <em>{s.percent}%</em>
              </li>
            ))}
            <li style={{ color: 'var(--accent-2)' }}>
              +{skills.length - topSkills.length} more
            </li>
          </ul>
        </Tile>

        <Tile
          span={3}
          onClick={() => go('experience')}
          icon="bi-briefcase"
          title="Experience"
          sub="Where I&rsquo;ve worked and studied."
        >
          <div className="stat-strip">
            <div>
              <b>{experience[0].period.match(/\d{4}/)?.[0]}</b>
              <small>Started at {experience[0].org}</small>
            </div>
            <div>
              <b>{experience.length}</b>
              <small>Roles &amp; milestones</small>
            </div>
          </div>
        </Tile>

        <Tile
          span={4}
          onClick={() => go('services')}
          icon="bi-grid-1x2"
          title="Services"
          sub="What I can build for you."
        >
          <ul className="mini-list">
            {services.slice(0, 4).map((s, i) => (
              <li key={s.title}>
                <i className={`bi ${s.icon}`} style={{ color: 'var(--accent-2)' }} />
                {s.title}
                <em>0{i + 1}</em>
              </li>
            ))}
          </ul>
        </Tile>

        <Tile
          span={5}
          onClick={() => go('contact')}
          icon="bi-chat-dots"
          title="Contact"
          sub="Open to work. Tell me what you need built."
        >
          <div className="stat-strip">
            {stats.map((s) => (
              <div key={s.label}>
                <b>{s.number}+</b>
                <small style={{ whiteSpace: 'pre-line' }}>{s.label}</small>
              </div>
            ))}
          </div>
        </Tile>
      </section>
    </div>
  )
}

export default HomeView
