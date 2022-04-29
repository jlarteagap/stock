import React, { useEffect, useRef, useState } from 'react'
import './download.css'
import { getServices } from '../../api/Api'

import useData from '../../hooks/useData'
const Download = () => {
  const { menuObserver } = useData()
  const downloadRef = useRef()
  const [downloadVisible, setDownloadVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  const [download, setDownload] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getServices('descargar')
        setDownload(res.records)
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
      {download.length > 0 && (
        <div className="download" id="descargar" ref={downloadRef}>
          <div className="container">
            <div className="download__content is-flex is-justify-content-space-around">
              {download.map(item => {
                return (
                  <div
                    key={item.ID_CONTENIDO}
                    dangerouslySetInnerHTML={{ __html: item.CONTENIDO }}
                    className=""
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Download
