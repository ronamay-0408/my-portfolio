function Contact() {
  return(
    <section className="relative min-h-screen flex justify-center bg-white dark:bg-gray-900 dark:border-gray-700 pb-10">
        <div className="max-w-[70rem] w-full items-stretch">
            <div className="relative flex justify-center items-center pt-5 pb-8">
                <h1
                    className="text-gray-300 dark:text-gray-600 absolute z-0 top-4"
                    style={{ fontSize: "clamp(80px, 12vw, 140px)", fontWeight: 900 }}
                >
                    Contact
                </h1>

                <h2 className="text-black text-[50px] font-bold dark:text-white relative z-10">
                    Contact Me
                </h2>
            </div>
            <div className="relative z-10 text-center px-4">
                <p className="text-gray-600 dark:text-gray-300 max-w-[40em] w-full mx-auto">
                    Feel free to reach out if you'd like to connect, collaborate, or discuss any projects! 
                    You can contact me at balangatronamay@gmail.com or connect with me on ronamay-0408 github account.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-20">
                <div className="flex flex-col items-center text-center px-6 py-8">
                    <div className="text-[40px] bg-gray-700 shadow-xl rounded-full w-20 h-20 flex items-center justify-center text-xl mb-3 text-blue-400">
                        <i className="bi bi-signpost-2-fill"></i>
                    </div>

                    <p className="text-black dark:text-white text-md font-semibold p-2">Address</p>
                    <p className="text-gray-600 dark:text-gray-300 p-2">Sto. Domingo, Albay 4508</p>
                </div>
                <div className="flex flex-col items-center text-center px-6 py-8">
                    <div className="text-[40px] bg-gray-700 shadow-xl rounded-full w-20 h-20 flex items-center justify-center text-xl mb-3 text-blue-400">
                        <i class="bi bi-telephone-fill"></i>
                    </div>

                    <p className="text-black dark:text-white text-md font-semibold p-2">Contact Number</p>
                    <p className="text-gray-600 dark:text-gray-300 p-2">999-856-3419</p>
                </div>
                <div className="flex flex-col items-center text-center px-6 py-8">
                    <div className="text-[40px] bg-gray-700 shadow-xl rounded-full w-20 h-20 flex items-center justify-center text-xl mb-3 text-blue-400">
                        <i class="bi bi-envelope-at"></i>
                    </div>

                    <p className="text-black dark:text-white text-md font-semibold p-2">Email Address</p>
                    <p className="text-gray-600 dark:text-gray-300 p-2">balangatronamay@gmail.com</p>
                </div>
                <div className="flex flex-col items-center text-center px-6 py-8">
                    <div className="text-[40px] bg-gray-700 shadow-xl rounded-full w-20 h-20 flex items-center justify-center text-xl mb-3 text-blue-400">
                        <i class="bi bi-browser-chrome"></i>
                    </div>

                    <p className="text-black dark:text-white text-md font-semibold p-2">Website</p>
                    <p className="text-gray-600 dark:text-gray-300 p-2">ronamay-0408.github.io</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-5 w-full mt-20">
  
                {/* Image */}
                <div className="w-full md:w-[45%] flex items-center justify-center">
                    <img
                    src="/contents/ronabg.png"
                    alt="description"
                    className="w-full h-auto object-cover rounded-xl"
                    />
                </div>

                {/* Form */}
                <div className="w-full md:w-[55%]">
                    <form className="bg-gray-800 p-8 md:px-15 md:py-21 flex flex-col gap-4">
                        <div>
                            <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <textarea
                            rows="7"
                            placeholder="Message"
                            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                            />
                        </div>
                        <div>
                            <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 w-full"
                            >
                            Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    </section>
  )
}
export default Contact