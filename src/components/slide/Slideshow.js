import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getGaleria } from '../../api/Api'
import '@splidejs/react-splide/css'
import landing from '../../assets/landing.png'
import useData from '../../hooks/useData'
import { Download } from './DownloadApp'

export const Slideshow = () => {
  const { company } = useData()
  const [slides, setSlides] = useState([])

  const options = {
    arrows: false,
    rewind: true,
    pagination: false,
    interval: 3000,
    autoplay: true,
    with: 100,
    // lazyLoad: 'sequential',
    perPage: 1,
    perMove: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    type: 'loop'
  }
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getGaleria('portada')

        setSlides(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      <Splide options={options} className="slide__carousel">
        {slides.map(slide => {
          return (
            <SplideSlide key={slide.ID_FOTO}>
              <img src={slide.URL} alt={slide.ID_FOTO} />
            </SplideSlide>
          )
        })}
      </Splide>
      <div className="slide__content is-flex is-align-items-center">
        <img
          className="slide__landing-img"
          src={landing}
          alt="Descarga la Applicacion"
        />
        <div className="slide__landing-text">
          <h2 className="slide__landing-text-title has-text-weight-bold">
            ┬íStockeate
            <br />
            ahora!
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: company.descripcion }}
            className="slide__landing-text-subtitle is-size-3 is-size-6-mobile my-6"
          />
          <Download />
        </div>
      </div>
    </>
  )
}
