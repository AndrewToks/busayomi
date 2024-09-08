// import { HiMenu} from 'react-icons/hi'
import {BiMenuAltRight} from "react-icons/bi"

const NavBar = () =>{
    return(
     <nav className="navbar">
        <h3>BusayomiTech<span className="dot">.</span></h3>
     <div className="links">
         <a href="/" className='home-link'>Home</a>
         <a href="/projects">Projects</a>
         <a href="/about">About</a>
         <a href="/contact">Contact</a>
         {/* <a href="/services">Services</a> */}
     </div>
     <div className="menu-btn">
        <BiMenuAltRight size={30} />
        </div>
     
        </nav>
    )
}
export default NavBar