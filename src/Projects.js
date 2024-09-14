import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Project.css"
const Projects = () =>{
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return(
      <div id="project">
        <div>
        <h1 className="orangeText">Projects</h1>
        <div className="project">
        <Carousel responsive={responsive}>
        <div className="project-item">
        <div className="project-description">
        <div className="project-img">
        <img src="Capture.PNG" alt="" /></div>
        <h2>Real Estate Management System</h2>
        {/* <p>A website that where you can buy or purchase houses</p> */}
        <p>It has information about the seller, products and the value offered.</p>
        <a href="https://real-estate-management-ah0.pages.dev/" className="project-btn">Browse Project</a>
        </div>
        </div>
        <div className="project-item">
        <div className="project-description">
          <div className="project-img">
        <img src="bmi.PNG" alt="" /></div>
         <h2>BMI Calculator</h2>
        <p>This Calculator helps in the calculation of body index mass (BMI)</p>
        <a href="http://google.com" className="project-btn">Browse Project</a>
        </div>
        </div>
        <div className="project-item">
        <div className="project-description">
        <div className="project-img">
        <img src="blog.PNG" alt="" /></div>
        <h2>News Blog</h2>
        <p>voluptatem iusto sunt, similique sapiente 
       vitae in ratione inventore fugit ...</p>
        <a href="http://google.com" className="project-btn">Browse Project</a>
        </div>
        </div>
        <div className="project-item">
        <div className="project-description">
        <div className="project-img">
        <img src="blog.PNG" alt="" /></div>
        <h2>News Blog</h2>
        <p>voluptatem iusto sunt, similique sapiente 
       vitae in ratione inventore fugit ...</p>
        <a href="http://google.com" className="project-btn">Browse Project</a>
        </div>
        </div>
        <div className="project-item">
        <div className="project-description">
        <div className="project-img">
        <img src="blog.PNG" alt="" /></div>
        <h2>News Blog</h2>
        <p>voluptatem iusto sunt, similique sapiente 
       vitae in ratione inventore fugit ...</p>
        <a href="http://google.com" className="project-btn">Browse Project</a>
        </div>
        </div>
        </Carousel>
        </div>  
        </div>
        </div>
        
    )
}
export default Projects
