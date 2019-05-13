import React, { Component } from 'react'
import $ from 'jquery'

class About extends Component {
  componentDidMount() {
    $('head title')[0].innerText = `About | Rest In Peace`
    document.addEventListener('scroll', this.toggleNavBar)
  }

  toggleNavBar() {
    var height = $(window).scrollTop()
    if (height > 150) {
      $('#top-nav').addClass('is-visible')
    } else {
      $('#top-nav').removeClass('is-visible')
    }
  }

  componentWillUnmount() {
    $('#top-nav').removeClass('is-visible')
    document.removeEventListener('scroll', this.toggleNavBar)
  }

  render() {
    return (
      <div className="about-container">
        <div className="parallax image-1" />
        <div className="about-content-1 padding30">
          <h1 className="ab-heading">Tarun</h1>
          <div className="row">
            <div className="col col-sm-3" />
            <div className="col col-sm-9">
              <p className="ab-content slide-in-right ">
                Full Stack Developer | started with PDF parsing then to query
                optimization, creating analytics data from the tracking data
                getting new info from tracking data and then personalize
                feedback to users. Then I have made a photo editor tool for
                Aspire by altering one of the react image editing package also I
                have made our website ADA compliant. I have also been an active
                coder during my college days. During my intern at PwC, I created
                a virtual reality application using Unity 3D for retail
                companies data visualization and management as a proof of
                concept. <br />
                Currently, my development languages are PHP and JavaScript.
                Libraries I have worked on are Laravel, React, Unity - 3D. In
                college days I have also coded in Python, Java, C++. As an
                aspirant coder, I keep looking forward to challenging tasks and
                problem statements.
                <br />I like to learn by getting hands-on and I am always up for
                learning and face new challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="parallax image-2" />
        <div className="about-content-2 padding30">
          <h1 className="ab-heading">Dream</h1>
          <div className="row">
            <div className="col col-sm-9">
              <p className="ab-content slide-in-left">
                Dream to be the best of the best in every field I step in. It's
                kind of a dream for future but I would working my ass off to be
                the best
              </p>
            </div>
            <div className="col col-sm-3" />
          </div>
        </div>
      </div>
    )
  }
}

export default About
