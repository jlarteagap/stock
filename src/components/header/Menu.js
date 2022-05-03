import React from 'react'
import useData from '../../hooks/useData'

export const Menu = ({ isActive, menuSize, onClick }) => {
  const { menuActive, downloadContext, modulesContext } = useData()

  return (
    <div className={`header__menu navbar-menu ${isActive && 'is-active'}`}>
      <div className="navbar-start">
        <a
          onClick={onClick}
          href="#"
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#' && 'isActive'
          }`}
        >
          Home
        </a>

        {downloadContext && (
          <a
            onClick={onClick}
            className={`header__menu-item navbar-item has-text-weight-bold ${
              menuActive === '#descargar' && 'isActive'
            }`}
            href="#descargar"
          >
            Descarga App
          </a>
        )}
        {modulesContext && (
          <a
            onClick={onClick}
            className={`header__menu-item navbar-item has-text-weight-bold ${
              menuActive === '#modulos' && 'isActive'
            }`}
            href="#modulos"
          >
            Módulos
          </a>
        )}
        <a
          onClick={onClick}
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
