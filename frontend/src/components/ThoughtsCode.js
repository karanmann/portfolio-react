import React from 'react'

import {
  ThoughtsContainer,
  ThoughtsContentContainer,
  ThoughtsCodeImageContainer,
  ThoughtsImage,
  ThoughtsCodeTextContainer,
  ThoughtsCodeTextTitle,
  ThoughtsCodeTextContent,
  ThoughtsReadMore,
  Title
} from '../lib/styles/styled'
import chefDroid from '../lib/images/ChefDroid.png'

const chefToProgrammerLink = "https://www.linkedin.com/posts/karanmann84_programming-learning-technigo-activity-6720014274095304704-BHnK"

export const ThoughtsCode = () => {
  return (
    <ThoughtsContainer>
      <Title tabIndex="0">MY THOUGHTS ABOUT CODE</Title>
      <ThoughtsContentContainer>
        <ThoughtsCodeImageContainer href={chefToProgrammerLink}>
          <ThoughtsImage src={chefDroid} alt='Chef and Droid'/>
        </ThoughtsCodeImageContainer>
        <ThoughtsCodeTextContainer>
          <ThoughtsCodeTextTitle>
            From Chef to Programmer 
          </ThoughtsCodeTextTitle>
          <ThoughtsCodeTextContent> 
            What I learned in the kitchen.
            Almost everyone who starts working in a kitchen starts in one place, the bottom. 
            This could be the salad section or pantry. In an industry as intensely competitive as restaurants, 
            the only way to move up is by working as hard as you can. This means being willing to take on any assignment 
            your chef gives you. It means constantly working to master your craft. 
            <ThoughtsReadMore href={chefToProgrammerLink}>Read More ≥≥</ThoughtsReadMore>
          </ThoughtsCodeTextContent>
        </ThoughtsCodeTextContainer>
      </ThoughtsContentContainer>
    </ThoughtsContainer>
  )
}