// import { HiMenu} from 'react-icons/hi'
// import { Component } from "react"
// import {BiMenuAltRight} from "react-icons/bi"

import { Component } from "react";

// import {MdCancel} from "react-icons/md"
class NavBar extends Component{
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
   render (){
    return(     
     <nav>
        <h3>CodeLab<span className="dot">.</span></h3>
     <div className="links">
        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li>
            <a href="#home" onClick={this.handleClick} className="active">Home</a>
            </li>
            <li>
            <a  href="#project" onClick={this.handleClick}>Projects</a>
            </li>
            <li>
            <a href="#about" onClick={this.handleClick}>About</a>
            </li>
            <li>
            <a href="#contact" onClick={this.handleClick}>Contact</a>
            </li>
        </ul>
     </div>
     <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
 
        {/* <div className="show-menu">
        <div className="show-links">
     <a href="#home" className='home-link'>Home</a>
          <a href="#project">Projects</a>
          <a href="#about">About</a>
         <a href="/contact">Contact</a>
      </div>
        </div> */}
    
        </nav>
    )
}
}
export default NavBar