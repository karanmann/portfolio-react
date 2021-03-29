import React from  'react'

import { ProjectContainer, Title } from '../../lib/styles/styled'
import { OtherProjects } from './OtherProjects'
import { FeaturedProjects } from './FeaturedProjects'

export const Projects = ({projectData}) => {
  const featuredProjects = projectData.filter(myProjects => myProjects.featured)
  const otherProjects = projectData.filter(myProjects => !myProjects.featured)

  return (
    <ProjectContainer>
      <Title>PROJECTS</Title>
      <div>
        <FeaturedProjects featuredProjects={featuredProjects}/>
      </div>
      <h3 className='projects-title'>OTHER PROJECTS</h3>
      <div>
        <OtherProjects otherProjects={otherProjects}/>
      </div>
    </ProjectContainer>
  )  
}