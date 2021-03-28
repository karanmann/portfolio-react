import React from 'react';

import { 
  CardsContainer,
  Card,
  ImageContainer,
  Image,
  ImageOverlay,
  ImageTitle,
  CardDetailsContainer,
  DetailsTitle,
  DetailsDescription,
  DetailsLink,
  CardTechContainer, 
  CardTech} from '../../lib/styles/styled'

export const FeaturedProjects = ({featuredProjects}) => {
  return (
    <CardsContainer>
      {featuredProjects.map(myProject => {
        return (
           <Card key={myProject.title}>
            <ImageContainer>
              <a href={myProject.live_url}>
                <ImageOverlay>
                  <ImageTitle>{myProject.title}</ImageTitle>
                </ImageOverlay>
                <Image src={myProject.image_url} alt=""/>
              </a>
            </ImageContainer>
            <CardDetailsContainer>
              <p>
                <DetailsTitle>{myProject.title} -</DetailsTitle>
                <DetailsDescription>{myProject.description}</DetailsDescription>
                <span>
                  <DetailsLink href={myProject.live_url}>≥≥</DetailsLink>
                </span> 
              </p>
              <CardTechContainer>
                {myProject.techs.map(mytech => <CardTech>{mytech}</CardTech> 
                )}
              </CardTechContainer>
            </CardDetailsContainer>
          </Card>
        )
      })
      }
    </CardsContainer>
  )
}
