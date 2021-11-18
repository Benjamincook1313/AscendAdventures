import React from 'react'
import './Footer.css'
import { Button } from 'react-bootstrap'

export default function Footer() {
  return (
    <div className='Footer'>
      <p>copyright 2021</p>
      <br/>
      <p>Want to help us grow? </p>
      <Button variant='dark'>Donate here</Button>
    </div>
  )
};
