import styled from 'styled-components/macro'

// PROJECTS & OTHER PROJECTS

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0;
`

export const Card = styled.section `
  display: flex;
  flex-direction: column;
  width: 320px;
  height: auto;
  background-color: whitesmoke;
  margin: 20px;
  box-shadow: 10px 5px 5px grey;
`

export const ImageContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: whitesmoke;
`

export const Image = styled.img `
  height: 200px;
  width: 320px;
`

export const ImageOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s ease;
  height: 200px;
  width:320px;

  :hover {
    background-color: transparent;
  }
`

export const ImageTitle = styled.p`
  font-size: 30px;
  font-weight: 900;
  text-decoration: none;
  color: blanchedalmond;
  text-transform: uppercase;
  
  :hover {
    color:transparent;
  }
`

export const CardDetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px
`

export const CardTextContainer = styled.p`
 display: flex;
 justify-content: flex-start;
 align-items: center;
`

export const DetailsTitle = styled.span`
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 800;
  color:  rgb(55,55,31);
  padding-right: 10px
`

export const DetailsDescription = styled.span`
  font-size: 20px;
  font-weight: 200px
`

export const DetailsLink = styled.a`
  color:  red;
  text-decoration: none;
  font-weight: 800;
  font-size: 25px;
  padding-left: 10px
`

export const CardTechContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start
`

export const CardTech = styled.p `
  background-color: rgb(55,55,31);
  margin: 5px 5px;
  color: white;
  padding: 10px 10px;
  font-size: 15px;
  border-radius: 5px;
`

export const OtherCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const OtherCard = styled.section `
  display: flex;
  flex-direction: row;
  height: auto;
  background-color: whitesmoke;
  margin: 20px;
  box-shadow: 10px 5px 5px grey;
` 

export const OtherImageContainer = styled.div `
  display:none;
  @media (min-width: 720px){
  display:flex;
  flex-direction: column;
  max-width: auto;
  height: 200px;
  background-color: whitesmoke;
  }
`
export const OtherCardDetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
max-width: 800px;
`


