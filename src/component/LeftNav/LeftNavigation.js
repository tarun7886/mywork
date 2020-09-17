import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { IconButton, Icon } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import { toggleLeftNav } from '../../actions/LayoutActions'
import _ from 'underscore'

const NavigationBar = ({ isOpen, toggleLeftNav }) => {
  const NavOptions = [
    { text: 'Home', to: 'home', icon: 'home' },
    {
      text: 'Text editor',
      to: 'text-editor',
      icon: 'chrome_reader_mode',
      extendClass: 'left-left-module',
    },
    {
      text: 'Image Editor',
      to: 'image-editor',
      icon: 'aspect_ratio',
      extendClass: 'left-left-module',
    },
    {
      text: 'Tambola',
      to: 'tambola',
      icon: 'games',
      extendClass: 'left-left-module',
    },
    {
      text: 'Finance Tool',
      to: 'finance-tool',
      icon: 'calculator',
      extendClass: 'left-left-module',
    },
    'space',
    { text: 'About', to: 'about', icon: 'book' },
    { text: 'Contact', to: 'contact', icon: 'phone' },
  ]

  return (
    <div className={`left-navigation-bar`}>
      <div className={`left-left-nav ${isOpen ? 'open' : ''}`}>
        <div className="left-left-nav-header">
          <div className="left-left-nav-header-icon">
            <MenuIcon fontSize="large" />
          </div>
          <div className="left-left-nav-header-content">
            <div>Tarun Jain</div>
            <IconButton
              onClick={toggleLeftNav}
              disableFocusRipple
              disableRipple
              className="floating-pin-btn"
              aria-label="pin">
              <Icon>push_pin</Icon>
            </IconButton>
            <div className={`left-left-nav-header-score Medium`}>Logged In</div>
          </div>
        </div>
        {_.map(NavOptions, (value, key) => {
          if (value === 'space') {
            return <NavItem renderSpace />
          }
          return <NavItem key={key} {...value} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.LayoutReducer.leftNavPinned,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    toggleLeftNav,
  })(NavigationBar)
)

const NavItem = (props) => {
  const { to = '', text, icon, extendClass = '', renderSpace = false } = props
  if (renderSpace) {
    return <div style={{ height: '40px' }}></div>
  }

  return (
    <NavLink className="left-left-nav-link" to={to}>
      <div className={`left-left-nav-item ${extendClass}`}>
        <div className="left-left-nav-icon-container">
          <span className="material-icons">{icon}</span>
        </div>
        <div className="left-left-nav-text">
          <span className="left-left-nav-text">{text}</span>
        </div>
      </div>
    </NavLink>
  )
}
