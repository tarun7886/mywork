import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

class About extends Component {
  componentDidMount() {
    $('head title')[0].innerText = `About | ${process.env.REACT_APP_NAME}`
    document.addEventListener('scroll', this.toggleNavBar)
  }

  onScroll(event) {
    var elem = $(event.currentTarget)
    var id = elem[0].dataset.id
    console.log($(`#${id}`).offset().top)
    $('html, body').animate(
      {
        scrollTop: $(`#${id}`).offset().top - 200,
      },
      500
    )
  }

  toggleNavBar() {
    var height = $(window).scrollTop()
    // to slow down the speed of nav bar
    let top = height / 2 - 120
    top = Math.min(top, 0)
    $('#top-nav').css('top', top)
  }

  componentWillUnmount() {
    $('#top-nav').css('top', -100)
    document.removeEventListener('scroll', this.toggleNavBar)
  }

  render() {
    return (
      <div className="about-container">
        <div
          className="parallax image-0"
          data-id="about"
          onClick={this.onScroll}>
          <h1 className="ab-heading">About John Doe</h1>
        </div>
        <div className="about-content-0 padding30" id="about">
          <div className="row">
            <div className="col col-sm-3" />
            <div className="col col-sm-9">
              <p className="ab-content slide-in-right ">
                This began as a project to create a text editor as a free lance
                project that I joined. Then while working on it I realised why
                shouldn't I document all the things that I have learnt. And what
                better than documenting it on a real web page. Initialy I was
                facing problems with desining and stuffs which are not my
                expertise but quickly I realised it was to document the work and
                styling is something that can be done afterwards and also I
                haven't learnt it. With this in mind I added image editor as the
                new module in it and working on few other things like animation
                and better control on components
                <br />
                If you have anything in mind for a website and want to see it
                happening then do <Link to="/contact"> contact me </Link>.
              </p>
            </div>
          </div>
        </div>
        <div
          className="parallax image-1"
          data-id="about-creator"
          onClick={this.onScroll}>
          <h1 className="ab-heading">[ SOMETHING ]</h1>
        </div>
        <div className="about-content-1 padding30" id="about-creator">
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
        <div
          className="parallax image-2"
          data-id="dream"
          onClick={this.onScroll}>
          <h1 className="ab-heading">[ EVERYTHING ]</h1>
        </div>
        <div className="about-content-2 padding30" id="dream">
          <div className="row">
            <div className="col col-sm-9">
              <p className="ab-content slide-in-left">
                Let it be safe with me untill I achieve it
                <br />
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
                learning and face new challenges. Full Stack Developer | started
                with PDF parsing then to query optimization, creating analytics
                data from the tracking data getting new info from tracking data
                and then personalize feedback to users. Then I have made a photo
                editor tool for Aspire by altering one of the react image
                editing package also I have made our website ADA compliant. I
                have also been an active coder during my college days. During my
                intern at PwC, I created a virtual reality application using
                Unity 3D for retail companies data visualization and management
                as a proof of concept. <br />
                Currently, my development languages are PHP and JavaScript.
                Libraries I have worked on are Laravel, React, Unity - 3D. In
                college days I have also coded in Python, Java, C++. As an
                aspirant coder, I keep looking forward to challenging tasks and
                problem statements.
                <br />I like to learn by getting hands-on and I am always up for
                learning and face new challenges. Full Stack Developer | started
                with PDF parsing then to query optimization, creating analytics
                data from the tracking data getting new info from tracking data
                and then personalize feedback to users. Then I have made a photo
                editor tool for Aspire by altering one of the react image
                editing package also I have made our website ADA compliant. I
                have also been an active coder during my college days. During my
                intern at PwC, I created a virtual reality application using
                Unity 3D for retail companies data visualization and management
                as a proof of concept. <br />
                Currently, my development languages are PHP and JavaScript.
                Libraries I have worked on are Laravel, React, Unity - 3D. In
                college days I have also coded in Python, Java, C++. As an
                aspirant coder, I keep looking forward to challenging tasks and
                problem statements.
                <br />I like to learn by getting hands-on and I am always up for
                learning and face new challenges.
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
