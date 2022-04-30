import React from 'react'
import useData from '../../hooks/useData'

export const Menu = () => {
  const { menuActive, downloadContext } = useData()

  return (
    <div className="header__menu navbar-menu">
      <div className="navbar-start">
        <a
          href="#"
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#' && 'isActive'
          }`}
        >
          Home
        </a>

        {downloadContext && (
          <a
            className={`header__menu-item navbar-item has-text-weight-bold ${
              menuActive === '#descargar' && 'isActive'
            }`}
            href="#descargar"
          >
            Descarga App
          </a>
        )}
        <a
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#contacto' && 'isActive'
          }`}
          href="#contacto"
        >
          Contacto
        </a>
      </div>
    </div>
  )
}
