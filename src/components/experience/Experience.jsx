import React from 'react'
import "./Experience.css"
import { BsPatchCheckFill} from "react-icons/bs"


const Experience = () => {
  return (
    <section id='experience'>
     <h5>What Skills Do I Have</h5>
     <h2>My Experience</h2>

     <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'  />
          <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'  />
          <div>
            <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
          </div>        
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'  />
           <div>
           <h4>JavaScript</h4>
           <small className="text-light">Experienced</small>
           </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
            <h4>Tailwind</h4> 
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>React</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>NextJs</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
            <h4>Golang</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
            <h4>Git</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
            <h4>Python</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          {/* <article className="experience__details">
            <BsPatchCheckFill />
            <h4>PHP</h4>
            <small className="text-light">Basic</small>
          </article> */}

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
           <div>
           <h4>NodeJs</h4>
           <small className="text-light">Basic</small>
           </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>SQL</h4> 
            <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Mongo DB</h4> 
            <small className="text-light">Basic</small>
            </div>
          </article>
      
        </div>
      </div>
     </div>
    </section>
  )
}

export default Experience
