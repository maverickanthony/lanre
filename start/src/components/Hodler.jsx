import React from 'react'
import { Ctaapp } from '../components'
import ledgerah from '../data/ledgerah.svg'
import cyprus from '../data/cyprus.jpeg'
import hodlerone from '../data/hodlerone.jpeg'
import hodlertwo from '../data/hodlertwo.png'
import walletbr from '../data/walletbr.svg'
import euroun from '../data/euroun.svg'

const Hodler = () => {
  return (
    <div className='mt-20 p-6 lg:p-8'>
      <div className='lg:flex'>
        <div className='mb-3 lg:w-3/5'>
          <h1 className='text-3xl font-bold leading-10 lg:font-extrabold lg:text-5xl'>Hodler. Way better than trading.</h1>
          <h4 className='lg:font-bold lg:mt-2'>Super fast execution. No profit share fee. Instant withdrawal and deposit. Online support 24/7.</h4>
          <div className='mt-3'>
            <button className='bg-blue-500 rounded-md px-3 py-2 font-bold uppercase text-white'>Get started</button>
          </div>
          <div className='mt-3 p-3'>
              <div className='flex gap-2'>
                  <img src={cyprus} alt="" width='40' height='40' />
                  <p className='text-sm'>Regulated EU and Cyprus Financial Institutions</p>
              </div>
              <div className='flex gap-2 mt-2'>
                  <img src={ledgerah} alt="" width='40' height='40' />
                  <p className='text-sm'>Custody secured by Ledger Enterprise</p>
              </div>
          </div>
        </div>
        <div className='lg:w-2/5'>
          <img src={hodlerone} alt="" />
        </div>
      </div>

      <div className='mt-6'>
        <h2 className='font-bold text-2xl text-center mb-2'>Why Hodler is better than trading on Traditional Exchanges</h2>
        <p className='mb-3'>Hodler combines the best of both crypto exchanges and traditional trading on platforms into one. Simple, yet intuitive interface and convenient trade management.</p>
        <table>
          <tr>
            <th></th>
            <th className='lg:p-3 p-3 bg-blue-200 text-blue-500'>WEHODLER</th>
            <th className='lg:p-3'>CRYPTO EXCHANGES</th>
            <th className='lg:p-3'>TRADING PLATFORMS</th>
          </tr>
          <tr>
            <td className='p-3'>Real Execution</td>
            <td className='p-3 bg-blue-200 text-blue-500 text-center font-semibold'>Yes</td>
            <td className='p-3 text-center'>Yes</td>
            <td className='p-3 text-center'>No</td>
          </tr>
          <tr>
            <td className='p-3'>Online support 24/7</td>
            <td className='p-3 bg-blue-200 text-blue-500 text-center font-semibold'>Yes</td>
            <td className='p-3 text-center'>No</td>
            <td className='p-3 text-center'>No</td>
          </tr>
          <tr>
            <td className='p-3'>CFD Trading</td>
            <td className='p-3 bg-blue-200 text-blue-500 text-center font-semibold'>No</td>
            <td className='p-3 text-center'>No</td>
            <td className='p-3 text-center'>Yes</td>
          </tr>
          <tr>
            <td className='p-3'>Simple interface without orderbook</td>
            <td className='p-3 bg-blue-200 text-blue-500 text-center font-semibold'>Yes</td>
            <td className='p-3 text-center'>No</td>
            <td className='p-3 text-center'>Sometimes</td>
          </tr>
          <tr>
            <td className='p-3'>0% fee for the first 3 hours</td>
            <td className='p-3 bg-blue-200 text-blue-500 text-center font-semibold'>Yes</td>
            <td className='p-3 text-center'>No</td>
            <td className='p-3 text-center'>No</td>
          </tr>
          <tr>
            <td className='p-3'>Instant withdrawal</td>
            <td className='p-3 bg-blue-200 text-blue-500 text-center font-semibold'>Yes</td>
            <td className='p-3 text-center'>Yes</td>
            <td className='p-3 text-center'>No</td>
          </tr>
          <tr>
            <td className='p-3'>Can keep earning interest on funds while trading</td>
            <td className='p-3 bg-blue-200 text-blue-500 text-center font-semibold'>Yes</td>
            <td className='p-3 text-center'>No</td>
            <td className='p-3 text-center'>No</td>
          </tr>
        </table>
      </div>

      <div className='mt-6'>
        <h1 className='font-bold text-3xl mb-3 text-center'>The Chrome Strategy</h1>
        <p className='m-3 text-center'>Limit your risks while leveraging potentially high gains.</p>
        <div className='flex'>
          <div className='font-bold rounded-sm text-green-600 bg-green-200 w-3/5 p-2 shadow-md'>80%</div>
          <div className='font-bold rounded-sm text-white bg-green-400 w-2/5 p-2 shadow-md'>20%</div>
        </div>
        <div className='flex gap-2'>
          <div className='w-3/5 ml-2 lg:ml-3'>
            <h3 className='font-bold my-2'>Savings Account</h3>
            <p className='text-sm mb-2'>A conservative part of your portfolio and an extremely safe investment. It is advisable to put 80 to 90 percent of your money in cryptocurrency and stablecoin savings.</p>
            <p className='font-bold text-green-400'>9% a year</p>
            <p className='text-sm text-gray-600 mb-2'>Guaranteed profit</p>
            <p className='font-bold text-red-800'>0%</p>
            <p className='text-sm text-gray-600 mb-2'>No risk</p>
          </div>
          <div className='w-2/5 ml-2 lg:ml-3'>
            <h3 className='font-bold my-2'>Hodler</h3>
            <p className='text-sm mb-2'>Small, speculative bets, this is a high risk high reward investment.</p>
            <p className='font-bold text-green-400'>+300%</p>
            <p className='text-sm text-gray-600 mb-2'>Potential profit</p>
            <p className='font-bold text-red-800'>-45%</p>
            <p className='text-sm text-gray-600 mb-2'>Potential risk</p>
          </div>
        </div>
      </div>

      <div className='mt-6 text-center'>
        <h2 className='text-3xl my-3 font-bold lg:my-10 lg:text-4xl'>How Hodler works?</h2>
        <div className='lg:flex lg:gap-6'>
          <img src={hodlertwo} alt="" className='mb-4 lg:w-2/5 md:m-auto md:h-96 sm:m-auto sm:h-96 object-contain' />
          <div className='lg:w-3/5'>
            <div className='mt-3'>
              <div className='flex font-bold text-xl gap-2 items-center'><span className='bg-blue-500 text-white rounded-full p-2'>1</span><p>Select a coin or token</p></div>
              <p className='text-sm'>All major cryptocurrencies and stablecoins are available.</p>
            </div>
            <div className='mt-3'>
              <div className='flex font-bold text-xl gap-2 items-center'><span className='bg-blue-500 text-white rounded-full p-2'>2</span><p>Set profit and risk levels</p></div>
              <p className='text-sm'>Pick a desired "take profit" amount and an acceptable level of risk. Also, choose the crypto you want to use as a multiplication tool if you use Hodler for your stablecoin savings.</p>
            </div>
            <div className='mt-3'>
              <div className='flex font-bold text-xl gap-2 items-center'><span className='bg-blue-500 text-white rounded-full p-2'>3</span><p>Withdraw crypto anytime</p></div>
              <p className='text-sm'>Easily track progress and close positions when you want to take a profit or get the rest of your crypto back. Your position will be closed automatically in case the price drops below your loss level.</p>
              <p className='mt-3 italic text-sm'>Your risk is limited. You cannot lose more than you set while using Hodler. (e.g If you deposit $100, the max. you can lose is $100). Fees are paid hourly during the duration of the loan.</p>
            </div>
            <div className='mt-3'>
              <div className='flex font-bold text-xl gap-2 items-center'><span className='bg-blue-500 text-white rounded-full p-2'>4</span><p>Repeat</p></div>
              <p className='text-sm'>We suggest using around 20% of your savings for Hodler and 80% for low-risk instruments such as Savings or Crypto loans. It is important to keep your portfolio diversified.</p>
            </div>
            <div className='mt-6 lg:text-left'>
              <button className='bg-blue-500 px-3 py-2 lg:px-5 rounded-md text-white font-bold uppercase'>Try Now</button>
            </div>
          </div>
        </div>
      </div>

      <Ctaapp />

      <div className='p-4 flex flex-col gap-2 lg:flex-row lg:mt-2 mt-3'>
        <div className='lg:border-r-1'>
            <h3 className='uppercase font-semibold'>WeHodler is regulated in cyprus and eu</h3>
        </div>
        <div className='flex flex-col gap-2 lg:flex-row lg:gap-1'>
            <div className='flex gap-2 items-center lg:w-60'>
                <img src={cyprus} alt="cyprus flag" width='40' height='40' className='rounded-bg border-black' />
                <div className='lg:text-xs text-sm'>WeHodler S.A<span className='font-semibold'>&nbsp;Regulated Financial Intermediary</span> and <span className='font-semibold'>&nbsp;Pawn Broker</span></div>
            </div>
            <div className='flex gap-2 items-center lg:w-60'>
                <img src={euroun} alt="euro union" width='40' height='40' />
                <div className='lg:text-xs text-sm'>WeHodler<span className='font-semibold'>&nbsp;OAM Registration</span></div>
            </div>
            <div className='flex gap-2 items-center lg:w-60'>
                <img src={walletbr} alt="wallet" width='40' height='40' />
                <div className='lg:text-xs text-sm'>Partnership with regulated EU/Cyprus payment providers</div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Hodler