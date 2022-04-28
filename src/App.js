import React from 'react'
import { Contact, Download, Footer, Header, Slide } from './components'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Slide />
        <Download />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
