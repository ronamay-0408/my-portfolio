import { useState } from 'react'
import { skills } from '../../data/content'

const groups = ['All', ...new Set(skills.map((s) => s.category))]

function SkillsView() {
  const [filter, setFilter] = useState('All')

  const shown = filter === 'All' ? skills : skills.filter((s) => s.category === filter)

  return (
    <>
      <header className="vhead" style={{ '--i': 0 }}>
        <div>
          <span className="eyebrow">What I work with</span>
          <h2 className="display">Tech Stack</h2>
          <p className="lede">
            Strongest on the PHP&nbsp;/&nbsp;Laravel side with a solid front-end half, and always adding to it.
          </p>
        </div>
      </header>

      <div style={{ '--i': 1, display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
        {groups.map((g) => (
          <button
            key={g}
            className={`chip${filter === g ? ' solid' : ''}`}
            onClick={() => setFilter(g)}
            style={{ cursor: 'pointer' }}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="skill-grid" style={{ '--i': 2 }}>
        {shown.map((s) => (
          <div key={s.name} className="card lift skill">
            <span className="skill-logo">
              <img src={s.logo} alt="" />
            </span>
            <div className="skill-meta">
              <b>{s.name}</b>
              <small>{s.category}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SkillsView
