import React from  'react'

import '../lib/styles/projects.scss'
// import { MoreProjects } from './MoreProjects'

export const Projects = ({projectData}) => {
  return (
    <>
    {projectData.map(myproject => {
      if(myproject.featured) {
        return <div key={myproject.title}>{myproject.title}</div>
      } else {
        return <div key={myproject.title}>Other {myproject.title}</div>
      }
    })}
    </>
    // <div className='projects-container'>
    //   <p className='projects-title'>PROJECTS</p>
    //   {/* <MoreProjects /> */}
    // </div>
  )  
}