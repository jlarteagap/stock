import React from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import useData from '../../hooks/useData'

export const Download = () => {
  const { company } = useData()

  let link = ''
  let android = ''
  let iOS = ''
  if (company.apps.includes('playstore')) {
    android = company.apps
  } else if (company.apps.includes('appstore')) {
    iOS = 'https://appstore.com'
  } else {
    link = company.apps
  }

  if (isAndroid) {
    link = android
  } else if (isIOS) {
    link = iOS
  } else {
    link = company.apps
  }

  return (
    <a
      className="slide__button button is-rounded is-large"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      DESCARGAR
    </a>
  )
}
