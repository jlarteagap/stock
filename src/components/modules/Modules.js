import React, { useEffect, useRef, useState } from 'react'
import './modules.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getServices } from '../../api/Api'
import useData from '../../hooks/useData'
const Modules = () => {
  const { updateModules, menuObserver } = useData()
  const [modules, setModules] = useState([])
  const [moduleVisible, setModuleVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  const ModulesRef = useRef()

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setModuleVisible('#modulos')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(ModulesRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(moduleVisible)
    }
  }, [entryObserver, moduleVisible])

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
    <div ref={ModulesRef}>
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
    </div>
  )
}
export default Modules
