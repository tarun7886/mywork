import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

class About extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Tarun 'aka' TJ</h1>
          <p>
            Full Stack Developer at VMock, handling one of their web services
            "Aspire". Started with PDF parsing then to query optimization,
            creating analytics data from the tracking data getting new info from
            tracking data and then personalize feedback to users. Then I have
            made a photo editor tool for Aspire by altering one of the react
            image editing package also I have made our website ADA compliant. I
            have also been an active coder during my college days. During my
            intern at PwC, I created a virtual reality application using Unity
            3D for retail companies data visualization and management as a proof
            of concept. Currently, my development languages are PHP and
            JavaScript. Libraries I have worked on are Laravel, React, Unity -
            3D. In college days I have also coded in Python, Java, C++. As an
            aspirant coder, I keep looking forward to challenging tasks and
            problem statements. I like to learn by getting hands-on and I am
            always up for learning and face new challenges.
          </p>
        </Container>
      </Jumbotron>
    )
  }
}

export default About
