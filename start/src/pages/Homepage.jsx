import React from 'react'
import { Blog, Hero, Discover, Carousel, Media, Regulatory, Ctaapp, More, Footer } from '../components'





const Homepage = () => {


  return (
    <div className='mt-12'>
        
        <Hero />
        <Discover />
        <Carousel />
        <div style={{height: 900, overflow: 'hidden'}}>
          <Blog />
        </div>
        <More />
        <Media />
        <Ctaapp />
        <Regulatory />
        <Footer />
    </div>
  )
}

export default Homepage

