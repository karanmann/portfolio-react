import React from 'react'

import chefDroid from '../lib/images/ChefDroid.png'

const chefToProgrammerLink = "https://www.linkedin.com/posts/karanmann84_programming-learning-technigo-activity-6720014274095304704-BHnK"

export const ThoughtsCode = () => {
  return (
    <section>
      <h2  className='title' tabindex="0">MY THOUGHTS ABOUT CODE</h2>
      <div>
        <div className='thoughts-code-image-container'>
          <a href={chefToProgrammerLink}>
            <img src={chefDroid} alt='Chef and Droid'/>
          </a>
        </div>
        <div className='thoughts-code-text-container'>
          <p className='thoughts-code-text-title'>
            From Chef to Programmer 
          </p>
          <p className='thoughts-code-text-content'> 
            What I learned in the kitchen.
            Almost everyone who starts working in a kitchen starts in one place, the bottom. 
            This could be the salad section or pantry. In an industry as intensely competitive as restaurants, 
            the only way to move up is by working as hard as you can. This means being willing to take on any assignment 
            your chef gives you. It means constantly working to master your craft. 
            <a href={chefToProgrammerLink}>Read More ≥≥</a>
          </p>
        </div>
      </div>
    </section>
  )
}