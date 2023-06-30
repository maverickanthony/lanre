import React from 'react'
import ctapp from '../data/ctapp.png'
import { BsApple } from 'react-icons/bs'
import { FaGooglePlay } from 'react-icons/fa'

const Ctaapp = () => {
  return (
    <div className='my-6 p-4'>
        <div className='flex flex-col items-center lg:flex-row lg:gap-6'>
            <div className='lg:ml-2'>
                <img src={ctapp} alt="" height='400' width='300' />
            </div>
            <div className='text-center lg:order-first lg:p-6 lg:ml-3'>
                <h1 className='font-bold text-2xl lg:text-3xl'>Get WeHodler Crypto Wallet App Now</h1>
                <p>Store, save, and spend fiat, stablecoins, and crypto. Rewards and loans integrated.</p>
                <div className='mt-2 flex justify-center'>
                    <button className='rounded-full bg-slate-300 px-3 py-1 mr-2 flex items-center gap-1 cursor-pointer'><BsApple /> <p><span className='text-sm text-gray-600'>Download on the</span> App Store</p></button><button className='rounded-full bg-slate-300 px-3 py-1 flex items-center gap-1 cursor-pointer'><FaGooglePlay /> <p><span className='text-sm text-gray-600'>Get it on</span> Google Play</p></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ctaapp