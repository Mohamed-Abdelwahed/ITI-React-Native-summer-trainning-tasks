import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class ProductCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }} className='col-4 my-5'>
      <Card.Img variant="top" src="https://image-placeholder.com/images/actual-size/75x75.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
  }
}
