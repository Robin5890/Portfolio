import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Tabs from './components/Tabs'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  

  return(
    <div className={darkMode ? 'dark' : ''}>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Bio />
      <Tabs />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
