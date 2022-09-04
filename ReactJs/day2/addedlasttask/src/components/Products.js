import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class Products extends Component {
  products = {
    items:[
      {id:1,name:"mobile",desc:"this is desc"},
      {id:2,name:"phone",desc:"this is desc"},
      {id:3,name:"computer",desc:"this is desc"},
      {id:4,name:"handfree",desc:"this is desc"},
      {id:5,name:"blutooth",desc:"this is desc"},
      {id:6,name:"pentool",desc:"this is desc"},
    ]
  }
  render() {
    return (
      <>
      
      <div className='container mx-auto my-5 row d-flex flex-row justify-content-between'>
                {this.products.items.map((item,index)=>{
                  return <ProductCard id={item.id} name={item.name} desc={item.desc} key={index}/>
                })}
      </div>
      
      
      </>
    )
  }
}
