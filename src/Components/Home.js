import React from 'react'
// import { useState } from 'react'
import { Header, Title, Body, DropDown } from './Home.style'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Header>
        {/* <Button variant="outline-secondary">Shop</Button> */}
        <DropDown/>
        <Title>Ascend Adventures</Title>
        <Button variant="outline-secondary">Adventures</Button>
      </Header>
      <Body></Body>
      <footer></footer>
    </div>
  )
};

export default Home;
