import styled from 'styled-components/macro'


// NAVBAR

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px
`

export const NavbarText = styled.div `
  line-height: 18px;

  .yellow-color {
    background-color: #f0ff00;
    padding: 0 4px;
    font-weight:550
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column
`

export const PageLinks = styled.div `

`

export const SocialLinks = styled.div`

`

export const SocialImage = styled.img`
  height:30px;
  width: 30px;
  background-color: #f4f4f4
`

export const NavbarButton = styled.button`
  border: none
`

/* HERO */
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: #f4f4f4;
  padding: 20px
`
export const TextContainer = styled.div`
  font-size: 38px;

  .hero-italic {
    font-weight: 200
  }

  .hero-bold {
    font-weight: 800
  }
  
  .yellow-color {
    background-color: #f0ff00;
    padding: 0 4px  
  }
`

export const HeroImage = styled.img`
  height: 100%;
  width: 100%
`

// THIS IS ME
export const ThisIsMeContainer = styled.div`
  padding: 20px;

  .thisisme-title,
  .tech  {
    font-size: 38px;
    font-weight: 200; 
    padding :50px 0 ;
    position: relative;
  }

  .thisisme-text{
    font-size: 30px
  }
`

export const TechSkills = styled.div`
  margin-top: 60px;
  font-size: 23px;
  font-weight: 300;
  .tech  {
    font-size: 38px;
    font-weight: 200; 
    padding :50px 0 ;
    position: relative;
  }
  }
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-evenly;
  text-align: center
`

export const YellowBox = styled.div`
  width: 350px;
  height:60px;
  background-color: #f0ff00;
  position: absolute;
  transform: translate( -30px , 20px)
`