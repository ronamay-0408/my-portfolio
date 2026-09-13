import { useCallback, useEffect, useState } from 'react'
import { lab, projects } from '../../data/content'

function Lightbox({ project, onClose }) {
  const [i, setI] = useState(0)
  const shots = project.screenshots
  const prev = useCallback(() => setI((c) => (c - 1 + shots.length) % shots.length), [shots.length])
  const next = useCallback(() => setI((c) => (c + 1) % shots.length), [shots.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="lb-panel glass" onClick={(e) => e.stopPropagation()}>
        <div className="lb-top">
          <span className="card-ico"><i className="bi bi-window-stack" /></span>
          <div>
            <h3>{project.title}</h3>
            <p className="lb-cat">{project.category}</p>
          </div>
          <button className="icon-btn" style={{ marginLeft: 'auto' }} onClick={onClose} aria-label="Close">
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="lb-stage">
          <img key={i} src={shots[i]} alt={`${project.title} screenshot ${i + 1}`} />
          {shots.length > 1 && (
            <>
              <button className="lb-nav prev" onClick={prev} aria-label="Previous">
                <i className="bi bi-chevron-left" />
              </button>
              <button className="lb-nav next" onClick={next} aria-label="Next">
                <i className="bi bi-chevron-right" />
              </button>
              <span className="lb-count">{i + 1} / {shots.length}</span>
            </>
          )}
        </div>

        {shots.length > 1 && (
          <div className="lb-thumbs">
            {shots.map((src, n) => (
              <img
                key={src}
                src={src}
                alt=""
                className={n === i ? 'on' : ''}
                onClick={() => setI(n)}
              />
            ))}
          </div>
        )}

        <div className="lb-foot">
          <p className="lede" style={{ fontSize: 13.5 }}>{project.description}</p>
          <div className="proj-tech" style={{ marginTop: 12 }}>
            {project.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsView() {
  const [active, setActive] = useState(null)

  return (
    <>
      <header className="vhead" style={{ '--i': 0 }}>
        <div>
          <span className="eyebrow">Selected work</span>
          <h2 className="display">Projects</h2>
          <p className="lede">
            Real-world challenges, solved end to end, from database schema to the screen people actually use.
          </p>
        </div>
      </header>

      <div className="proj-grid" style={{ '--i': 1 }}>
        {projects.map((p) => (
          <article
            key={p.id}
            className="card lift proj"
            onClick={() => setActive(p)}
            onKeyDown={(e) => { if (e.key === 'Enter') setActive(p) }}
            role="button"
            tabIndex={0}
          >
            <div className="proj-img">
              <img src={p.cover} alt={p.title} loading="lazy" />
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p className="proj-cat">{p.category}</p>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tech">
                {p.tech.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
              </div>
              <span className="proj-open">
                View {p.screenshots.length} screenshot{p.screenshots.length > 1 ? 's' : ''}
                <i className="bi bi-arrow-right" />
              </span>
            </div>
          </article>
        ))}
      </div>

      <section style={{ '--i': 2, marginTop: 28 }}>
        <span className="eyebrow">Side experiments</span>
        <h3 className="display" style={{ fontSize: 24, margin: '10px 0 14px' }}>The Lab</h3>
        <div className="lab-grid">
          {lab.map((item) => (
            <figure key={item.title} className="lab">
              <img src={item.img} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {active && <Lightbox project={active} onClose={() => setActive(null)} />}
    </>
  )
}

export default ProjectsView
