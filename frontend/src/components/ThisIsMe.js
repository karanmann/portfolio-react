import React from 'react';

import {
  ThisIsMeContainer,
  YellowBox,
} from '../lib/styled/styled'

export const ThisIsMe = () => {
  return(
    <ThisIsMeContainer>
      <div>
        <YellowBox></YellowBox>
        <p className='thisisme-title'>This is <b>me</b></p>
      </div>
      <div>
        <p className='thisisme-text'>"Hello! I am a frontend developer with a passion for coding and solving   
            problems that matter and to create awesome and meaningful products for people to love. I also have a background in culinary arts ❤️ "
        </p> 
      </div>
    </ThisIsMeContainer>
  )
}