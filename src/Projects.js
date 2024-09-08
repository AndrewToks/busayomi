const Projects = () =>{
    return(
        <div id="project">
        <h1 className="project-heading">Projects<span className="dot">.</span></h1>
        <div className="project">
        <div className="project-item">
        <div className="project-img">
        <img src="Capture.PNG" alt="" /></div>
        <h2>Real Estate Management System</h2>
        {/* <p>A website that where you can buy or purchase houses</p> */}
        <p>It has information about the seller, products and the value offered.</p>
        <a href="https://real-estate-management-ah0.pages.dev/" className="get-in-touch">Browse Project</a>
        </div>
        <div className="project-item">
        <div className="project-img">
        <img src="Capture.PNG" alt="" /></div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit,inventore fugit ...</p>
        <a href="http://google.com" className="get-in-touch">Browse Project</a>
        </div>
        <div className="project-item">
        <div className="project-img">
        <img src="Capture.PNG" alt="" /></div>
        <p>voluptatem iusto sunt, similique sapiente 
       vitae in ratione inventore fugit ...</p>
        <a href="http://google.com" className="get-in-touch">Browse Project</a>
        </div>
        </div>
        </div>
        
    )
}
export default Projects
