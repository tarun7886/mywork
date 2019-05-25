import React from 'react'
import { Link } from 'react-router-dom'

const MainFooter = () => {
  return (
    <div className="footer-container" id="footer">
      <Link to="/home">
        <img src="" alt="Home" />
      </Link>
      <Link to="/about">
        <img src="" alt="About" />
      </Link>
      <Link to="/contact">
        <img src="" alt="Contact" />
      </Link>
    </div>
  )
}

export default MainFooter
