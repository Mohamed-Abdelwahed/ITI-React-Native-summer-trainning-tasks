import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class ProductCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }} className='col-4 my-5'>
      <Card.Img variant="top" src="https://image-placeholder.com/images/actual-size/75x75.png" />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
         {this.props.desc}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    )
  }
}
