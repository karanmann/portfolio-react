import React from 'react'

import '../lib/styles/header.scss'
import linkedInIcon from '../lib/images/icons/linkedin.svg'
import githubIcon from '../lib/images/icons/github.svg'
import stackoverflowIcon from '../lib/images/icons/stackoverflow.svg'
import profilePic from '../lib/images/profile.png'

const linkedInLink = 'https://www.linkedin.com/in/karanmann84/'
const githubLink = 'https://github.com/karanmann'
const stackOverflowLink = 'https://stackoverflow.com/users/14064949/karan-mann' 

export const Header = () => {
  return (
    <header>
    <div className='hero-container'>
      <div className='left-container'>
        <div className='hero-text-container' tabIndex='0'>
        <h1>
          PORTFOLIO: 
          <span>KARAN MANN</span> 
        </h1>
        <h2>frontend developer</h2>
        <h3>+ chef</h3>
      </div>

      </div>
      
      <div className='right-container'>
        <div className='icon-container'>
          <a 
            href={linkedInLink}
            tabIndex='0'
          >
            <img 
              src={linkedInIcon}
              alt='Icon to LinkedIN' 
              aria-label='Linkedin profile' 
              rel='noreferrer' 
            />
          </a>
          <a 
            href={githubLink}
            tabIndex='0'
          >
            <img 
              src={githubIcon}
              alt='Icon to Github'
              aria-label='Github profile' 
              rel='noreferrer'
            />
          </a>
          <a 
            href={stackOverflowLink}
            tabIndex='0' 
          >
            <img 
              src={stackoverflowIcon}
              alt='Icon to Stackoverflow'
              aria-label='Stackoverflow'
              rel='noreferrer'
            />
          </a>
        </div>
        <div className='image-container'>
          <img className="profile-pic" 
              src={profilePic} 
              alt="Karan's Pic"/>
        </div>   
      </div>
    </div>
  </header>
  )
}