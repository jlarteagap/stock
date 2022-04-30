import React from 'react'
import { Contact, Download, Footer, Header, Modules, Slide } from './components'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Slide />
        <Download />
        <Modules />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
