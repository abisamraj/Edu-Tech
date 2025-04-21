import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoPlayer from './components/VideoPlayer'


const App = () => {
  
  const [playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
    </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
