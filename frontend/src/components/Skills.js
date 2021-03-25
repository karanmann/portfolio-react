import React from 'react';

import '../lib/styles/skills.scss'

const code = [
  "HTML5",
  "CSS3",
  "JavaScript ES6",
  "React",
  "React Hooks",
  "Node.js",
  "Mongo DB",
  "Github",
]

const toolbox =[
  "Visual Studio Code",
  "Terminal",
  "Figma",
  "StackOverflow",
  "Slack",
]

const others= [
  "Agile Methodology",
  "Pair-programming",
  "Mob-programming",
  "Web Accessibility",
  "Concept Development",
]

const upcomming = [
  "Redux",
  "SASS",
]

export const Skills = () => {
  return (
    <div className="skills-container">
      <p className="skills-title">SKILLS</p>
      <div className="content-container">
        <div className="code">
          <p className="code-title">CODE</p>
          <div className="code-content">
            {code.map(myCode => <p key={myCode}>{myCode}</p>)}
          </div>
        </div>
        <div className='toolbox'>
          <p className="toolbox-title">TOOLBOX</p>
          <div className="toolbox-content">{toolbox.map(myTool => <p key={myTool}>{myTool}</p>)}</div>
        </div>
        <div className='others'>
          <p className="others-title">OTHERS</p>
          <div className="others-content">{others.map(myOthers => <p key={myOthers}>{myOthers}</p>)}</div>
        </div>
        <div className='upcomming'>
          <p className="upcomming-title">UPCOMMING</p>
          <div className="upcomming-content">{upcomming.map(myUpcomming => <p key={myUpcomming}>{myUpcomming}</p>)}</div>
        </div>
      </div>
    </div>
  )
}