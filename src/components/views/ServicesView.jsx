import { services } from '../../data/content'

function ServicesView({ go }) {
  return (
    <>
      <header className="vhead" style={{ '--i': 0 }}>
        <div>
          <span className="eyebrow">What I offer</span>
          <h2 className="display">Services</h2>
          <p className="lede">
            I take on complex projects and see them through, whether that&rsquo;s one screen or a system the whole
            campus depends on.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => go('contact')}>
          Start a project <i className="bi bi-arrow-up-right" />
        </button>
      </header>

      <div className="svc-grid" style={{ '--i': 1 }}>
        {services.map((s, i) => (
          <article key={s.title} className="card lift svc">
            <span className="no">0{i + 1}</span>
            <span className="svc-ico"><i className={`bi ${s.icon}`} /></span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </>
  )
}

export default ServicesView
