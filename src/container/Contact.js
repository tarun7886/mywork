import React from 'react'
import { Card } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Tarun Jain</Card.Title>
          <Card.Subtitle>Full Stack Developer</Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Card.Text>Feel free to contact me on:</Card.Text>
          <Card.Link href="mailto:tarunj9878@gmail.com">EMAIL</Card.Link>
          <Card.Link href="tel:+91-9717268313">Phone</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Contact
