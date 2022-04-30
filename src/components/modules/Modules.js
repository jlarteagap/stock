import React, { useEffect, useState } from 'react'
import './modules.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getServices } from '../../api/Api'

const Modules = () => {
  const [modules, setModules] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getServices('módulos')
        setModules(res.records.reverse())
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const options = {
    arrows: true,
    rewind: true,
    pagination: false,
    interval: 10000,
    autoplay: true,
    perPage: 1,
    perMove: 1,
    type: 'loop'
  }
  return (
    <>
      <div className="modules container">
        <Splide options={options}>
          {modules.map(module => {
            return (
              <SplideSlide
                key={module.ID_CONTENIDO}
                className="module__slide is-flex"
              >
                <div className="module__slide-media">
                  <img
                    className="module__slide-img"
                    src={module.IMAGENES[0].URL}
                    alt={module.IMAGENES[0].ID_ARCHIVO}
                  />
                </div>
                <div className="module__slide-content">
                  <h3 className="module__slide-title is-size-3 has-text-weight-bold">
                    {module.TITULO}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: module.CONTENIDO }}
                    className="module__slide-desc has-text-weight-bold"
                  />
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </>
  )
}
export default Modules
