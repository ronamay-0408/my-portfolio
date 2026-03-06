function About() {
  return(
    <section className="relative min-h-screen flex pt-60 justify-center bg-white dark:bg-gray-900 dark:border-gray-700">

      {/* Content */}
      <div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 col-lg-5 d-flex">
    				<div className="img-about img d-flex align-items-stretch">
    					<div className="overlay"></div>
	    				<div className="img d-flex align-self-stretch align-items-center">
                  <img src="/contents/ronabg.png" alt="description" />
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		          	<h1 className="big">About</h1>
		            <h2 className="mb-4">About Me</h2>
		            <p>I'm a recent Information Technology graduate with a strong passion for technology 
						and problem-solving. In my free time, I enjoy cooking and experimenting with 
						new recipes, as well as building custom furniture. I'm always seeking ways 
						to blend creativity with functionality in everything I do.</p>
		            <ul className="about-info mt-4 px-md-0 px-2">
		            	<li className="d-flex"><span>Name:</span> <span>Rona May Balangat</span></li>
		            	<li className="d-flex"><span>Date of birth:</span> <span>February 28, 2003</span></li>
		            	<li className="d-flex"><span>Address:</span> <span>Sto.Domingo, Albay</span></li>
		            	<li className="d-flex"><span>Email:</span> <span>balangatronamay@gmail.com</span></li>
		            	<li className="d-flex"><span>Phone: </span> <span>999-856-3419</span></li>
		            </ul>
		          </div>
		        </div>
	          <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
              	<p className="mb-4">
	                <span className="number" data-number="8">0</span>
	                <span>Project complete</span>
                </p>
                <p>
                  <a href="/resume.pdf" className="btn btn-primary py-4 px-5" target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </p>
              </div>
	          </div>
	        </div>
        </div>
        </div>

    </section>
  )
}
export default About