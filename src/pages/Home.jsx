import React from 'react'
//import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'
//import Footer from '../components/Footer'
import Dropbacks from '../components/Dropbacks'
import AboutUs from '../components/About'
import ElementsIntro from '../components/ElementsIntro'
import BottomCTABanner from '../components/BottomBanner'
import VideoSection from '../components/VideoSection'

const Home = () => {
  return (
    <div>
        <MainBanner/>
        <ElementsIntro/>
        <AboutUs/>
        <Dropbacks/>
        <VideoSection/>
        <BottomCTABanner/>
    </div>
  )
}

export default Home