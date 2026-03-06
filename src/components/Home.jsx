function Home() {
  return (
    <section className="relative min-h-screen flex pt-60 justify-center bg-white dark:bg-gray-900 dark:border-gray-700">

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <span className="text-xl text-gray-500 dark:text-gray-400 tracking-[0.5em]">HELLO!</span>
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
          I'm <span className="text-blue-600 dark:text-blue-400">Rona May Balangat</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 py-2">
          Web Developer / Full Stack Developer
        </h2>
        <div className="flex gap-4 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-4xl transition-colors"
          >
            Hire me
          </a>
          <a
            href="#projects-section"
            className="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-4xl transition-colors"
          >
            My works
          </a>
        </div>
      </div>

    </section>
  )
}

export default Home