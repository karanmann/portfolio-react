import { 
  OtherCardsContainer,
  OtherCard,
  OtherImageContainer,
  Image,
  ImageOverlay,
  ImageTitle,
  OtherCardDetailsContainer,
  DetailsTitle,
  DetailsDescription,
  DetailsLink,
  CardTechContainer, 
  CardTech} from '../../lib/styles/styled'

export const OtherProjects = ({otherProjects}) => {
  return (
    <OtherCardsContainer>
      {otherProjects.map(myProject => {
        return (
        <OtherCard key={myProject.title}>
          <OtherImageContainer>
            <a href={myProject.live_url}>
              <ImageOverlay>
                <ImageTitle>{myProject.title}</ImageTitle>
              </ImageOverlay>
              <Image src={myProject.image_url} alt=""/>
            </a>
          </OtherImageContainer>
          <OtherCardDetailsContainer>
            <p>
              <DetailsTitle>{myProject.title}</DetailsTitle>
              <DetailsDescription>{myProject.description}</DetailsDescription>
              <span>
                <DetailsLink className='featured-card-description-title' href={myProject.live_url}>≥≥</DetailsLink>
              </span> 
            </p>
            <CardTechContainer>
              {myProject.techs.map(mytech => <CardTech>{mytech}</CardTech> 
              )}
            </CardTechContainer>
          </OtherCardDetailsContainer>
        </OtherCard>
        )})
      }
    </OtherCardsContainer>
  )
}