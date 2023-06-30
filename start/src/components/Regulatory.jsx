import React from 'react'

import walletbr from '../data/walletbr.svg'
import euroun from '../data/euroun.svg'
import cyprus from '../data/cyprus.jpeg'

const Regulatory = () => {
  return (
    <div>
        <div className='p-4 flex flex-col gap-2 lg:flex-row'>
            <div className='lg:border-r-1'>
                <h3 className='uppercase font-semibold'>WeHodler is regulated in cyprus and eu</h3>
            </div>
            <div className='flex flex-col gap-2 lg:flex-row lg:gap-1'>
                <div className='flex items-center gap-2 lg:w-60'>
                    <img src={cyprus} alt="cyprus flag" width='40' height='40' className='rounded-bg border-black' />
                    <div className='lg:text-xs'>WeHodler S.A<span className='font-semibold'>&nbsp;Regulated Financial Intermediary</span> and <span className='font-semibold'>&nbsp;Pawn Broker</span></div>
                </div>
                <div className='flex items-center gap-2 lg:w-60'>
                    <img src={euroun} alt="euro union" width='40' height='40' />
                    <div className='lg:text-xs'>WeHodler<span className='font-semibold'>&nbsp;Registration</span></div>
                </div>
                <div className='flex items-center gap-2 lg:w-60'>
                    <img src={walletbr} alt="wallet" width='40' height='40' />
                    <div className='lg:text-xs'>Partnership with regulated EU/Cyprus payment providers</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Regulatory