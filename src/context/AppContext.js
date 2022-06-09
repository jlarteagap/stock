import React, { createContext, useEffect, useState } from 'react'

const { API_HOST, A, E, UB } = window.CONFIG

export const AppContext = createContext({
  company: undefined
})

export function AppProvider({ children }) {
  const [company, setCompany] = useState([])
  const [menuActive, setMenuActive] = useState('#')
  const [downloadContext, setDownloadContext] = useState(false)
  const [modulesContext, setModulesContext] = useState(false)
  const [splash, setSplash] = useState(true)

  setTimeout(() => {
    setSplash(false)
  }, 3000)
  const menuObserver = menu => {
    setMenuActive(menu)
  }
  const updateDownload = () => {
    setDownloadContext(true)
  }
  const updateModules = () => {
    setModulesContext(true)
  }

  useEffect(() => {
    const url = `${API_HOST}/empresa/?a=${A}&e=${E}&ub=${UB}`
    fetch(url)
      .then(res => res.json())
      .then(data => setCompany(data.records))
  }, [])

  const value = {
    company,
    menuActive,
    menuObserver,
    splash,
    downloadContext,
    modulesContext,
    updateDownload,
    updateModules
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
