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

  const menuObserver = menu => {
    setMenuActive(menu)
  }
  const updateDownload = () => {
    setDownloadContext(!downloadContext)
  }
  const updateModules = () => {
    setModulesContext(!modulesContext)
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
    downloadContext,
    modulesContext,
    updateDownload,
    updateModules
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
