import React from 'react';
import '../lib/styles/intro.scss'
import lolypop from '../lib/images/icons/icon-p.svg'

export const Intro = () => {
  return (
    <div className='intro-container'>
      <p>
        <img src={lolypop} alt="Lolypop Icon"/> 
        "Hello!   I am a frontend developer with a passion for coding and solving problems that matter and to create awesome and meaningful products for people to love ❤️. I also have a background in culinary arts 👨‍🍳."
      </p>
    </div>
  )
}