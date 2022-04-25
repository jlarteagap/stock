import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__header">
          <h2 className="contact__header-title has-text-weight-bold">
            ¡Stockeate right now!
          </h2>
        </div>
        <div className="contact__content is-flex">
          <div className="">
            <p className="contact__content-text is-size-3">
              Simplificando el trabajo, gestión, control de preventistas y
              cobradores así como permitir gestionar las guías de entrega de
              estos pedidos, todo en tiempo real
            </p>
          </div>
          <div className="">
            <button className="contact__button button is-outlined is-large">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
