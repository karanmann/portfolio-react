import React from 'react'

import '../lib/styles/forMore.scss'
import linkedIn from '../lib/images/icons/linkedin-orange.svg'
import github from '../lib/images/icons/github-orange.svg'
import stackOverflow from '../lib/images/icons/stackoverflow-orange.svg'

export const ForMore = () => {
  return (
    <div className='formore-container'>
      <p className='formore-title' tabIndex="0">FOR MORE</p>
      <div className='formore-icons'>
        <div className='formore-icon-container'>
          <a href="https://www.linkedin.com/in/karanmann84/">
            <img className='formore-image-linkedin' src={linkedIn} alt="Link to LinkedIN"/>
          </a>
          <p className='formore-text-linkedin'>LINKEDIN</p>
        </div>
        <div className='formore-icon-container'>
          <a href="https://stackoverflow.com/users/14064949/karan-mann">
            <img className='formore-image-stackoverflow' src={stackOverflow} alt="Link to stackoverflow"/>
          </a>
          <p className='formore-text-stackoverflow'>STACK-OVERFLOW</p>
        </div>
        <div className='formore-icon-container'>
          <a href="https://github.com/karanmann">
            <img className='formore-image-github' src={github} alt="Link to Github"/>
          </a>
          <p className='formore-text-github'>GITHUB</p>
        </div>
       
      </div>
    </div>
  )
}