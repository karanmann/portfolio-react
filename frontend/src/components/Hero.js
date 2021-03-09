import React from 'react';
import profile from  '../lib/images/profile.png'
import {
  HeroContainer,
  TextContainer,
  HeroImage
} from '../lib/styled/styled'
export const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
         <p>Looking <i className='hero-italic'>for</i> my next <b className='hero-bold'>opportunity</b> to make <i className='hero-italic'>a</i> <b className='hero-bold'>change.</b> The <b className='hero-bold yellow-color'>digital</b> way.</p>
      </TextContainer>
      <HeroImage src={profile} alt="Profile-Pic"/>
    </HeroContainer>
  
  )
}
