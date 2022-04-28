import React from 'react'

export const Menu = () => {
  const getDataMenu = e => {
    console.log(e)
  }
  return (
    <div className="header__menu navbar-menu">
      <div className="navbar-start">
        <a className="header__menu-item navbar-item has-text-weight-bold">
          Home
        </a>

        <a className="header__menu-item navbar-item has-text-weight-bold">
          Documentation
        </a>
        <a
          className="header__menu-item navbar-item has-text-weight-bold"
          href="#contacto"
          onClick={getDataMenu}
        >
          Contacto
        </a>
      </div>
    </div>
  )
}
