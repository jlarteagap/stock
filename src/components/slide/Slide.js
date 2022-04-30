import React, { useRef, useState, useEffect } from 'react'
import './slide.css'
// import landing from '../../assets/landing.png'
import { Slideshow } from './Slideshow'
import useData from '../../hooks/useData'

const Slide = () => {
  const { menuObserver } = useData()
  const slideRef = useRef()
  const [slideVisible, setSlideVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setSlideVisible('#')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(slideRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(slideVisible)
    }
  }, [entryObserver, slideVisible])
  return (
    <div ref={slideRef}>
      <div className="slide" id="#">
        <Slideshow />
        {/* <div className="slide__content is-flex is-align-items-center">
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
        </div> */}
      </div>
    </div>
  )
}
export default Slide
