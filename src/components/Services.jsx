function Services() {
  return(
    <section className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 dark:border-gray-700 pb-10 px-2">
		{/* Content */}
        <div className="max-w-[70rem] w-full items-stretch">
            <div className="relative flex justify-center items-center pt-5 pb-10">
                <h1
                    className="text-gray-300 dark:text-gray-600 absolute z-0 top-5"
                    style={{ fontSize: "clamp(80px, 12vw, 140px)", fontWeight: 900 }}
                >
                    Services
                </h1>

                <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
                    Services
                </h2>
            </div>
            <div className="relative z-10 text-center px-4">
                <p className="text-gray-600 dark:text-gray-300">Fully dedicated to honing my skills as a full-stack developer. I’m passionate about tackling complex projects and always strive for excellence in everything I do. Whether it's coding or my personal hobbies, I approach each task with commitment and focus.</p>
            </div>

            <div className="grid gap-x-8 gap-y-8 grid-cols-1 xs:sm:gap-y-2 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-3 pt-20">
                <div className="cursor-pointer bg-gray-800 px-6 pt-6 pb-10 group hover:bg-blue-400 transition-colors duration-300">
                    <a className="flex flex-col items-center text-white">
                        <span className="text-[60px] text-blue-400 group-hover:text-white transition-colors duration-300 mb-2">
                            <i className="bi bi-brush"></i>
                        </span>
                        <h3 className="mb-3 uppercase text-sm font-bold tracking-[0.3em] group-hover:text-black transition-colors duration-300">Web Design</h3>
                        <div className="w-12 h-[1px] bg-blue-400 group-hover:bg-black transition-colors duration-300"></div>
                    </a>
                </div>
                <div className="cursor-pointer bg-gray-800 px-6 pt-6 pb-10 group hover:bg-blue-400 transition-colors duration-300">
                    <a className="flex flex-col items-center text-white">
                        <span className="text-[60px] text-blue-400 group-hover:text-white transition-colors duration-300 mb-2">
                            <i class="bi bi-stack"></i>
                        </span>
                        <h3 className="mb-3 uppercase text-sm font-bold tracking-[0.3em] group-hover:text-black transition-colors duration-300">Full Stack Developer</h3>
                        <div className="w-12 h-[1px] bg-blue-400 group-hover:bg-black transition-colors duration-300"></div>
                    </a>
                </div>
                <div className="cursor-pointer bg-gray-800 px-6 pt-6 pb-10 group hover:bg-blue-400 transition-colors duration-300">
                    <a className="flex flex-col items-center text-white">
                        <span className="text-[60px] text-blue-400 group-hover:text-white transition-colors duration-300 mb-2">
                            <i class="bi bi-lightbulb-fill"></i>
                        </span>
                        <h3 className="mb-3 uppercase text-sm font-bold tracking-[0.3em] group-hover:text-black transition-colors duration-300">Web Developer</h3>
                        <div className="w-12 h-[1px] bg-blue-400 group-hover:bg-black transition-colors duration-300"></div>
                    </a>
                </div>
                <div className="cursor-pointer bg-gray-800 px-6 pt-6 pb-10 group hover:bg-blue-400 transition-colors duration-300 mb-2">
                    <a className="flex flex-col items-center text-white">
                        <span className="text-[60px] text-blue-400 group-hover:text-white transition-colors duration-300">
                            <i class="bi bi-google-play"></i>
                        </span>
                        <h3 className="mb-3 uppercase text-sm font-bold tracking-[0.3em] group-hover:text-black transition-colors duration-300">App Developing</h3>
                        <div className="w-12 h-[1px] bg-blue-400 group-hover:bg-black transition-colors duration-300"></div>
                    </a>
                </div>
                <div className="cursor-pointer bg-gray-800 px-6 pt-6 pb-10 group hover:bg-blue-400 transition-colors duration-300 mb-2">
                    <a className="flex flex-col items-center text-white">
                        <span className="text-[60px] text-blue-400 group-hover:text-white transition-colors duration-300">
                            <i class="bi bi-shield-check"></i>
                        </span>
                        <h3 className="mb-3 uppercase text-sm font-bold tracking-[0.3em] group-hover:text-black transition-colors duration-300">Quality Assurance</h3>
                        <div className="w-12 h-[1px] bg-blue-400 group-hover:bg-black transition-colors duration-300"></div>
                    </a>
                </div>
                <div className="cursor-pointer bg-gray-800 px-6 pt-6 pb-10 group hover:bg-blue-400 transition-colors duration-300 mb-2">
                    <a className="flex flex-col items-center text-white">
                        <span className="text-[60px] text-blue-400 group-hover:text-white transition-colors duration-300">
                            <i class="bi bi-diagram-3"></i>
                        </span>
                        <h3 className="mb-3 uppercase text-sm font-bold tracking-[0.3em] group-hover:text-black transition-colors duration-300 text-center">System Design & Architecture</h3>
                        <div className="w-12 h-[1px] bg-blue-400 group-hover:bg-black transition-colors duration-300"></div>
                    </a>
                </div>
            </div>
            
        </div>
    </section>
  )
}
export default Services