import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ProductViewer />
    </main>
  )
}

export default App