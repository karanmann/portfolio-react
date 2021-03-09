import React from 'react';

import {
  YellowBox,
  TechContainer,
  ThisIsMeTech
} from '../lib/styled'
        
export const TechSkills = () => {
  return (

    <ThisIsMeTech>
      <YellowBox></YellowBox>
      <p className='tech'>Tech <b>skills</b></p>
      <TechContainer>
        <div> 
          <p>HTML </p> 
          <p>CSS </p> 
          <p>JavaScript</p>
          <p>Responsive Design</p> 
          <p>Accessibility</p>  
        </div>
        <div> 
          <p>React</p> 
          <p>React Hooks</p> 
          <p>Redux</p> 
          <p>Styled Components</p> 
        </div>
        <div> 
          <p>API:s</p> 
          <p>Node.js</p> 
          <p>Mongo DB</p> 
          <p>Express</p> 
        </div>
        <div>
          <p>Visual Studio Code</p> 
          <p>Mob-programming</p> 
          <p>Pair-programming</p> 
          <p>Github</p> 
        </div>
      </TechContainer>
      <button><i>See Full CV</i></button>
    </ThisIsMeTech>


  )




}
        