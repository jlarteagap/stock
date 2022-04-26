import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar is-fixed-top" role="navigation">
        <div className="header__brand navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
        </div>

        <div className="header__menu navbar-menu">
          <div className="navbar-start">
            <a className="header__menu-item navbar-item has-text-weight-bold">
              Home
            </a>

            <a className="header__menu-item navbar-item has-text-weight-bold">
              Documentation
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
