import React from 'react'

export const BurgerMenu = ({ menuSize, onClick, isActive }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`${
        menuSize ? 'header__burger' : 'header__burger-w'
      } navbar-burger ${isActive && 'is-active'}`}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  )
}
