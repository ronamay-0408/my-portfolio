function Footer() {
  return(
    <section className="relative min-h-auto flex justify-center bg-white dark:bg-gray-900 dark:border-gray-700 pb-10">
        <div className="max-w-[70rem] w-full items-stretch">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-20">
                <div className="flex flex-col px-6 py-8">
                    <h1 className="text-black dark:text-white text-[20px] font-bold mb-8">About</h1>
                    <div>
                        <p className="text-black dark:text-white text-sm mb-8">Feel free to reach out if you'd like to connect</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="cursor-pointer text-[20px] bg-gray-700 shadow-xl rounded-full w-12 h-12 flex items-center justify-center text-xl mb-3 text-blue-400">
                            <i class="bi bi-twitter"></i>
                        </div>
                        <div className="cursor-pointer text-[20px] bg-gray-700 shadow-xl rounded-full w-12 h-12 flex items-center justify-center text-xl mb-3 text-blue-400">
                            <i class="bi bi-facebook"></i>
                        </div>
                        <div className="cursor-pointer text-[20px] bg-gray-700 shadow-xl rounded-full w-12 h-12 flex items-center justify-center text-xl mb-3 text-blue-400">
                            <i class="bi bi-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-6 py-8">
                    <h1 className="text-black dark:text-white text-[20px] font-bold mb-8">Links</h1>
                    <div>
                        <ul className="space-y-2 text-black dark:text-white">
                            <li><a href="#home-section"><i className="bi bi-arrow-right mr-1"></i>Home</a></li>
                            <li><a href="#about-section"><i className="bi bi-arrow-right mr-1"></i>About</a></li>
                            <li><a href="#services-section"><i className="bi bi-arrow-right mr-1"></i>Services</a></li>
                            <li><a href="#projects-section"><i className="bi bi-arrow-right mr-1"></i>Projects</a></li>
                            <li><a href="#contact-section"><i className="bi bi-arrow-right mr-1"></i>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col px-6 py-8">
                    <h1 className="text-black dark:text-white text-[20px] font-bold mb-8">Services</h1>
                    <div>
                        <ul className="space-y-2 text-black dark:text-white">
                            <li><a href="#"><i className="bi bi-arrow-right mr-1"></i>Web Design</a></li>
                            <li><a href="#"><i className="bi bi-arrow-right mr-1"></i>Full Stack Development</a></li>
                            <li><a href="#"><i className="bi bi-arrow-right mr-1"></i>Web Development</a></li>
                            <li><a href="#"><i className="bi bi-arrow-right mr-1"></i>App Development</a></li>
                            <li><a href="#"><i className="bi bi-arrow-right mr-1"></i>Quality Assurance</a></li>
                            <li><a href="#"><i className="bi bi-arrow-right mr-1"></i>System Design and Architecture</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col px-6 py-8">
                    <h1 className="text-black dark:text-white text-[20px] font-bold mb-8">Have a Questions?</h1>
                    <div>
                        <ul className="space-y-3 text-black dark:text-white">
                            <li className="flex items-center gap-2">
                                <i className="bi bi-geo-alt"></i>
                                <span className="text-sm">Sto. Domingo, Albay 4508</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <i className="bi bi-telephone-fill"></i>
                                <a className="text-sm" href="tel:9998563419">999-856-3419</a>
                            </li>

                            <li className="flex items-center gap-2">
                                <i className="bi bi-envelope-at-fill"></i>
                                <a className="text-sm" href="mailto:balangatronamay@gmail.com">
                                balangatronamay@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-black dark:text-white mt-10">
                <p>
                    Copyright © {new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </div>
    
    </section>
  )
}
export default Footer