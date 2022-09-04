

import MyNavebar from './components/MyNavebar';
import MyCarousal from './components/MyCarousal';
import Footer from './components/Footer'

import Products from './components/Products'
///

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <MyNavebar />
     <MyCarousal/>
     <Products/>
     <Footer/>

     </>
    )
  }
}

///
