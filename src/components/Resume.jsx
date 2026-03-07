function Resume() {
  return(
    <section className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 dark:border-gray-700 pb-24 px-2">
		{/* Content */}
        <div className="max-w-[70rem] w-full items-stretch">
            <div className="relative flex justify-center items-center pt-5 pb-10">
                <h1
                    className="text-gray-300 dark:text-gray-600 absolute z-0 top-5"
                    style={{ fontSize: "clamp(80px, 12vw, 140px)", fontWeight: 900 }}
                >
                    Resume
                </h1>

                <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
                    Resume
                </h2>
            </div>
            <div className="relative z-10 text-center px-4">
                <p className="text-gray-600 dark:text-gray-300">I’m always eager to learn, grow, and connect with others who share similar passions. Whether it’s discussing the latest in tech, trading cooking tips, or sharing furniture design ideas, I love exchanging knowledge and experiences!</p>
            </div>
            
            <div className="mt-10 flex flex-col gap-6">
                <div className="bg-gray-800 px-6 py-4 rounded-sm"> 
                    <p className="text-blue-400 font-bold text-2xl">2025-Present</p>
                    <h2 className="text-white text-xl font-normal dark:text-white mt-2">Junior Programmer</h2>
                    <p className="text-gray-400 uppercase text-sm tracking-[0.3em] mt-2 font-semibold">Bicol University – Information Communications Technology Office (ICTO)</p>
                    <p className="text-white mt-4 text-gray-600 dark:text-gray-300 text-justify">
                        As a Junior Programmer at Bicol University’s Information Communications Technology Office (ICTO), I am responsible for developing and maintaining software applications that enhance the university's digital infrastructure. I collaborate with cross-functional teams to design, implement, and optimize solutions that improve user experience and operational efficiency. My role involves coding, testing, and debugging applications while adhering to best practices in software development. I am committed to delivering high-quality code and continuously learning new technologies to contribute effectively to the ICTO's mission of providing innovative IT solutions for the university community.
                    </p>
                </div>
                <div className="bg-gray-800 px-6 py-4 rounded-sm"> 
                    <p className="text-blue-400 font-bold text-2xl">2024-2025</p>
                    <h2 className="text-white text-xl font-normal dark:text-white mt-2">Full Stack Developer</h2>
                    <p className="text-gray-400 uppercase text-sm tracking-[0.3em] mt-2 font-semibold">Bicol University (Capstone Project)</p>
                    <p className="text-white mt-4 text-gray-600 dark:text-gray-300 text-justify">Worked on BUsina, a full-scale vehicle registration and security system developed for the entire Bicol University. This project showcases my full-stack development skills, combining user management, system security, and data processing into a unified platform. BUsina is designed to streamline vehicle entry and exit while enhancing campus-wide safety and efficiency. I'm passionate about building practical, end-to-end solutions that solve real-world problems through technology.
                    </p>
                </div>
                <div className="bg-gray-800 px-6 py-4 rounded-sm"> 
                    <p className="text-blue-400 font-bold text-2xl">2021-2025</p>
                    <h2 className="text-white text-xl font-normal dark:text-white mt-2">Information Technology Degree</h2>
                    <p className="text-gray-400 uppercase text-sm tracking-[0.3em] mt-2 font-semibold">Bicol University (BSIT)</p>
                    <p className="text-white mt-4 text-gray-600 dark:text-gray-300 text-justify">Specializing in developing solutions that bridge the gap between technology and real-world applications. Beyond my studies, I enjoy cooking and crafting custom furniture, always exploring ways to merge creativity with technical skills.
                    </p>
                </div>
            </div>
            <div className="mt-10 relative flex justify-center items-center">
                <a href="/resume.pdf" className="text-xs text-white font-semibold bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300 px-10 py-5 rounded-4xl tracking-[0.3em]" target="_blank" rel="noopener noreferrer">
                    DOWNLOAD CV
                </a>
            </div>
        </div>
    </section>
  )
}
export default Resume