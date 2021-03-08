import React from 'react';
import { NavbarContainer, LinkContainer, NavbarText } from '../lib/styled/styled'

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarText>
        <p><b>I'm Karan Mann.</b></p>
        <p>A frontend developer with a background as a Chef</p>
      </NavbarText>
      <LinkContainer>
        <div>
          <button href="#">Home</button>
          <button href="#">CV</button>
          <button href="#">Projects</button>
          <button href="#">Blogs</button>
          <button href="#">Login</button>
        </div>
        <div>
          <button href="#">LinkedIn</button>
          <button href="#">Github</button>
        </div>
      </LinkContainer>
      
    </NavbarContainer>
  )
}