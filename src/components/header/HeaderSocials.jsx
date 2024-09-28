import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a  href="https://www.linkedin.com/in/adetokunbo-andrew-225a424a" target="_blank" rel="noreferrer"><BsLinkedin size={22} /></a>
      <a  href="https://github.com/AndrewToks" target="_blank" rel="noreferrer"><FaGithub size={22} /></a>
      <a   href="https://www.facebook.com/profile.php?id=100087040522475" target="_blank" rel="noreferrer"> <BsFacebook size={22} /></a>

    </div>
  )
}

export default HeaderSocials
