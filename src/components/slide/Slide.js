import React from 'react'
import './slide.css'
import landing from '../../assets/landing.png'
import { Slideshow } from './Slideshow'
const Slide = () => {
  return (
    <>
      <div className="slide">
        <Slideshow />
        <div className="slide__content container is-flex is-align-items-center">
          <img
            className="slide__landing-img"
            src={landing}
            alt="Descarga la Applicacion"
          />
          <div className="slide__landing-text">
            <h2 className="slide__landing-text-title has-text-weight-bold">
              ¡Stockeate
              <br />
              right now!
            </h2>
            <p className="slide__landing-text-subtitle is-size-3 my-6">
              Stock permite el registro centralizado de pedidos para todo tipo
              de distribuidora
            </p>
            <button className="slide__button button is-rounded is-large">
              DESCARGAR
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Slide
