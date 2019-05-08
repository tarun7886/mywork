import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="parallax image-1" />
        <div className="about-content padding30">
          <h1 className="ab-heading">Tarun</h1>
          <p className="ab-content">
            Full Stack Developer at VMock, handling one of their web services
            "Aspire". Started with PDF parsing then to query optimization,
            creating analytics data from the tracking data getting new info from
            tracking data and then personalize feedback to users. Then I have
            made a photo editor tool for Aspire by altering one of the react
            image editing package also I have made our website ADA compliant. I
            have also been an active coder during my college days. During my
            intern at PwC, I created a virtual reality application using Unity
            3D for retail companies data visualization and management as a proof
            of concept. <br />
            Currently, my development languages are PHP and JavaScript.
            Libraries I have worked on are Laravel, React, Unity - 3D. In
            college days I have also coded in Python, Java, C++. As an aspirant
            coder, I keep looking forward to challenging tasks and problem
            statements.
            <br />I like to learn by getting hands-on and I am always up for
            learning and face new challenges.
          </p>
        </div>
        <div className="parallax image-2" />
      </div>
    )
  }
}

export default About
