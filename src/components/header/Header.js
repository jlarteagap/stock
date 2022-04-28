import React, { useState } from 'react'
import logoStock from '../../assets/stock__logo.png'
import logoStockW from '../../assets/stock__logo_w.png'
import './header.css'
import { Menu } from './Menu'
import useData from '../../hooks/useData'

const Header = () => {
  const { company } = useData()
  const [menuSize, setMenuSize] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setMenuSize(true)
    } else {
      setMenuSize(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className="header">
      <nav
        className={`${
          menuSize ? 'header__navbar-white' : 'header__navbar'
        } navbar is-fixed-top`}
        role="navigation"
      >
        <div className="container is-widescreen">
          <div className="header__brand navbar-brand">
            <a className="navbar-item" href={company.url}>
              <img src={menuSize ? logoStock : logoStockW} width="200" />
            </a>
          </div>
          <Menu />
        </div>
      </nav>
    </div>
  )
}

export default Header
