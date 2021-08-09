import React from 'react'
// import { useState } from 'react'
import { Header, Title, HomeS } from './Home.style'

const Home = () => {
  return (
    <HomeS>
      <Header>
        <button>Shop</button>
        <Title> Ascend Adventures </Title>
        <button> Adventures </button>
      </Header>
      <section>
        <button>Donate</button>
      </section>
      <footer></footer>
    </HomeS>
  )
};

export default Home;
