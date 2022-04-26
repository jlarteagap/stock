import React from 'react'
import { FormContact } from './FormContact'

export const Modal = ({ modal, toggleModal }) => {
  return (
    <div className={`modal ${modal && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal__card modal-card-head">
          <p className="modal-card-title has-text-centered has-text-weight-bold">
            Contactános
          </p>
          <button className="delete" onClick={toggleModal}></button>
        </header>
        <section className="modal-card-body">
          <FormContact toggleModal={toggleModal} />
        </section>
      </div>
    </div>
  )
}
