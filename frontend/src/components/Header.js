import {
  HeroContainer,
  HeroTextContainer,
  HeroTextH1,
  HeroTextH1Span,
  HeroTextH2,
  IconContainer,
  IconImageContainer,
  IconLinkContainer,
  LeftContainer,
  ProfilePic,
  RightContainer,
} from '../lib/styles/styled'

import React from 'react'
import githubIcon from '../lib/images/icons/github.svg'
import linkedInIcon from '../lib/images/icons/linkedin.svg'
import profilePic from '../lib/images/profile.png'
import stackoverflowIcon from '../lib/images/icons/stackoverflow.svg'

const linkedInLink = 'https://www.linkedin.com/in/karanmann84/'
const githubLink = 'https://github.com/karanmann'
const stackOverflowLink = 'https://stackoverflow.com/users/14064949/karan-mann' 

export const Header = () => {
  return (
    <header>
      <HeroContainer>
        <LeftContainer>
          <HeroTextContainer tabIndex='0'>
            <HeroTextH1>
              PORTFOLIO: 
              <HeroTextH1Span>KARAN MANN</HeroTextH1Span> 
            </HeroTextH1>
            <HeroTextH2>frontend developer</HeroTextH2>
          </HeroTextContainer>
        </LeftContainer>
        <RightContainer>
          <IconContainer>
            <IconLinkContainer 
              href={linkedInLink} 
              tabIndex='0'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <IconImageContainer
                src={linkedInIcon}
                alt='Icon to LinkedIN' 
                aria-label='Linkedin profile' 
                rel="noreferrer"
              />
            </IconLinkContainer>
            <IconLinkContainer 
              href={githubLink} 
                tabIndex='0'
                target="_blank" 
                rel="noopener noreferrer">
              <IconImageContainer 
                src={githubIcon}
                alt='Icon to Github'
                aria-label='Github profile' 
                rel='noreferrer'
              />
            </IconLinkContainer>
            <IconLinkContainer 
              href={stackOverflowLink} 
              tabIndex='0'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <IconImageContainer
                src={stackoverflowIcon}
                alt='Icon to Stackoverflow'
                aria-label='Stackoverflow'
                rel='noreferrer'
              />
            </IconLinkContainer>
          </IconContainer>
          <div>
            <ProfilePic className="profile-pic" src={profilePic} alt="Karan's Pic"/>
          </div>   
        </RightContainer>
      </HeroContainer>
    </header>
  )
}