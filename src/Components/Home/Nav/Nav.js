import React from 'react'
import { Button } from 'react-bootstrap'
import './Nav.css'

export default function Nav() {
  return (
    <div className='Nav'>
      <Button variant='light' >Adventures</Button>
      <Button variant='light' >Shop</Button>
      <Button variant='light' >About Us</Button>
    </div>
  )
};
