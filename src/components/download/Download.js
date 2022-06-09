import React, { useEffect, useState } from 'react'
import './download.css'
import { getServices } from '../../api/Api'

import useData from '../../hooks/useData'
const Download = () => {
  const { updateDownload } = useData()

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
    if (download.length > 0) {
      updateDownload()
    }
  }, [download])

  return (
    <div className={`${download ? '' : 'is-hidden'}`}>
      {download.length > 0 && (
        <div className="download" id="descargar">
          <div className="container">
            <div className="download__content is-flex is-justify-content-space-around">
              {download.map(item => {
                return (
                  <div
                    key={item.ID_CONTENIDO}
                    dangerouslySetInnerHTML={{ __html: item.CONTENIDO }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Download
