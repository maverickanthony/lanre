import React, { useState} from 'react'

import { BsBookshelf } from 'react-icons/bs'
import exchangeone from '../data/exchangeone.jpeg'
import exchangetwo from '../data/exchangetwo.jpeg'
import ledgerah from '../data/ledgerah.svg'
import cyprus from '../data/cyprus.jpeg'
import walletbr from '../data/walletbr.svg'
import euroun from '../data/euroun.svg'

import { TbSwitchHorizontal } from 'react-icons/tb'

import { Ctaapp } from '../components'

const Exchange = () => {

    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = (e)=> {
        setSelectedOption(e.target.value)
    }

  return (
    <div className='mt-20 p-6'>
        <div className='lg:flex'>
            <div>
                <h1 className='font-bold text-4xl mb-2'>WeHodler Fiat and Crypto Exchange</h1>
                <p>Exchange cryptocurrencies, atablecoins, and fiat in real-time and low execution fees. Buy crypto with credit card, and your SEPA bank account.</p>
                <div className='my-4'>
                    <button className='bg-blue-500 px-3 py-2 lg:px-5 rounded-md text-white font-bold uppercase'>Exchange</button>
                </div>
                <div className='p-3 bg-slate-200 my-2 flex items-center gap-2'><BsBookshelf /> <p className='text-sm text-gray-500'> Exchange Service is provided by <span className='text-black'>WeHodler SA.</span> </p></div>
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
                <div className='mt-10'>
                <img src={exchangeone} alt="" />
            </div>
        </div>

        <div className='lg:mt-10 lg:w-3/5 m-auto'>
            <div className='mt-10'>
            <div className='flex'>
                <div> 
                <div>
                    <p className='font-bold mb-2'>Send</p>
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
                    <p className='font-bold mb-2'>Receive</p>
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
                <p className='text-sm text-gray-500'>Exchange rate: <strong>1</strong> USD = <span className='font-bold'>0.000035</span> BTC</p>
            </div>

            <div className='mt-6'>
                <div className='flex md:flex-col sm:flex-col'>
                <div>
                    <p className='font-bold'>$25,553.13 <span className='text-sm text-slate-400'>USD to convert</span></p>
                    <p className='text-xs'><span className='font-bold'>$25,580</span> to spend <span className='font-bold'>$30 fee</span></p>
                </div>
                <button className='ml-auto font-bold py-2 px-4 rounded-md bg-blue-500 text-white'>Convert</button>
                </div>
            </div>
            </div>
        </div>

        <div className='my-14'>
            <h3 className='font-bold text-3xl text-center'>Buy and exchange cryptocurrency on a trustworthy platform</h3>
            <div className='mt-6 lg:flex lg:gap-6'>
                <div className='text-center lg:w-2/5 lg:p-4'>
                    <img src={exchangetwo} alt="" className='inline-block' />
                </div>
                <div className='lg:w-3/5 lg:p-4'>
                    <div className='mt-6'>
                        <p className='leading-loose'>With WeHodler's full range of crypto conversion tools, you can buy and exchange cryptocurrency on the platform, saving time, money and avoiding risk on crypto exchange platforms. </p>
                        <h4 className='font-bold text-2xl my-4'>Buy or exchange cryptocurrency on a trustworthy platform that offers:</h4>
                        <p className='leading-loose mb-2'><span className='font-bold'>Top 20 coin support:</span> Buy cryptocurrency including the top 20 options like Ethereum (ETH), Ripple (XRP), Chainlink (LINK), Bitcoin Cash (BCH) and more. Buy Bitcoin online instantly with a click of a button. New coins are added every 2 months.</p>
                        <p className='leading-loose mb-2'><span className='font-bold'>Well secured wallets:</span> WeHodler's cold and hot crypto wallet technology offers top of the line security backed by our talented team of developers. All credit card operations are under PCI Security Standards, all crypto operations - in accordance with Cryptocurrency Security Standard (CCSS). We run external security audits on a regular basis.</p>
                        <p className='leading-loose mb-2'><span className='font-bold'>FIAT currency suport:</span> US dollar (USD), Euro (EUR), Swiss franc (CHF), British pounds (GBP).</p>
                        <p className='leading-loose mb-2'><span className='font-bold'>Worldwide community:</span> Traders from over 90 countries come to WeHodler to buy crypto and exchange cryptocurrency on our platform.</p>
                        <h4 className='font-bold text-2xl my-4'>Bitcoin to GBP: Convert crypto to fiat on WeHodler</h4>
                        <p className='leading-loose'>Convert crypto and Ethereum to GBP, USD, EUR, stablecoins and vice versa. Buy Bitcoin online and use your Bitcoin purchase as collateral for an instant crypto loan or deposit stablecoins into our interest-earning wallets (up to 9% APR). Take care of all your crypto-related needs right here on WeHodler.</p>
                    </div>
                    <div className='mt-6'>
                        <button className='py-2 px-4 rounded-lg bg-blue-500 text-white font-bold cursor-pointer uppercase'>Exchange crypto</button>
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

export default Exchange