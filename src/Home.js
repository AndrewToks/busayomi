import "./Home.css";
import {BiArchiveIn} from "react-icons/bi"
const Home = () =>{

    return(
        <div className="home" id="home">
            <div className="right-side">
            <p className="name">Hey,I'm Busayomi 👏🏻</p>
            <h1><span className="front">Front</span>end<br />Developer</h1>
            <p>I'm a Frontend developer based in Nigeria.</p>
            <div className="links">
            <a href="#contact" className="get-in-touch">Get In Touch</a>
           <a href="My-Resume.pdf" download="Adetokunbo-Andrew-Resume" className="browse-project">Download CV <BiArchiveIn className="icon-btn" size={25} /></a>
            </div>
            </div>
            <div className="left-side">
            <img src="logo.jpg" require alt="" />
            </div>
         
        </div> 
    )
}
export default Home