import React from 'react'
import { BsSave2Fill } from 'react-icons/bs'
import { FaDivide, FaRocket, FaHandHoldingUsd } from 'react-icons/fa'

import { Ctaapp } from '../components'
import ImageSlider from './ImageSlider'
import { reviewSlides } from '../data/dummy'


import affipic from '../data/affipic.jpeg'
import cyprus from '../data/cyprus.jpeg'
import valleymember from '../data/valleymember.png'
import ledgerah from '../data/ledgerah.svg'
import ledger3 from '../data/ledger3.svg'
import supporticon from '../data/supporticon.svg'
import support2 from '../data/support2.svg'
import onboard from '../data/onboard.svg'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'


const Affiliates = () => {

  const allReviews = reviewSlides.map(each => 
    <ImageSlider key={each.key} 
                title={each.title}
                group={each.group}
                text={each.text}
                stars={each.stars}
                width={each.width}
                height={each.height}
    />
    
    )

    const leftArrowStyles = {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      left: '30px',
      fontSize: '45px',
      cursor: 'pointer',
      zIndex: 1
    }

    const rightArrowStyles = {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      right: '30px',
      fontSize: '45px',
      cursor: 'pointer',
      zIndex: 1
    }

  return (
    <div className='mt-20 p-6'>
      <div className='flex sm:flex-col lg:flex-row gap-4 p-4 lg:p-6'>
        <div>
          <h2 className='font-bold text-4xl my-4'>Join WeHodler Partner Program.</h2>
          <p>Be a part of a fast-growing company and get commissions for each active user you bring to the patform.</p>
          <button className='items-center font-semibold my-3 uppercase px-3 py-2 rounded-md bg-blue-500 text-white'>become an affiliate</button>
        </div>
        <div className='p-4 lg:p-6'>
          <img src={affipic} alt="" />
        </div>
      </div>

      <div className='lg:p-6'>
        <h2 className='font-bold text-3xl mt-4 mb-8 text-center'>How it works</h2>
        <p>Be a part of a fast-growing community and get commissions for each active user you bring to WeHodler.</p>
        <div className='grid lg:grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 mt-3'>
          <div className='flex sm:flex-col lg:flex-row lg:gap-2 sm:mb-2'>
            <p className='rounded-full h-7 w-7 text-center font-bold bg-blue-500 text-white items-center justify-center'>1</p>
            <p>Sign up</p>
          </div>
          <div className='flex sm:flex-col lg:flex-row lg:gap-2 sm:mb-2'>
            <p className='rounded-full h-7 w-7 text-center font-bold bg-blue-500 text-white items-center justify-center'>2</p>
            <p>Get tracking link</p>
          </div>
          <div className='flex sm:flex-col lg:flex-row lg:gap-2 sm:mb-2'>
            <p className='rounded-full h-7 w-7 text-center font-bold bg-blue-500 text-white items-center justify-center'>3</p>
            <p>Bring traffic</p>
          </div>
          <div className='flex sm:flex-col lg:flex-row lg:gap-2 sm:mb-2'>
            <p className='rounded-full h-7 w-7 text-center font-bold bg-blue-500 text-white items-center justify-center'>4</p>
            <p>Earn commissions</p>
          </div>
        </div>
      </div>

      <div className='mt-8 lg:p-6'>
        <h3 className='font-bold text-3xl'>Our Partner Program in numbers</h3>
        <div className='mt-3 grid sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3'>
          <div className='my-4'>
            <p className='font-bold text-blue-500 text-2xl'>3 ways of payout</p>
            <p>Fiat. crypto, or stablecoins.</p>
          </div>
          <div className='my-4'>
            <p className='font-bold text-blue-500 text-2xl'>2000+</p>
            <p>Partners and growing</p>
          </div>
          <div className='my-4'>
            <p className='font-bold text-blue-500 text-2xl'>No limit</p>
            <p>No limit</p>
          </div>
          <div className='my-4'>
            <p className='font-bold text-blue-500 text-2xl'>High payouts</p>
            <p>Above average payouts</p>
          </div>
          <div className='my-4'>
            <p className='font-bold text-blue-500 text-2xl'>up to <span className='text-3xl'>15%</span></p>
            <p>High conversion rate</p>
          </div>
          <div className='my-4'>
            <p className='font-bold text-blue-500 text-4xl'>130</p>
            <p>GEOs accepted</p>
          </div>
        </div>
      </div>

      <div className='mt-8 lg:p-6'>
        <h3 className='font-bold text-3xl mb-2'>Our best products</h3>
        <p>Here are our top offers for your audience and referrals</p>
        <div className='grid gap-3 sm:grid-cols-2 mt-4'>
          <div className='flex flex-col gap-2'>
            <p>
              <FaDivide color='blue' />
            </p>
            <p className='font-bold text-blue-500'>Crypto savings accounts</p>
            <p className='text-sm mb-3'>Users earn up to 8% APY from he moment they deposit crypto to their wallets.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>
              <BsSave2Fill color='blue' />
            </p>
            <p className='font-bold text-blue-500'>Hodler</p>
            <p className='text-sm mb-3'>A trading feature that enables traders to profit on the UP or DOWN market movements.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>
              <FaHandHoldingUsd color='blue' />
            </p>
            <p className='font-bold text-blue-500'>Crypto loans</p>
            <p className='text-sm mb-3'>90% Loan-To-Value ratio accepting 20 cryptos as collateral. No monthly installments.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>
              <FaRocket color='blue' />
            </p>
            <p className='font-bold text-blue-500'>Turbocharge</p>
            <p className='text-sm mb-3'>Get up to 10 loans on the borrowed collateral. Fixed fee. No rollover fees.</p>
          </div>
        </div>
      </div>

      <div className='my-6 lg:p-6'>
        <h3 className='font-bold mb-4 text-3xl lg:text-4xl lg:text-center lg:mb-8'>We are a partner you can trust</h3>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='flex flex-col gap-2'>
            <div>
              <img src={cyprus} alt="" height='40' width='40' className='rounded-full' />
            </div>
            <div className='text-sm'>Cyprus regulated company</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <img src={valleymember} alt="" width='130' height='40' />
            </div>
            <div className='text-sm'>Member of the Crypto Valley Association</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <img src={supporticon} alt="" width='32' height='32' />
            </div>
            <div className='text-sm'>24/7 Live Customer Support</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <img src={ledger3} alt="" width='130' height='40' />
            </div>
            <div className='text-sm'>Partnership with Ledger Vault</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <img src={onboard} alt="" width='32' height='32' />
            </div>
            <div className='text-sm'>Simple onboarding and beginner-friendly interface</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <img src={support2} alt="" width='32' height='32' />
            </div>
            <div className='text-sm'>Highly rated customer support</div>
          </div>
        </div>
      </div>

      <div className='mt-10 flex sm:flex-col md:flex-col lg:flex-row gap-3 lg:p-6'>
        <div className='lg:w-1/2'>
          <h3 className='font-bold text-3xl mb-2'>Who can participate?</h3>
          <div>
            <p>There are no restrictions on who can become our Partners: an individual or a company - simply sign up for our Affiliate Platform and start earning immediately.</p>
            <ul className='list-disc ml-8'>
              <li>Affiliates</li>
              <li>Crypto Investors</li>
              <li>Influencers</li>
              <li>Crypto Enthusiast with family and friends</li>
              <li>Referral Brokers</li>
            </ul>
            <p className='mt-2'>Whoever you are, we know exactly what you need. Whether you are driving traffic via a website, have a strong online presence, working with social media accounts, online crypto educational platforms, and other digital media. We have a commission plan that suits all.</p>
          </div>
        </div>
        <div className='p-4 lg:w-1/2'>
          <h3 className='font-bold text-3xl my-2'>We are a partner you can trust</h3>
          <div>
            <ul className='list-disc'>
              <li>Automated tracking links for dedicated landing pages</li>
              <li>Dedicated account managers</li>
              <li>Dashboard for traffic analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='mt-10 lg:p-6'>
        <h3 className='font-bold text-4xl lg:text-5xl mb-4'>What our partners say about us</h3>
        <div className='h-96 w-full shadow-md overflow-hidden bg-white m-auto flex relative'>
          <div style={leftArrowStyles}><AiOutlineLeft /></div>
          <div className='flex gap-3'>{allReviews}</div>
          <div style={rightArrowStyles}><AiOutlineRight /></div>
        </div>
      </div>

      <div className='my-4'>
        <div className='italic text-center'>Do you know some people who have a crypto audience?</div>
      </div>

      <div className='my-10 lg:p-6'>
        <h2 className='text-3xl font-bold mb-2'>Become a Top Affiliate</h2>
        <p className='m-auto w-4/5 lg:w-3/5'>You can earn <span className='font-bold'>5% for life</span> in commissions when you refer someone to us. We created a thriving program where out partners have multiple ways to benefit and grow.</p>
        <div className='text-center'><button className='font-semibold cursor-pointer my-3 uppercase px-3 py-2 rounded-md bg-blue-500 text-white'>Join us now</button></div>
        <p>Have questions? Check our <a href='https://wehodler.com/affiliatefaq' className='text-blue-300 cursor-pointer underline'>Affiliate program FAQ</a></p>
      </div>

      <Ctaapp />
    </div>
  )
}

export default Affiliates