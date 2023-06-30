import React, { useState } from 'react'

import { BsBookshelf } from 'react-icons/bs'
import { Ctaapp } from '../components'

import loanone from '../data/loanone.jpeg'
import ledgerah from '../data/ledgerah.svg'
import cyprus from '../data/cyprus.jpeg'

import walletbr from '../data/walletbr.svg'
import euroun from '../data/euroun.svg'
import loanpicloan from '../data/loanpicloan.png'

import btcsv from '../data/btcsv.svg'
import ethsv from '../data/ethsv.svg'
import link from '../data/link.svg'
import sushi from '../data/sushi.svg'
import doge from '../data/doge.svg'
import snx from '../data/snx.svg'
import xrp from '../data/xrp.svg'
import ltc from '../data/ltc.svg'
import trx from '../data/trx.svg'
import ada from '../data/ada.svg'
import avax from '../data/avax.svg'
import bnb from '../data/bnb.svg'
import near from '../data/near.svg'
import xmr from '../data/xmr.svg'
import ftm from '../data/ftm.svg'
import bch from '../data/bch.svg'
import xtz from '../data/xtz.svg'
import dot from '../data/dot.svg'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TbSwitchHorizontal } from 'react-icons/tb'



const Loans = () => {

  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (e)=> {
    setSelectedOption(e.target.value)
  }

  return (
    <div className='mt-20 p-6'>
      <div className='lg:flex'>
        <div>
          <h1 className='font-bold text-4xl mb-2'>Get Instant Crypto Loans</h1>
          <p>Use up to 30 Top coins as collateral for crypto loans with the highest loan-to-value ratio (90). Get loans in EUR, USD, CHF, GBP or even stablecoins or crypto and withdraw instantly to credit cards, banks or exchanges.</p>
          <div className='my-4'>
            <button className='bg-blue-500 px-3 py-2 lg:px-5 rounded-md text-white font-bold uppercase'>Get loan</button>
          </div>
          <div className='p-3 bg-slate-200 my-2 flex items-center gap-2'><BsBookshelf /> <p className='text-sm text-gray-500'><span className='text-black'>WeHodler SA</span> crypto-backed lending solutions structured in the form of collateralised loans. </p></div>
          <div className='p-3 bg-slate-200 my-2 flex items-center gap-2'><BsBookshelf /> <p className='text-sm text-gray-500'><span className='text-black'>WeHodler</span> crypto-lending solutions is structured in the form of token purchase/re-purchase agreements.</p></div>
          <div className='mt-3 p-3'>
              <div className='flex gap-2'>
                  <img src={cyprus} alt="" width='40' height='40' />
                  <p className='text-sm'>Regulated EU and Cyprus Financial Institutions</p>
              </div>
              <div className='flex gap-2 mt-4'>
                  <img src={ledgerah} alt="" width='40' height='40' />
                  <p className='text-sm'>Custody secured by Ledger Enterprise</p>
              </div>
          </div>
        </div>
        <div>
          <img src={loanone} alt="" />
        </div>
      </div>

      <div className='lg:mt-6 lg:w-3/5 m-auto'>
        <div>
          <div className='flex'>
            <div> 
              <div>
                <p className='font-bold mb-2'>Crypto Collateral</p>
                <div className='flex border rounded-sm border-blue-300 p-2'>
                  <div>
                    <div className='flex items-center'>
                      <select>
                        <option value="btc"> BTC</option>
                        <option value="usdt">USDT</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="eth">ETH</option>
                        <option value="bnb">BNB</option>
                        <option value="sol">SOL</option>
                        <option value="xrp">XRP</option>
                        <option value="dot">DOT</option>
                        <option value="ada">ADA</option>
                        <option value="doge">DOGE</option>
                        <option value="ltc">LTC</option>
                        <option value="uni">UNI</option>
                        <option value="link">LINK</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <input type="number" placeholder='0.00000000' className='text-right' />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='flex p-3 mt-8'><TbSwitchHorizontal /></div>
            </div>
            <div>
              <div>
                <p className='font-bold mb-2'>Loan Amount</p>
                <div className='flex border rounded-sm border-blue-300 p-2'>
                  <div>
                    <div className='flex items-center'>
                    <select>
                        <option value="usd">USD</option>
                        <option value="usdt">USDT</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <input type="number" placeholder='0.00' className='text-right' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div>
              <p className='font-bold mb-2'>Loan-to-value (LTV)</p>
              <div className='flex gap-2'> 
                <div className='bg-blue-100 py-2 px-3 rounded-md text-blue-500 font-bold cursor-pointer'><input type="radio" className='cursor-pointer'  name="" id="" value='90' checked={selectedOption === '90' } onChange={handleOptionChange} />90%</div>
                <div className='bg-blue-100 py-2 px-3 rounded-md text-blue-500 font-bold cursor-pointer'><input type="radio" className='cursor-pointer'  name="" id="" value='70' checked={ selectedOption === '70'} onChange={handleOptionChange} />70%</div>
                <div className='bg-blue-100 py-2 px-3 rounded-md text-blue-500 font-bold cursor-pointer'><input type="radio" className='cursor-pointer'  name="" id="" value='50' checked={ selectedOption === '50'} onChange={handleOptionChange} />50%</div>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex'>
              <div className='border p-4 w-1/3'>
                <h3 className='font-bold text-sm mb-2'>Daily fee</h3>
                <p className='font-bold text-lg'></p>
                <p className='text-sm'><span className='font-bold'>0.0099% </span> per day. The fee will be paid from your wallet until you have the funds. In case of insufficient funds, the daily fee will be increased to 0.0149%. <span className='text-blue-300'>Learn more</span></p>
              </div>
              <div className='border p-4 w-1/3'>
                <h3 className='font-bold text-sm mb-2'>Maximum loan duration</h3>
                <p className='font-bold text-lg'>364 days</p>
                <p className='text-sm'>You can close the loan any day until the due date. <span className='text-blue-300'>Learn more</span> </p>
              </div>
              <div className='border p-4 w-1/3'>
                <h3 className='font-bold text-sm mb-2'>Price down limit</h3>
                <p className='font-bold text-lg'>$26,635.19 <span className='text-slate-400 text-sm'>USD</span></p>
                <p className='text-sm'><span className='font-bold'>-5% </span> off the current price. It can be extended anytime by adding additional collateral. <span className='text-blue-300'>Learn more</span></p>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex md:flex-col sm:flex-col'>
              <div>
                <p className='font-bold'>$25,553.13 <span className='text-sm text-slate-400'>USD loan</span></p>
                <p className='text-sm'>Borrowed amount must be repaid by Apr 04, 2024, 21:47</p>
              </div>
              <button className='ml-auto font-bold py-2 px-4 rounded-md bg-blue-500 text-white'>Get loan</button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 p-2 lg:p-6'>
        <div>
          <h2 className='font-bold text-3xl lg:text-4xl text-center mb-4'>Collateral Options</h2>
          <div className='grid gap-2 grid-cols-3 lg:grid-cols-4'>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={btcsv} alt="" />
              <p className='font-bold text-blue-400'>BTC</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Bitcoin</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={ethsv} alt="" />
              <p className='font-bold text-blue-400'>ETH</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Ethereum</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={bnb} alt="" />
              <p className='font-bold text-blue-400'>BNB</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Binance Coin</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={snx} alt="" />
              <p className='font-bold text-blue-400'>SNX</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Synthetix</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={doge} alt="" />
              <p className='font-bold text-blue-400'>DOGE</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Dogecoin</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={link} alt="" />
              <p className='font-bold text-blue-400'>LINK</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Chainlink</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={ltc} alt="" />
              <p className='font-bold text-blue-400'>LTC</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Litecoin</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={xrp} alt="" />
              <p className='font-bold text-blue-400'>XRP</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Ripple</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={avax} alt="" />
              <p className='font-bold text-blue-400'>AVAX</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Avalanche</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={dot} alt="" />
              <p className='font-bold text-blue-400'>DOT</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Polkadot</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={xmr} alt="" />
              <p className='font-bold text-blue-400'>XMR</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Monero</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={xtz} alt="" />
              <p className='font-bold text-blue-400'>XTZ</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Tezos</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={ftm} alt="" />
              <p className='font-bold text-blue-400'>FTM</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Fantom</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={trx} alt="" />
              <p className='font-bold text-blue-400'>TRX</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Tron</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={sushi} alt="" />
              <p className='font-bold text-blue-400'>SUSHI</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>SushiSwap</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={ada} alt="" />
              <p className='font-bold text-blue-400'>ADA</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Cardano</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={near} alt="" />
              <p className='font-bold text-blue-400'>NEAR</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Near Protocol</p>
            </div>
            <div className='flex items-center gap-1 lg:gap-2 px-2 py-3 bg-blue-100 rounded-md'>
              <img src={bch} alt="" />
              <p className='font-bold text-blue-400'>BCH</p>
              <p className='text-sm text-blue-300 sm:hidden lg:block'>Bitcoin cash</p>
            </div>
          </div>
        </div>
      </div>

      <div className='my-8 lg:my-10'>
        <div>
          <h2 className='capitalize text-center font-bold text-3xl lg:text-4xl'>How Crypto backed loans work</h2>
          <div className='mt-4 lg:mt-6 lg:flex lg:gap-2'>
            <div className='lg:w-2/5 lg:p-2 '>
              <img src={loanpicloan} alt="" />
            </div>
            <div className='lg:w-3/5'>
              <div className='my-4'>
                <h3 className='font-bold text-lg'><span className='text-center p-1 h-8 w-8 rounded-full items-center justify-center bg-blue-500 text-white'>1</span>&nbsp; Transfer crypto to your WeHodler wallet</h3>
                <p className='mt-2'>WeHodler accepts more than 30 cryptocurrencies as collateral. No fees for crypto deposits.</p>
              </div>
              <div className='my-4'>
                <h3 className='font-bold text-lg'><span className='text-center p-1 h-8 w-8 rounded-full items-center justify-center bg-blue-500 text-white'>2</span>&nbsp; Get an instant crypto loan and withdraw</h3>
                <p className='my-2'>Use our loan calculator to choose loan settings. There is no need for a lender like in peer-to-peer platforms. You instantly receive cash in EUR, USD, stablecoins or popular cryptocurrencies. </p>
                <p className='italic'>WeHodler works like a pawnshop. There is a temporary sale of cryptocurrency, where you are the seller and WeHodler is the buyer.</p>
              </div>
              <div className='my-4'>
                <h3 className='font-bold text-lg'><span className='text-center p-1 h-8 w-8 rounded-full items-center justify-center bg-blue-500 text-white'>3</span>&nbsp; Manage your payments</h3>
                <p className='mt-2'>By default, the daily loan fee is calculated every 24 hours from the loan opening moment and is charged from your wallet in borrowed currrency. If there are no funds in the wallet to pay the daily fee, the system will add the fee to the total repayment amount. You are free to repay the loan at any timr and get back your collateral. You only pay for days when the loan was active.</p>
              </div>
              <div className='my-4'>
                <h3 className='font-bold text-lg'><span className='text-center p-1 h-8 w-8 rounded-full items-center justify-center bg-blue-500 text-white'>4</span>&nbsp; Get your crypto collateral back anytime</h3>
                <p className='mt-2'>You can repay your loan using your WeHodler wallet, bank wire, and even part of your loan collateral to get your crypto back.</p>
              </div>
              <div className='my-4'>
                <h3 className='font-bold text-lg'><span className='text-center p-1 h-8 w-8 rounded-full items-center justify-center bg-blue-500 text-white'>5</span>&nbsp; Manage your loan</h3>
                <p className='mt-2'>Use our list of advanced features to manage your loan conditions and react perfectly to market movements and swings:</p>
              </div>
              <div className='mt-6'>
                <button className='ml-auto uppercase font-bold py-2 px-4 rounded-md bg-blue-500 text-white'>Get loan</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ctaapp />

      <div className='p-4 flex flex-col gap-2 lg:flex-row lg:mt-2'>
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
                  <div className='lg:text-xs text-sm'>WeHodler<span className='font-semibold'>&nbsp;Registration</span></div>
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

export default Loans