import React from 'react'
import useData from '../../hooks/useData'
import { Link } from 'react-scroll'
export const Menu = ({ isActive, onClick }) => {
  const { downloadContext, modulesContext } = useData()

  return (
    <div className={`header__menu navbar-menu ${isActive && 'is-active'}`}>
      <div className="navbar-start">
        <Link
          className={`header__menu-item navbar-item has-text-weight-bold`}
          to="home"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          onClick={onClick}
        >
          Home
        </Link>

        {downloadContext && (
          <Link
            className={`header__menu-item navbar-item has-text-weight-bold`}
            to="descargar"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            onClick={onClick}
          >
            Descargar
          </Link>
        )}
        {modulesContext && (
          <Link
            className={`header__menu-item navbar-item has-text-weight-bold`}
            to="modulos"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            onClick={onClick}
          >
            Módulos
          </Link>
        )}
        <Link
          className={`header__menu-item navbar-item has-text-weight-bold`}
          to="contacto"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          onClick={onClick}
        >
          Contacto
        </Link>
      </div>
    </div>
  )
}
