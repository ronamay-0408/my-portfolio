import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Design from './components/Design'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return true // dark by default
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Home />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Design />
      <Contact />
      <Footer />
    </>
  )
}

export default App