import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase/Showcase'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ProductViewer />
      <Showcase />
    </main>
  )
}

export default App