
import '../../lib/styles/otherProjects.scss'

export const OtherProjects = ({otherProjects}) => {
  return (
     <div className='featured-projects-container'>
      {otherProjects.map(myProject => {
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
                
                <a className='featured-card-description-title' href={myProject.live_url}>
                  {myProject.title}
                </a>
                <p className='featured-card-long-description'>{myProject.description}</p>
                <a className='featured-card-description-title' href={myProject.live_url}>≥≥</a>
              </div>

              <div className='featured-card-tech-wrapper'>
                {myProject.techs.map(mytech => <p className='featured-card-tech'>{mytech}</p> 
                )}
              </div>
            </div>
          </section>
        )
      })
      }
      
    </div>
  )
}