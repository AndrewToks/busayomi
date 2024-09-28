import React from "react";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import Projects from "./Projects";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
// import Service from "./components/services/Services";
// import Testimonials from "./components/testimonials/Testimonials";


function App(){
  return(
<div>
      {/* <NavBar /> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Service /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  )
}
export default App