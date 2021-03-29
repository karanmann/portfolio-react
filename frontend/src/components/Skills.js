import React from 'react';

import { 
  Title,
  SkillContainer,
  SkillContentContainer,
  Skill,
  SkillCodeTitle,
  SkillCodeContent
} from '../lib/styles/styled'

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
    <SkillContainer>
      <Title>SKILLS</Title>
      <SkillContentContainer>
        <Skill>
          <SkillCodeTitle>CODE</SkillCodeTitle>
          <SkillCodeContent >
            {code.map(myCode => <p key={myCode}>{myCode}</p>)}
          </SkillCodeContent>
        </Skill>
        <Skill>
          <SkillCodeTitle>TOOLBOX</SkillCodeTitle>
          <SkillCodeContent>{toolbox.map(myTool => <p key={myTool}>{myTool}</p>)}</SkillCodeContent>
        </Skill>
        <Skill>
          <SkillCodeTitle>OTHERS</SkillCodeTitle>
          <SkillCodeContent>{others.map(myOthers => <p key={myOthers}>{myOthers}</p>)}</SkillCodeContent>
        </Skill>
        <Skill>
          <SkillCodeTitle>UPCOMMING</SkillCodeTitle>
          <SkillCodeContent>{upcomming.map(myUpcomming => <p key={myUpcomming}>{myUpcomming}</p>)}</SkillCodeContent>
        </Skill>
      </SkillContentContainer>
    </SkillContainer>
  )
}