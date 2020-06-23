import React from 'react'
import Styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavOptions = [
  { to: 'home', icon: 'home' },
  { to: 'about', icon: 'book' },
  { to: 'contact', icon: 'phone' },
  { to: 'text-editor', icon: 'chrome_reader_mode' },
  { to: 'image-editor', icon: 'aspect_ratio' },
  { to: 'tambola', icon: 'games' },
]

const minNum = (first, second, third, fourth) => {
  return first <= second && first <= third && first <= fourth
}

const NavDial = Styled.button`
	position: fixed;
	height: ${(props) => props.size}px;
	width: ${(props) => props.size}px;
	border-radius: 50%;
	border: 1px solid #62e9ff;
	background: #f0fcfe;
	padding: 0;
	z-index: 1;
	transition: all 300ms linear;
`

const mixin = (itemCount, show = false) => {
  let circleSize = 0,
    itemSize = 0
  if (show) {
    circleSize = 300
    itemSize = 20
  }
  let styles = ''
  let angle = 360 / itemCount
  let rot = 0
  for (let i = 1; i <= itemCount; i += 1) {
    styles += `
		 &:nth-of-type(${i}) {
			transform: rotate(${rot * 1}deg)
				translate(${circleSize / 2 + 20}px)
				rotate(${rot * -1}deg);
		}`
    rot = rot + angle
  }

  let rotationStyle = css`
    ${styles}
  `

  return `
		width: ${circleSize}px;
		height: ${circleSize}px;
		padding: 0;
		list-style: none;
		> * {
			display: flex;
  		justify-content: center;
			align-items: center;
			transform: scale(${show ? 1 : 0});
			opacity: ${show ? 1 : 0};
			z-index: ${show ? 1 : -1};
			transition: all 500ms ease-in;
			position: absolute;
			top: 50%;
			left: 50%;
			width: ${itemSize}px;
			height: ${itemSize}px;
			margin: -${itemSize / 2}px;
			${rotationStyle}
		}
	`
}

const OuterCircle = Styled.div`
		position: fixed;
		z-index: 1000;
		opacity: ${({ navigationOpen }) => (navigationOpen ? 1 : 0)};
		top: calc(50% - ${({ navigationOpen }) => (navigationOpen ? '200px' : '0px')});
		left: calc(50% - ${({ navigationOpen }) => (navigationOpen ? '200px' : '0px')});
		height: ${({ navigationOpen }) => (navigationOpen ? '400px' : '5px')};
		width: ${({ navigationOpen }) => (navigationOpen ? '400px' : '5px')};
		border: 5px solid #0075cb;
		transition: height 500ms ease-in, opacity ${({ navigationOpen }) =>
      navigationOpen
        ? '200ms'
        : '500ms'} ease-out , width 500ms ease-in, top 500ms ease-in, left 500ms ease-in; 
		border-radius: 50%;
`

const CircularBar = Styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	height: ${({ navigationOpen }) => (navigationOpen ? '300px' : '0px')};
	width: ${({ navigationOpen }) => (navigationOpen ? '300px' : '0px')};
	border: 5px solid ${({ navigationOpen }) =>
    navigationOpen ? '#0075cb' : 'transparent'};
	transition: all 500ms ease-in; 
	transform: translate(-50%, -50%);
	border-radius: 50%;
	opacity: 0.5;
	${({ navigationOpen, itemCount }) => mixin(itemCount, navigationOpen)} 
