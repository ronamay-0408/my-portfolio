function Design() {
  return(
    <section className="relative min-h-[200px] bg-white dark:bg-gray-900 dark:border-gray-700 pb-10">
        <div className="flex justify-center px-2">
            <div className="max-w-[70rem] w-full z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center bg-gray-800 rounded-xl px-6 py-8">
                        <h1 className="text-blue-400 text-[30px] font-semibold mb-2">0</h1>
                        <p className="text-white text-md">Awards</p>
                    </div>
                    <div className="text-center bg-gray-800 rounded-xl px-6 py-8">
                        <h1 className="text-blue-400 text-[30px] font-semibold mb-2">7</h1>
                        <p className="text-white text-md">Complete Projects</p>
                    </div>
                    <div className="text-center bg-gray-800 rounded-xl px-6 py-8">
                        <h1 className="text-blue-400 text-[30px] font-semibold mb-2">2</h1>
                        <p className="text-white text-md">Happy Customers</p>
                    </div>
                    <div className="text-center bg-gray-800 rounded-xl px-6 py-8">
                        <h1 className="text-blue-400 text-[30px] font-semibold mb-2">100</h1>
                        <p className="text-white text-md">Cups of coffee</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Hire Me Banner */}
        <div
        className="relative mt-[-4em] overflow-hidden flex items-center justify-center text-center py-20 px-6"
        style={{
            backgroundImage: 'url(/contents/bg_1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '550px',
        }}
        >
        <div>
            <h2 className="text-white font-black text-[50px] mb-10">I'm <span className="text-blue-400">Available</span> for Web <br />Development</h2>
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-4xl transition-colors tracking-[0.1em]"
            >
                HIRE ME
            </a>
        </div>
        </div>
    </section>
  )
}
export default Design