import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="main-header">
      <div className="main-header-nav-items">
        <LinkItem title="Home" icon="home" to="home" />
        <LinkItem title="Contact" icon="phone" to="contact" />
        <LinkItem title="About" icon="book" to="about" />
        <LinkItem title="Write" icon="chrome_reader_mode" to="text-editor" />
        <LinkItem title="Profile" icon="aspect_ratio" to="image-editor" />
        <LinkItem title="Tambola" icon="games" to="tambola" />
      </div>
    </div>
  )
}

const LinkItem = props => {
  return (
    <NavLink to={`/${props.to}`} className="main-header-item">
      <div className="active-line"></div>
      <div className="main-header-icon">
        <span className="material-icons">{props.icon}</span>
      </div>
      <div className="main-header-text">{props.title}</div>
    </NavLink>
  )
}
