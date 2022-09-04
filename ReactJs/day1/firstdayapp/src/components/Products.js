import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class Products extends Component {
  render() {
    return (
      <>
      
      <div className='container mx-auto my-5 row d-flex flex-row justify-content-between'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
      </div>
      
      
      </>
    )
  }
}
