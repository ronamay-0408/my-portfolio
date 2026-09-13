import { useCallback, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import HomeView from './components/views/HomeView'
import ProjectsView from './components/views/ProjectsView'
import SkillsView from './components/views/SkillsView'
import ExperienceView from './components/views/ExperienceView'
import ServicesView from './components/views/ServicesView'
import AboutView from './components/views/AboutView'
import ContactView from './components/views/ContactView'
import { nav } from './data/content'

const views = {
  home: HomeView,
  projects: ProjectsView,
  skills: SkillsView,
  experience: ExperienceView,
  services: ServicesView,
  about: AboutView,
  contact: ContactView,
}

const LEAVE_MS = 200

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })
  const [section, setSection] = useState('home')
  const [leaving, setLeaving] = useState(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Swap views: sink the old one out, then rise the new one in.
  const go = useCallback((id) => {
    if (id === section || leaving) return
    setLeaving(id)
  }, [section, leaving])

  useEffect(() => {
    if (!leaving) return
    const t = setTimeout(() => {
      setSection(leaving)
      setLeaving(null)
      // Desktop scrolls inside .stage-body; mobile scrolls the whole page
      // (the sidebar sticks above it) — reset both or a mobile nav jump
      // lands mid-scroll into the new section under the sticky sidebar.
      document.querySelector('.stage-body')?.scrollTo({ top: 0 })
      window.scrollTo({ top: 0 })
    }, LEAVE_MS)
    return () => clearTimeout(t)
  }, [leaving])

  const View = views[section]
  const meta = nav.find((n) => n.id === section)

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <i /><i /><i />
        <span className="grain" />
      </div>

      <div className="app">
        <Sidebar active={section} go={go} isDark={isDark} setIsDark={setIsDark} />

        <main className="stage glass">
          <header className="stage-top">
            <div className="crumb">
              <p className="now">
                <b>{meta.label}</b>
                {section !== 'home' && <>, {meta.blurb}</>}
              </p>
            </div>
            <a
              className="btn btn-primary desk-only"
              href="#contact"
              onClick={(e) => { e.preventDefault(); go('contact') }}
            >
              Get in touch <i className="bi bi-arrow-up-right" />
            </a>
          </header>

          <div className="stage-body">
            <div key={section} className={`view${leaving ? ' leaving' : ''}`}>
              <View go={go} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
