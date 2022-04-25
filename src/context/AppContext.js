import React, { createContext, useEffect, useState } from 'react'

const { API_HOST, A, E, UB } = window.CONFIG

export const AppContext = createContext({
  company: undefined
})

export function AppProvider({ children }) {
  const [company, setCompany] = useState([])
  useEffect(() => {
    const url = `${API_HOST}/empresa/?a=${A}&e=${E}&ub=${UB}`
    fetch(url)
      .then(res => res.json())
      .then(data => setCompany(data.records))
  }, [])

  const value = {
    company
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
