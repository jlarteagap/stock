import React, { useEffect, useState } from 'react'
import './modules.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getServices } from '../../api/Api'
import useData from '../../hooks/useData'
const Modules = () => {
  const { updateModules } = useData()
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

  useEffect(() => {
    if (modules.length > 0) {
      updateModules()
    }
  }, [modules])

  return (
    <div className="modules container" id="modulos">
      <Splide options={options}>
        {modules.map(module => {
          return (
            <SplideSlide
              key={module.ID_CONTENIDO}
              className="module__slide is-flex"
            >
              <div className="module__slide-media">
                <img
                  loading="lazy"
                  className="module__slide-img"
                  src={module.IMAGENES[0].URL}
                  alt={module.IMAGENES[0].ID_ARCHIVO}
                />
              </div>
              <div className="module__slide-content">
                <h3 className="module__slide-title is-size-3 is-size-5-mobile has-text-weight-bold">
                  {module.TITULO}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: module.CONTENIDO }}
                  className="module__slide-desc has-text-weight-bold is-size-7-mobile"
                />
              </div>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}
export default Modules
