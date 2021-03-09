import React from 'react';
import { 
  NavbarContainer, 
  LinkContainer, 
  NavbarText,
  PageLinks,
  SocialLinks,
  NavbarButton,
  SocialImage
  } from '../lib/styled/styled'
import linkedin from  '../lib/images/linkedin.svg'
import github from  '../lib/images/github.svg'


export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarText>
        <p><b>I'm Karan Mann.</b></p>
        <p>A 
          <span className='yellow-color'>
            frontend developer
          </span>  
          with a background in Kitchen.</p>
      </NavbarText>
      <LinkContainer>
        <PageLinks>
          <NavbarButton href="#">Home</NavbarButton>
          <NavbarButton href="#">CV</NavbarButton>
          <NavbarButton href="#">Projects</NavbarButton>
          <NavbarButton href="#">Blogs</NavbarButton>
          <NavbarButton href="#">Login</NavbarButton>
        </PageLinks>
        <SocialLinks>
          <NavbarButton href="#">
            <SocialImage src={linkedin} alt="linkedin"/>
          </NavbarButton>
          <NavbarButton href="#">
            <SocialImage src={github} alt="github"/>
          </NavbarButton>
        </SocialLinks>
      </LinkContainer>
    </NavbarContainer>
  )
}