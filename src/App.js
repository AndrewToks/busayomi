import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App(){
  return(
<div className="App">
      <NavBar />
      <div className="content">
          <Home />
          <Projects />
          <About />
      </div>
    </div>
  )
}
export default App