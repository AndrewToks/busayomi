import React from 'react'
import "./About.css";
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import { MdCastForEducation } from "react-icons/md";
import ME from "../../assets/me-about.jpg"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>2+ Years</small>
          </article>
          {/* <article className='about__card'>
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>5+ Worldwide</small>
          </article> */}
          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          {/* <article className='about__card'>
            <MdCastForEducation className='about__icon' />
            <h5>Education</h5>
            <small>FUTA</small>
          </article> */}
        </div>

        <p>
        I'm Adetokunbo Andrew,
        A Frontend developer with 2 years of experience creating high-performance web applications
        using Next.js, React, and TailwindCSS. I specialize in crafting seamless user experiences with
        reusable code, SEO optimization, and responsive designs. I am committed to delivering scalable,
        intuitive solutions aligned with user and business goals.

        </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>

      </div>
    </section>
  )
}

export default About
