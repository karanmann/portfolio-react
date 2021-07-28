import greenBanner from '../images/GreenBanner.png'
import styled from 'styled-components/macro'
// GLOBAL

export const Title = styled.h3`
  background-color: rgb(234,144,16);
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 500;
`

// HEADER

export const HeroContainer = styled.div `
  background-color: rgb(55,55,31);
  width: 100%;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${greenBanner});
  color: blanchedalmond;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

// LEFT-HEADER CONTAINER

export const LeftContainer = styled.div`
`
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(30%, 20%)
  }
`

export const HeroTextH1 = styled.h1`
  font-size: 20px;
  letter-spacing: 5px;
  font-weight: 200;

  @media (min-width: 1280px) {
    font-size: 35px;
    letter-spacing: 5px;
    font-weight: 200;
  }
`

export const HeroTextH1Span = styled.span`
  font-size: 25px;
  letter-spacing: 1px;
  color: white;
  font-weight: 700;

  @media (min-width: 1280px) {
    color: white;
    font-weight: 800;
  }
`
export const HeroTextH2 = styled.h2`
  font-size: 25px;
  letter-spacing: 5px;
  font-weight: 600;

  @media (min-width: 1280px) {
    font-size: 60px;
    letter-spacing: 1px;
  }
`

export const HeroTextH3 = styled.h3`
  font-size: 25px;
  
  @media (min-width: 1280px) {
    font-size: 30px;
  }
`

// RIGHT HEADER-CONTAINER

export const RightContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1280px){
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
  }
`
export const IconContainer = styled.div `
  display:flex;
  width: 300px;
  justify-content: space-evenly;
  flex-direction: row;
  position: absolute;
  transform: translate(0%,-430%);

  @media (min-width: 720px){
    display:flex;
    width: 300px;
    justify-content: space-evenly;
    flex-direction: row;
    position: absolute;
    transform: translate(0%,-430%);
  }

  @media (min-width: 1280px){
    width: 350px;
    transform: translate(-55%, 250%)
  }
`

export const IconLinkContainer = styled.a `
  height: 60px;
  width: 60px;
  border: 2px solid white;
  border-radius: 50%;
  :hover {
    border: 2px solid tomato
  }
`
export const IconImageContainer = styled.img `
  height: 20px;
  width:20px;
  padding: 20px;
`
export const ProfilePic = styled.img `
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  transform: translate(-50%, 10%);

  @media (min-width: 1280px){
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 2px solid white;
    transform: translate(-110%, 90%)
  }
`

// INTRO

export const IntroContainer = styled.div`
  background-color: rgb(239, 244, 201);
  padding-top: 120px;

  @media (min-width: 1280px){
    padding-top:20px;
  }
`

export const IntroP = styled.p`
  margin-top: 0;
  padding: 40px 20%;
  font-size: 20px;
  font-weight: 400;

  @media (min-width: 1280px){
    font-size: 27px;
    padding: 60px 20%;
  }
`
export const IntroImage = styled.img`
  padding-right: 10px;
  padding-bottom: 6px;

`
// TECH

export const TechContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`

export const AllTech = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 20px;
  padding: 20px 20% 40px 20%;
  justify-content: center;
`

export const MyTech = styled.p`
  font-size: 20px;
  padding-right: 10px;

  @media (min-width: 720px) {
    font-size: 25px;
    padding-right: 20px
  }

  @media (min-width: 1280px) {
    padding-right: 30px
  }
`
// PROJECTS

export const ProjectContainer = styled.div `
  background-color: rgb(239, 244, 201);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`


//FEATURED PROJECTS & OTHER PROJECTS

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
  font-size: 20px;
  font-weight: 800;
  color:  rgb(55,55,31);
  padding-right: 10px
`

export const DetailsDescription = styled.span`
  font-size: 16px;
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
  padding: 5px 7px;
  font-size: 10px;
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

// THOUGHTS ABOUT CODE

export const ThoughtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ThoughtsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 1280px){
    flex-direction: row;
    padding: 20px;
  }
`

export const ThoughtsCodeImageContainer = styled.a`
  display: flex;
  justify-content: center;
`

export const ThoughtsImage= styled.img`
  padding-top: 40px;
  width: 50%;
  height:25%;
  
  @media (min-width: 1280px){
    padding-top: 40px;
    width: 70%;
  }
`

export const ThoughtsCodeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 70%;
  @media (min-width: 1280px){
    padding-right: 70px;
  }
`

export const ThoughtsCodeTextTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`

export const ThoughtsCodeTextContent = styled.p`
  font-size: 20px;
`

export const ThoughtsReadMore = styled.a`
  padding-left: 10px;
  color: tomato;
`
// SKILLS

export const SkillContainer = styled.div`
  background-color: rgb(239, 244, 201);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`
export const SkillContentContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-evenly; 
  }
`
export const Skill = styled.div`
padding: 0 30px;
`

export const SkillCodeTitle = styled.p`
  color: tomato;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`

export const SkillCodeContent = styled.div`
  text-align: center;
`

// FOR MORE

export const ForMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

export const ForMoreIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-around;
`

export const ForMoreIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`

export const ForMoreLink = styled.a`
  height: 60px;
  width: 60px;
  border: 2px solid rgb(234,144,16);
  border-radius: 50%;

  :hover{
    border: 2px solid rgb(55,55,31);
    border-radius: 50%;
    transition: .2s ease-out;
  }

  @media (min-width: 720px){
    height: 70px;
    width: 70px;
    border: 2px solid rgb(234,144,16);
    border-radius: 50%;

    :hover {
      height: 70px;
      width: 70px;
      border: 2px solid rgb(55,55,31);
      border-radius: 50%;
      transition: .2s ease-out;
    }
  }

`

export const ForMoreImage = styled.img`
  height: 30px;
  width: 30px;
  margin: 15px;
  @media (min-width: 720px){
    height: 40px;
    width: 40px;
    margin: 15px;
  }
`

export const ForMoreText = styled.p`
  color: rgb(234,144,16);
  font-size: 15px;
  font-weight: 600;
`

// FOOTER

export const FooterContainer = styled.div `
  padding: 20px 0;
  background-color: rgb(55,55,31);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: tomato;
  font-size: 20px;
  font-weight: 400;
  line-height: 7px;
`

// CODE COLOUR REFRENCES

/* $header-color: whitesmoke;
$background-green: rgb(201,227,172);
$title-background: rgb(234,144,16);
$background-light-green:rgb(239, 244, 201);
$image-background: rgb(55,55,31);
$my-font: "Open Sans", sans-serif;
$almond: blanchedalmond; */