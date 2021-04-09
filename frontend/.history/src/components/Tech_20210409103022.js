import React from 'react';

import {
  TechContainer,
  AllTech,
  MyTech,
  Title
  } from '../lib/styles/styled' 

const techs = [
  { tech:"HTML", highLight:false },
  { tech:"CSS", highLight:false },
  { tech:"Flexbox", highLight:false },
  { tech:"JavaScript", highLight:true },
  { tech:"Responsive Design", highLight:false },
  { tech:"React", highLight:true },
  { tech:"React Hooks", highLight:true },
  { tech:"Redux", highLight:true },
  { tech:"Node.js", highLight:true },
  { tech:"Mongo DB", highLight:false },
  { tech:"Web-Accessibility", highLight:false },
  { tech:"Figma", highLight:false },
  { tech:"API:s", highLight:true },
  { tech:"Mob-Programming", highLight:false },
  { tech:"Pair-Programming", highLight:false },
  { tech:"Github", highLight:false },
  { tech:"Mongoose", highLight:false },
  { tech:"Express.js", highLight:false },
  { tech:"Styled Components", highLight:true },
]

export const Tech = () => {
  return (
    <TechContainer>
      <Title>TECH</Title>
        <AllTech>
            {techs.map((mytech, index) =>{
              const conditionalStyle = mytech.highLight ? {color:'tomato', fontWeight: '800'} : {color:'black'}
              return (
              <MyTech style={conditionalStyle} key={mytech.tech}>
                {mytech.tech}{index === mytech.tech.length - 1 ? ',' : '.'} 
              </MyTech> 
            )
            })}
        </AllTech>
    </TechContainer>
  )
}

// while using styled components we can also send the style as a prop and do the conditional rendering in the styles itself.

// {index > Object.keys(mytech).length - 1 ? ',' : '.'} 
// Working on getting a period in the end rather than a comma.