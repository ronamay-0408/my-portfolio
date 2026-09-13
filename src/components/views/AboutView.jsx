import { useEffect, useState } from 'react'
import { bio, personal, profile, stats } from '../../data/content'

function CountUp({ target }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    let raf
    let start
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1300, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target])

  return <>{n}</>
}

function AboutView({ go }) {
  return (
    <>
      <header className="vhead" style={{ '--i': 0 }}>
        <div>
          <span className="eyebrow">Who I am</span>
          <h2 className="display">About me</h2>
        </div>
      </header>

      <div className="about-wrap" style={{ '--i': 1 }}>
        <figure className="about-photo">
          <img src={profile.photo} alt={profile.name} />
        </figure>

        <div>
          {bio.map((para, i) => (
            <p key={i} className="lede" style={{ marginBottom: 14 }}>{para}</p>
          ))}

          <ul className="info-list" style={{ margin: '18px 0' }}>
            {personal.map((row) => (
              <li key={row.label}>
                <b>{row.label}</b>
                <span>{row.value}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              className="btn btn-primary"
              href={profile.resume}
              download="Rona_May_Balangat_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-download" /> Download CV
            </a>
            <button className="btn btn-ghost" onClick={() => go('contact')}>
              <i className="bi bi-chat-dots" /> Say hello
            </button>
          </div>
        </div>
      </div>

      <div className="stat-grid" style={{ '--i': 2, marginTop: 22 }}>
        {stats.map((s) => (
          <div key={s.label} className="card lift stat">
            <b><CountUp target={s.number} />+</b>
            <small style={{ whiteSpace: 'pre-line' }}>{s.label}</small>
          </div>
        ))}
      </div>
    </>
  )
}

export default AboutView
