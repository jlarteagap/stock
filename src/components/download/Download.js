import React, { useEffect, useRef, useState } from 'react'
import './download.css'
import icon1 from '../../assets/iconos1.png'
import icon2 from '../../assets/iconos2.png'
import icon3 from '../../assets/iconos3.png'

import useData from '../../hooks/useData'
const Download = () => {
  const { menuObserver } = useData()
  const downloadRef = useRef()
  const [downloadVisible, setDownloadVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setDownloadVisible('#descargar')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(downloadRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(downloadVisible)
    }
  }, [entryObserver, downloadVisible])

  return (
    <>
      <div className="download" id="descargar" ref={downloadRef}>
        <div className="container">
          <div className="download__content is-flex is-justify-content-space-around">
            <div className="download__content-item has-text-centered">
              <img src={icon1} alt="Descarga App" />
              <p className="has-text-weight-bold">
                Dale clic en el botón descargar app
              </p>
            </div>
            <div className="download__content-item has-text-centered">
              <img src={icon2} alt="Descarga App" />
              <p className="has-text-weight-bold">
                Abre la aplicación y regístrate para acceder a los módulos
              </p>
            </div>
            <div className="download__content-item has-text-centered">
              <img src={icon3} alt="Descarga App" />
              <p className="has-text-weight-bold">
                Si eres proveedor ingresa tus productos y datos para vender
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Download