import React from  'react'

import '../../lib/styles/projects.scss'
import { OtherProjects } from './OtherProjects'
import { FeaturedProjects } from './FeaturedProjects'

export const Projects = ({projectData}) => {
  const featuredProjects = projectData.filter(myProjects => myProjects.featured)
  const otherProjects = projectData.filter(myProjects => !myProjects.featured)

  return (
    <div className='projects-container'>
      <h3 className='projects-title'>PROJECTS</h3>
      <div>
        <FeaturedProjects featuredProjects={featuredProjects}/>
      </div>
      <h3 className='projects-title'>OTHER PROJECTS</h3>
      <div>
        <OtherProjects otherProjects={otherProjects}/>
      </div>
    </div>
  )  
}