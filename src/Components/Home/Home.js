import React, { Component } from 'react'
import './Home.css'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Shop from './Shop/Shop'
// import axios from 'axios'

export default class Home extends Component{
  constructor(){
    super()

    this.state = {
      darkMode: false,
      userData: {},
      selectedPage: 'Shop'
    }
  };

  async componentDidMount(){
    console.log('component Mounted')
    // const res = axios.get('/api/userData')
    // const data = res.json()
    // console.log(data)
  };

  
  render() {
    const { selectedPage } = this.state

    const page = () => {
      switch(selectedPage){
        case 'Shop':
          return <Shop/>
        default:
          return null
      }
    };

    // console.log('Hello')
    return (
      <div className='Home'>
        <div className='Title'>
          <h1> Ascend Adventures </h1>
          <p>( Where Spirit meets Earth )</p>
        </div>
        <Main>
          {page()}
        </Main>
        <Nav />
        <Footer/>
      </div>
    )
  };
};
