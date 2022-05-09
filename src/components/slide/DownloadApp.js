import React from 'react'
// import { isAndroid, isIOS } from 'react-device-detect'
import useData from '../../hooks/useData'

export const Download = () => {
  const { company } = useData()

  return (
    <a
      className="slide__button button is-rounded is-large"
      href={company.apps}
      target="_blank"
      rel="noreferrer"
    >
      DESCARGAR
    </a>
  )
}
