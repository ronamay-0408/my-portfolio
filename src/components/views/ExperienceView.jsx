import { experience, profile } from '../../data/content'

function ExperienceView() {
  return (
    <>
      <header className="vhead" style={{ '--i': 0 }}>
        <div>
          <span className="eyebrow">Experience &amp; education</span>
          <h2 className="display">The road so far</h2>
          <p className="lede">
            From a BSIT degree and a university-wide capstone to shipping production systems at Bicol University&rsquo;s ICT Office.
          </p>
        </div>
        <a
          className="btn btn-ghost"
          href={profile.resume}
          download="Rona_May_Balangat_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-file-earmark-text" /> Full CV
        </a>
      </header>

      <div className="tl" style={{ '--i': 1 }}>
        {experience.map((item) => (
          <div key={item.role + item.period} className="tl-item">
            <div className="card lift tl-card">
              <div className="row">
                <div>
                  <p className="period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="org">{item.org}</p>
                </div>
                <span className="tl-type">{item.type}</span>
              </div>
              <p>{item.description}</p>
              <div className="proj-tech">
                {item.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ExperienceView
