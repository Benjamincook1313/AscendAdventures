import React, { Component } from 'react'
import './Home.css'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import axios from 'axios'

export default class Home extends Component{
  constructor(){
    super()

    this.state = {
      darkMode: false,
      userData: {}
    }
  };

  async componentDidMount(){
    console.log('component Mounted')
    // const res = axios.get('/api/userData')
    // const data = res.json()
    // console.log(data)
  };


  render() {
    
    console.log('Hello')
    return (
      <div>
        <div className='Title'>
          <h1 > Ascend Adventures </h1>
          <p>( Where Spirit meets Earth )</p>
        </div>
        <Nav />
        <Footer/>
      </div>
    )
  };
};
