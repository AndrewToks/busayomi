import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import React, { useRef } from 'react';
// import emailjs from "emailjs-com"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pqqdfam', 'template_woo6nvh', form.current, {
        publicKey: 'FfJ54SALeKT2bohNB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5 className='text-light'>adetokunboandrew2@gmail.com</h5>
            <a href="mailto:adetokunboandrew2@gmail.com" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5 className='text-light'>Adetokunbo Andrew</h5>
            <a href="https://www.linkedin.com/in/adetokunbo-andrew-225a424a" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5 className='text-light'>AndrewToks</h5>
            <a href="https://github.com/AndrewToks" rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

