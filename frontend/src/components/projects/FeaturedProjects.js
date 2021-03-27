import React from 'react';

import '../../lib/styles/featuredProjects.scss'

export const FeaturedProjects = ({featuredProjects}) => {
  return (
    <div className='featured-projects-container'>
      {featuredProjects.map(myProject => {
        return (
          <section className='featured-projects-card' key={myProject.title}>
            <div className='featured-card-image-container'>
              <a className='featured-card-image-hover' href={myProject.live_url}>
                <div className='featured-card-image-overlay'>
                  <p className='featured-card-title'>{myProject.title}</p>
                </div>
                <img className='featured-card-image' src={myProject.image_url} alt=""/>
              </a>
            </div>
            <div className='featured-card-detail-container'>
              <div className='featured-card-description'>
                <p>{myProject.title} {myProject.description}</p>
                <div className='featured-card-tech-wrapper'>
                {myProject.techs.map(mytech => <p className='featured-card-tech'>{mytech}</p> 
                )}
                </div>
              </div>  
            </div>
          </section>
        )
      })
      }
      
    </div>
  )
}