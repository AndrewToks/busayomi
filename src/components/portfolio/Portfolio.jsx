import React from 'react'

import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"
const data = [
  {
    id:1,
    title:"Real Estate Management",
    image:IMG1,
    github:"https://github.com/AndrewToks/busayomi",
    demo:"https://real-estate-management-gray.vercel.app/"
  },
  {
    id:2,
    title:"Finance Tracker",
    image:IMG2,
    github:"https://github.com/AndrewToks/finance-tracker",
    demo:"https://real-estate-management-ah0.pages.dev/"
  },
  {
    id:3,
    title:"BMI Calculator",
    image:IMG3,
    github:"https://github.com/AndrewToks/bmi-calculator",
    demo:"https://bmi-calculator-lake-one.vercel.app/"
  },
  {
    id:4,
    title:"Todo App",
    image:IMG4,
    github:"https://github.com/AndrewToks/todo-in-nextjs",
    demo:"https://real-estate-management-ah0.pages.dev/"
  },
  {
    id:5,
    title:"Travel Guide",
    image:IMG5,
    github:"http://github.com",
    demo:"https://real-estate-management-ah0.pages.dev/"
  },
  {
    id:6,
    title:"BMI Calculator",
    image:IMG6,
    github:"http://github.com",
    demo:"https://real-estate-management-ah0.pages.dev/"
  }
]

const Portfolio = () => {
  return (

    
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Porfolio</h2>

        <div className="container portfolio__container">
          {data.map(({id,title,image,github,demo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
              <img src={image} alt={title} />  
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
            <a href={github} target='_blank' rel="noreferrer" className='btn'>Github</a>
            <a href={demo} target='_blank' rel="noreferrer" className="btn btn-primary">Live Demo</a>
            </div>
                </article>
          )
       
          })}     
        </div>

    </section>
  )
}

export default Portfolio
