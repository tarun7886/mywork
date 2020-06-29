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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
                <br />
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
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
