import React from 'react';
import { IntroContainer, IntroP, IntroImage} from '../lib/styles/styled'
import lolypop from '../lib/images/icons/icon-p.svg'

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroP>
        <IntroImage src={lolypop} alt="Lolypop Icon"/> 
        "Hello!   I am a frontend developer with a passion for coding and solving problems that matter and to create awesome and meaningful products for people to love ❤️. I also have a background in culinary arts 👨‍🍳."
      </IntroP>
    </IntroContainer>
  )
}