import React from 'react'

import {
  Title,
  ForMoreContainer,
  ForMoreIcons,
  ForMoreIconContainer,
  ForMoreImage,
  ForMoreText,
  ForMoreLink
} from '../lib/styles/styled'

import linkedIn from '../lib/images/icons/linkedin-orange.svg'
import github from '../lib/images/icons/github-orange.svg'
import stackOverflow from '../lib/images/icons/stackoverflow-orange.svg'

export const ForMore = () => {
  return (
    <ForMoreContainer>
      <Title tabIndex="0">FOR MORE</Title>
      <ForMoreIcons>
        <ForMoreIconContainer>
          <ForMoreLink 
            href="https://www.linkedin.com/in/karanmann84/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ForMoreImage src={linkedIn} alt="Link to LinkedIN"/>
          </ForMoreLink>
          <ForMoreText>LINKEDIN</ForMoreText>
        </ForMoreIconContainer>
        <ForMoreIconContainer>
          <ForMoreLink 
            href="https://stackoverflow.com/users/14064949/karan-mann"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ForMoreImage src={stackOverflow} alt="Link to stackoverflow"/>
          </ForMoreLink>
          <ForMoreText>STACK-OVERFLOW</ForMoreText>
        </ForMoreIconContainer>
        <ForMoreIconContainer>
          <ForMoreLink 
            href="https://github.com/karanmann"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ForMoreImage src={github} alt="Link to Github"/>
          </ForMoreLink>
          <ForMoreText>GITHUB</ForMoreText>
        </ForMoreIconContainer>
      </ForMoreIcons>
    </ForMoreContainer>
  )
}