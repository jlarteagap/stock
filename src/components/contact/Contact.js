import React, { useState, useRef, useEffect } from 'react'
import './contact.css'
import { Modal } from '../utils/Modal'
import useData from '../../hooks/useData'

const Contact = () => {
  const { menuObserver } = useData()

  const contactRef = useRef()
  const [modal, setModal] = useState(false)
  const [contactVisible, setContactVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setContactVisible('#contacto')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(contactRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(contactVisible)
    }
  }, [entryObserver, contactVisible])

  return (
    <div className="contact" id="contacto" ref={contactRef}>
      <div className="container">
        <div className="contact__header mb-5">
          <h2 className="contact__header-title has-text-weight-bold">
            ¡Stockeate
            <br />
            right now!
          </h2>
        </div>
        <div className="contact__content is-flex">
          <div className="">
            <p className="contact__content-text is-size-3 is-size-6-mobile">
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
