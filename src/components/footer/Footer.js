import React from 'react'
import { SocialIcon } from '../utils/SocialIcons'
import './footer.css'
const Footer = () => {
  const date = new Date()
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__social is-flex is-justify-content-center my-5 py-5">
          <SocialIcon size={24} />
        </div>
        <div className="footer__copy is-flex is-justify-content-center has-text-weight-bold">
          {date.getFullYear()} Stock. Todos los derechos reservados
        </div>
      </div>
    </div>
  )
}

export default Footer
