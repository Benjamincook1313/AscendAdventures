import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'



export default function Nav() {

  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className='Nav' 
      onMouseEnter={() => setShowOptions(true)} 
      onMouseLeave={() => setShowOptions(false)}
    >
      <FontAwesomeIcon icon={faBars} className='bars' />
      {showOptions? 
        <div>
          <div className='opts-btn'>Shop</div>
          <div className='opts-btn'>Adventures</div>
          <div className='opts-btn'>About Us</div>
        </div>: null
      }
    </div>
  )
};
