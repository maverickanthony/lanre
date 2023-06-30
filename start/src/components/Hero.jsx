import React, { useState, useEffect } from 'react'

import { Button } from '.'
import { Link } from 'react-router-dom'
import cta from '../data/cta.png'
import heromain from '../data/heromain.jpeg'

const Hero = () => {

    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if(window.innerWidth < 900) {
            setMobile(true)
        }
      
      }, [])
      
  
  
      useEffect(() => {
        
          const handleResize = () => {
              if(window.innerWidth < 900) {
                  setMobile(true)
              } else {
                  setMobile(false)
              }
          }
  
          window.addEventListener('resize', handleResize)
      
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }, [])


  return (
    <div className='pt-3 mt-3 lg:flex'>
        <div className=' h-50 rounded-xl w-full  p-8 pt-9  bg-hero-pattern bg-no-repeat bg-cover bg-center lg:text-left lg:w-1/2'>
            <div>
                <h1 className='font-bold text-3xl mb-2 lg:text-7xl lg:leading-[5.75rem]'>All your Digital Assets in One Place</h1>
                <p className='lg:text-lg font-semibold'>We provide top benefits when it comes to crypto & fiat</p>
            </div>
            <Link to={`/signin`}>
                <div className='mt-5'>
                    <button className='font-bold text-white px-3 py-2 bg-blue-600 rounded-lg cursor-pointer'>Get Started</button>
                </div>
            </Link>
        </div>
        <div className='lg:w-1/2'>
            <img src={`${!mobile ? heromain : cta}`} />
        </div>
    </div>
  )
}

export default Hero