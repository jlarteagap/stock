import React, { useState } from 'react'
import './contact.css'
import { Modal } from '../utils/Modal'

const Contact = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="contact" id="contacto">
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
            <button
              className="contact__button button is-outlined is-large"
              onClick={toggleModal}
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      <Modal modal={modal} toggleModal={toggleModal} />
    </div>
  )
}

export default Contact
