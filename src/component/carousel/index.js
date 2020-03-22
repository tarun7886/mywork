import React, { Component } from 'react'
import _ from 'underscore'
import classNames from 'classnames'

export default class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,
      slidesCount: null,
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  previousSlide() {
    const lastIndex = this.state.slidesCount - 1
    const { currentIndex } = this.state
    const shouldResetIndex = currentIndex === 0
    const index = shouldResetIndex ? lastIndex : currentIndex - 1

    this.setState({
      currentIndex: index,
    })
  }

  nextSlide() {
    const lastIndex = this.state.slidesCount - 1
    const { currentIndex } = this.state
    const shouldResetIndex = currentIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentIndex + 1

    this.setState({
      currentIndex: index,
    })
  }

  componentDidMount() {
    const { children } = this.props
    this.setState({
      slidesCount: React.Children.count(children),
    })
  }

  render() {
    const {
      children,
      carouselContainer = '',
      arrowLeft,
      arrowRight,
      slideClass,
    } = this.props
    let slides = React.Children.toArray(children)
    const { currentIndex, slidesCount } = this.state
    return (
      <div className={classNames('carousel', carouselContainer)}>
        {arrowLeft || (
          <Arrow
            direction="left"
            func={this.previousSlide}
            icon="chevron_left"
          />
        )}
        {_.map(slides, (value, key) => {
          let isFirstOrLastIndex = key === 0 || key === slidesCount - 1
          return (
            <SlideStyle
              key={key}
              left={
                isFirstOrLastIndex
                  ? currentIndex === slidesCount - 1 || currentIndex === 0
                    ? currentIndex === 0
                    : key < currentIndex
                  : key < currentIndex
              }
              right={
                isFirstOrLastIndex
                  ? currentIndex === 0 || currentIndex === slidesCount - 1
                    ? currentIndex === slidesCount - 1
                    : key > currentIndex
                  : key > currentIndex
              }
              active={key === currentIndex}
              slideClass={slideClass}>
              {value}
            </SlideStyle>
          )
        })}
        {arrowRight || (
          <Arrow direction="right" func={this.nextSlide} icon="chevron_right" />
        )}
      </div>
    )
  }
}

const SlideStyle = props => {
  const {
    active = false,
    left = false,
    right = false,
    slideClass = '',
    children,
  } = props
  return (
    <div
      className={classNames(
        'carousel-slides',
        slideClass,
        { active: active },
        { left: left && !active, right: right && !active }
      )}>
      {children}
    </div>
  )
}

const Arrow = props => {
  const { direction, func, icon } = props
  return (
    <button className={`carousel-arrow text-btn ${direction}`} onClick={func}>
      <span className="material-icons">{icon}</span>
    </button>
  )
}
