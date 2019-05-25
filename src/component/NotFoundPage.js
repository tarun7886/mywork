import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'

const NotFoundPage = ({ location }) => {
  let redirect =
    location.pathname === '/error/404'
      ? null
      : withRouter(<Redirect to="/error/404" />)
  return (
    <div className="page-not-found-container">
      {redirect}
      <p>404! Page not found</p>
      <p>
        <a href="/home">Click here to get back to home</a>
      </p>
    </div>
  )
}

export default withRouter(NotFoundPage)
