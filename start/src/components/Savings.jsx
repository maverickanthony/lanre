import React from 'react'

import { BsBookshelf } from 'react-icons/bs'
import ledgerah from '../data/ledgerah.svg'
import cyprus from '../data/cyprus.jpeg'
import savings from '../data/savings.png'
import savings2 from '../data/savings2.png'
import { FaPercent } from 'react-icons/fa'
import { BsSpeedometer } from 'react-icons/bs'
import { AiFillWechat } from 'react-icons/ai'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { BsShieldLockFill } from 'react-icons/bs'
import { AiOutlineTransaction } from 'react-icons/ai'
import { GiTakeMyMoney } from 'react-icons/gi'
import { MdOutlineDesktopMac } from 'react-icons/md'
import { Ctaapp } from '.'
import walletbr from '../data/walletbr.svg'
import euroun from '../data/euroun.svg'

import bnbsav from '../data/bnbsav.png'



const Savings = () => {
  return (
    <div className='mt-20 p-6'>
        <div className='lg:flex'>
            <div>
                <h1 className='font-bold text-4xl mb-2'>Earn Up to 9% Saving</h1>
                <p>Benefit from market volatility while earning up to 9% per annum. Easy to navigate user interface and low fees.</p>
                <div className='my-4'>
                    <button className='bg-blue-500 px-3 py-2 lg:px-5 rounded-md text-white font-bold uppercase'>Start saving</button>
                </div>
                <div className='p-3 bg-slate-200 my-2 flex items-center gap-2'><BsBookshelf /> <p className='text-sm text-gray-500'><span className='text-black'>WeHodler</span> crypto-savings solutions is structured in the form of token purchase/re-purchase agreements.</p></div>
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
            <div className='lg:-mt-4'>
                <img src={savings} alt="picture of a phone" />
            </div>
        </div>

        <div className='my-6'>
            <h4 className='font-bold text-blue-500 my-4'>Savings</h4>
            <div className='lg:flex lg:gap-6'>
                <div className='lg:w-3/5 lg:mr-2'>
                    <h2 className='font-bold text-3xl lg:text-4xl my-4'>Savings for all levels</h2>
                    <p>WeHodler savings offers a high-return savings platform to earn on the go. The interface is user-friendly and interactive for both seasoned traders or newbies. Unlike with trading, you don't have to do anything because you earn automatic profits daily accrued to your account.</p>
                </div>

                <ul className='my-4 lg:w-2/5'>
                    <li className='mb-2'>
                        <div className='flex items-center gap-2'>
                            <FaPercent color='#2979ff' size='28px' />
                            Low saving fees
                        </div>
                    </li>
                    <li className='mb-2'>
                        <div className='flex items-center gap-2'>
                            <BsSpeedometer color='#2979ff' size='28px' />
                            Fast and real execution
                        </div>
                    </li>
                    <li className='mb-2'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineAreaChart color='#2979ff' size='28px' />
                            Start saving with as little as $100
                        </div>
                    </li>
                    <li className='mb-2'>
                        <div className='flex items-center gap-2'>
                            <AiFillWechat color='#2979ff' size='28px' />
                            24/7 online support, No bots
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className='my-6'>
            <div className='mt-8'>
                <p className='font-bold text-blue-500 text-center'>Features</p>
                <div className='my-6'>
                    <h3 className='font-bold text-2xl text-center mb-2'>1,000,000 in monthly savings volume</h3>
                    <p className='text-center mb-2'>WeHodler Savings gives you an unparalleled return when you save with the best of both traditional finance and crypto exchange. </p>
                    <p className='text-center mb-2'>Simple, yet sophisticated and automated interface.</p>
                </div>
                <div className='my-8 grid lg:grid-cols-3 lg:grid-flow-col lg:gap-2 lg:mt-16 lg:h-max'>
                    <div className='mb-8 text-center lg:order-1 lg:p-2 lg:mt-3'>
                        <div className='p-2 w-fit m-auto mb-2 rounded-full bg-blue-100'>
                            <BsShieldLockFill color='#2979ff' size='20px' />
                        </div>
                        <div className='font-bold text-lg'>Trust worthy platform</div>
                        <div className='text-sm'>WeHodler is a regulated EU platform. All our savings account balances are secured with Ledger Vault.</div>
                    </div>
                    <div className='mb-8 text-center lg:order-2 lg:p-2'>
                        <div className='p-2 w-fit m-auto mb-2 rounded-full bg-blue-100'>
                            <AiOutlineTransaction color='#2979ff' size='20px' />
                        </div>
                        <div className='font-bold text-lg'>Low conversion fees</div>
                        <div className='text-sm'>You can save and earn interest on your crypto and stablecoins directly without needing to convert first.</div>
                    </div>
                    <div className='mb-8 text-center lg:order-4 lg:p-2'>
                        <div className='p-2 w-fit m-auto mb-2 rounded-full bg-blue-100'>
                            <GiTakeMyMoney color='#2979ff' size='20px' />
                        </div>
                        <div className='font-bold text-lg'>Earn while you sleep</div>
                        <div className='text-sm'>You can earn up to 9% APR on your funds. You do not profit only from volatility, but also gain a fixed return.</div>
                    </div>
                    <div className='mb-8 text-center lg:order-5 lg:p-2'>
                        <div className='p-2 w-fit m-auto mb-2 rounded-full bg-blue-100'>
                            <MdOutlineDesktopMac color='#2979ff' size='20px' />
                        </div>
                        <div className='font-bold text-lg'>Interactive interface</div>
                        <div className='text-sm'>WeHodler's Savings Interface is designed to be intuitive and seamless. It's extremely easy to navigate and the platform is usable by novice traders and investors.</div>
                    </div>
                    <div className='sm:h-96 md:h-96 lg:h-full overflow-hidden lg:row-span-2 lg:order-3 lg:-mt-3'>
                        <img src={savings2} alt="" />
                    </div>
                </div>
                <div className='my-6 text-center lg:flex lg:gap-3 lg:justify-center'>
                    <div className='mb-2'>
                        <button className='uppercase cursor-pointer px-4 py-2 border border-blue-500 text-blue-500 font-bold rounded-lg'>Learn more</button>
                    </div>
                    <div>
                        <button className='uppercase cursor-pointer px-4 py-2 bg-blue-500 text-white font-bold rounded-lg'>Get started</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='my-8 flex flex-col gap-4 lg:flex-row lg:gap-4 lg:mt-8'>
            <div className='lg:w-1/2'>
                <h4 className='font-bold text-blue-500 my-4'>Coin Offers</h4>
                <div className='font-bold text-xl mb-4'>Get up to 9% prime savings on the following stablecoins and cryptocurrencies.</div>
                <p className='mb-4 lg:mb-8'>You can earn 9% on most cryptocurrencies and 6.5% on stablecoins. Your savings can be withdrawn at any time and interests are accrued daily.</p>
                <div className='flex gap-4 lg:gap-6 mb-3 sm:flex-col lg:flex-row md:flex-row'>
                    <div>
                        <p className='font-bold text-3xl lg:text-5xl lg:mb-2 text-blue-500'>$550</p>
                        <p className='font-bold text-sm'>Avg. monthly savings per user</p>
                    </div>
                    <div>
                        <p className='font-bold text-3xl lg:text-5xl lg:mb-2 text-blue-500'>7</p>
                        <p className='font-bold text-sm'>Avg. monthly savings per user</p>
                    </div>
                </div>
                <div className='mt-4 lg:mt-6'>
                    <button className='uppercase bg-blue-500 text-white font-bold px-4 py-2 cursor-pointer rounded-lg'>try it with $100</button>
                </div>
            </div>
            <div className='bg-blue-100 p-2 lg:w-1/2'>
                <img src={bnbsav} alt="" />
            </div>
        </div>

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
        <Ctaapp />
    </div>
  )
}

export default Savings