`

class RotatingNavigation extends React.Component {
  constructor() {
    super()
    this.state = {
      navigationOpen: false,
      dragging: false,
      rotation: 0,
      initialX: undefined,
      initialY: undefined,
      startAngle: 0,

      draggingDial: false,
      top: undefined,
      left: undefined,
      dialX: undefined,
      dialY: undefined,
    }
  }

  toggleNavigation = () => {
    this.setState({ navigationOpen: !this.state.navigationOpen })
  }

  handleMouseDown = (e) => {
    let initialX = e.pageX
    let initialY = e.pageY
    let centerX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
    let centerY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2
    let startAngle =
      90 - Math.atan2(centerY - initialY, initialX - centerX) * (180 / Math.PI)
    this.setState({
      dragging: true,
      initialX,
      initialY,
      centerX,
      centerY,
      startAngle,
    })
  }

  handleMouseMove = (e) => {
    const {
      initialX,
      initialY,
      centerX,
      centerY,
      rotation,
      dragging,
      startAngle,
    } = this.state
    if (dragging) {
      var currX = e.pageX
      var currY = e.pageY

      if (
        (initialX === centerX && initialX === currX) ||
        (initialY === centerY && initialY === currY)
      ) {
        return
      }

      var newAngle =
        90 - Math.atan2(centerY - currY, currX - centerX) * (180 / Math.PI)
      var angleChange = newAngle - startAngle
      var toRotate = (rotation + angleChange) % 360
      this.setState({
        rotation: toRotate,
        startAngle: newAngle,
      })
    }
  }

  handleMouseUp = (e) => {
    this.setState({
      dragging: false,
    })
  }

  handleDialDown = (e) => {
    let dialX = e.pageX
    let dialY = e.pageY
    let left = e.currentTarget.offsetLeft
    let top = e.currentTarget.offsetTop
    this.setState({
      draggingDial: true,
      dialX,
      dialY,
      left,
      top,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dragging !== this.state.dragging) {
      if (this.state.dragging) {
        window.addEventListener('mousemove', this.handleMouseMove)
        window.addEventListener('mouseup', this.handleMouseUp)
      } else {
        window.removeEventListener('mousemove', this.handleMouseMove)
        window.removeEventListener('mouseup', this.handleMouseUp)
      }
    }
    if (prevState.draggingDial !== this.state.draggingDial) {
      if (this.state.draggingDial) {
        window.addEventListener('mousemove', this.handleDialMove)
        window.addEventListener('mouseup', this.handleDialUp)
      } else {
        window.removeEventListener('mousemove', this.handleDialMove)
        window.removeEventListener('mouseup', this.handleDialUp)
      }
    }
  }

  handleDialMove = (e) => {
    const { draggingDial, dialX, dialY, left, top } = this.state
    if (draggingDial) {
      var currX = e.pageX
      var currY = e.pageY
      var newTop = top + (currY - dialY)
      var newLeft = left + (currX - dialX)
      this.setState({
        top: newTop,
        left: newLeft,
        dialX: currX,
        dialY: currY,
        callAction: false,
      })
    }
  }
  handleDialUp = (e) => {
    if (this.state.callAction) {
      this.toggleNavigation()
    } else {
      const { top, left } = this.state
      let winHeight = window.innerHeight
      let winWidth = window.innerWidth
      let disRight = winWidth - left
      let disBottom = winHeight - top
      var newTop = top
      var newLeft = left
      if (minNum(disRight, disBottom, top, left)) {
        newLeft = winWidth - 50
      }
      if (minNum(disBottom, top, left, disRight)) {
        newTop = winHeight - 50
      }
      if (minNum(top, disRight, disBottom, left)) {
        newTop = 0
      }
      if (minNum(left, disRight, disBottom, top)) {
        newLeft = 0
      }
      this.setState({
        top: newTop,
        left: newLeft,
      })
    }
    this.setState({
      draggingDial: false,
      callAction: true,
    })
  }

  render() {
    const { navigationOpen, rotation, top, left } = this.state
    const navProps = {
      rotate: rotation,
      navigationOpen,
    }
    return (
      <>
        <NavDial
          size={50}
          onMouseDown={this.handleDialDown}
          style={{
            top: top || 'calc(100% - 50px)',
            left: left || '50%',
          }}></NavDial>
        <OuterCircle
          style={{ transform: `rotate(${rotation}deg)` }}
          onMouseDown={this.handleMouseDown}
          navigationOpen={navigationOpen}>
          <CircularBar
            itemCount={NavOptions.length}
            navigationOpen={navigationOpen}>
            {NavOptions.map((options, key) => {
              return (
                <NavItem
                  key={key}
                  to={options.to}
                  icon={options.icon}
                  {...navProps}
                />
              )
            })}
          </CircularBar>
        </OuterCircle>
      </>
    )
  }
}

export default RotatingNavigation

const NavItem = (props) => {
  return (
    <NavLink to={props.to}>
      <span
        className="material-icons"
        style={{
          transform: `rotate(${-props.rotate}deg)`,
        }}>
        {props.icon}
      </span>{' '}
    </NavLink>
  )
}
