function About() {
  return(
    <section className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 dark:border-gray-700 py-24 px-2">
		{/* Content */}
		<div className="max-w-[70rem] w-full items-stretch">
    		<div className="flex flex-row justify-center gap-[20px] w-full">
    			<div className="w-[45%]">
    				<div className="img-about img d-flex">
	    				<div className="img d-flex align-self-stretch align-items-center">
                  			<img src="/contents/ronabg.png" alt="description" />
	    				</div>
    				</div>
    			</div>
    			<div className="w-[55%]">
					<div className="text-left relative mt-5 pl-5">
						<h1
							className="text-gray-300 dark:text-gray-600 absolute top-0 left-1 z-0 leading-none select-none"
							style={{ fontSize: "clamp(80px, 12vw, 140px)", fontWeight: 900 }}
							>
							About
						</h1>
						<h2
							className="text-black text-[50px] font-black dark:text-white relative z-1 top-[-35px]"
						>
							About Me
						</h2>
						<p className="relative z-1 dark:text-white text-md mt-2 text-justify leading-relaxed">I'm an Information Technology graduate with a strong passion for technology and problem-solving. I enjoy creating websites that centralize information and make processes easy and simple for users, helping improve efficiency and accessibility. In my free time, I enjoy cooking and experimenting with new recipes, as well as building custom furniture. I'm always seeking ways to blend creativity with functionality in everything I do.
						</p>
						<ul className="flex flex-col gap-2 text-black dark:text-white pt-6">
							<li className="flex">
								<span className="font-bold w-36">Name :</span>
								<span className="font-normal text-gray-600 dark:text-gray-400">Rona May Balangat</span>
							</li>
							<li className="flex">
								<span className="font-bold w-36">Date of birth :</span>
								<span className="font-normal text-gray-600 dark:text-gray-400">February 28, 2003</span>
							</li>
							<li className="flex">
								<span className="font-bold w-36">Address :</span>
								<span className="font-normal text-gray-600 dark:text-gray-400">Sto. Domingo, Albay</span>
							</li>
							<li className="flex">
								<span className="font-bold w-36">Email :</span>
								<span className="font-normal text-gray-600 dark:text-gray-400">balangatronamay@gmail.com</span>
							</li>
							<li className="flex">
								<span className="font-bold w-36">Phone :</span>
								<span className="font-normal text-gray-600 dark:text-gray-400">999-856-3419</span>
							</li>
						</ul>
					</div>
					<div className="mt-10 pl-5">
						<p className="mb-4 text-xl">
							<span className="text-blue-500 dark:text-blue-400 pr-2" data-number="8">0</span>
							<span className="text-black dark:text-white">Project complete</span>
						</p>
						<p className="mt-12">
							<a href="/resume.pdf" className="font-semibold text-xs text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300 px-10 py-5 rounded-4xl tracking-[0.3em]" target="_blank" rel="noopener noreferrer">
								DOWNLOAD CV
							</a>
						</p>
					</div>
		        </div>
        	</div>
        </div>
    </section>
  )
}
export default About