import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App(){
  return(
<div className="App">
      <NavBar />
      <div className="content">
          <Home />
          <Projects />
          <About />
          <Contact />
      </div>
      <Footer />
    </div>
  )
}
export default App