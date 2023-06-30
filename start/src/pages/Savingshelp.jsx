import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CiSaveDown2 } from 'react-icons/ci'
import { SiShopware } from 'react-icons/si'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import savingsone from '../data/savingsone.png'

export const SavingshelpOne = () => {
    const [name, setName] = useState('How Crypto Savings work')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4 text-gray-100'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Savings Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to earn interest on your crypto</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>WeHodler crypto savings works as regular savings, but with much better conditions and less limitations. You deposit crypto to your wallet, and get your interest at a certain fixed date.</p>
                <img src={savingsone} alt="save" className='block w-[90%] mx-auto my-4' />
                <h2 className='font-bold text-lg my-4'>How to start earning interest?</h2>
                <ol className='list-decimal px-6 py-2'>
                    <li className='mb-1'>After passing all required KYC procedures, you need to sign the Terms and Conditions in on the top of the Wallets section. Press the "Sign" button to proceed and sign the agreement. You will see a popup where you can read all the necessary materials and check that you agreed to the Savings Reward Agreement.</li>
                    <li className='mb-1'>Once you do that, savings will be enabled for your account. Savings available for all crypto currencies that have an APR label. </li>
                    <li className='mb-1'>To start earning, simply deposit crypto to your wallet. You can deposit fiat currency and convert it to crypto within the platform as well. </li>
                    <li className='mb-1'>The total earned amount (calculated based on current crypto rates in USD or EUR) and the payout counter are shown at the top of your wallet.</li>
                </ol>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>Savings are not available for Swiss users.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const SavingshelpTwo = () => {
    const [name, setName] = useState('Crypto Savings Conditions')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4 text-gray-100'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Savings Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Savings account interest rates and limits</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='text-lg font-bold'>General conditions</h2>
                <p>To explore savings conditions, open the main (wallet) page of your account.</p>
                <h3 className='font-bold'>General terms:</h3>
                <ul className='list-disc px-6 py-2'>
                    <li>Crypto portfolio - the total value of crypto assets in USD you hold in your wallet.</li>
                    <li>Yield Limit - the total value of crypto assets in USD on which you earn yield.</li>
                    <li>APR - annual percentage rate.</li>
                    <li>APY - annual percentage yield, the annual compound interest.</li>
                </ul>
                <h3 className='font-bold'>General conditions:</h3>
                <ul className='list-disc px-6 py-2'>
                    <li>The max Yield limit is 300K USD in crypto equivalent.</li>
                    <li>The default limit starts from 1k USD in crypto equivalent based on the account activity.</li>
                    <li>The minimum amount to start earning interest is 100 USD in crypto equivalent for any coin.</li>
                    <li>Settlement period - 7 days.</li>
                    <li>Savings available for crypto and stablecoins only.</li>
                    <li>The interest is paid in crypto (wallet currency) in equal shares across the portfolio in your WeHodler wallet.</li>
                </ul>
                <h2 className='font-bold text-lg'>How is the payout calculated?</h2>
                <p>Every 5 hours the system counts the total balance of your wallets. After 1 week the system takes the amount that you kept on wallet for the week and calculate an interest payout for each cryptocurrency.</p>
                <p>An example:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>You hold 5000 USDT in your wallet for a whole week. At the end of the week you will get 5000 * 0.08 / 365 * 7 = 7.67 USDT interest.</li>
                    <li>You hold 5000 USDT but moved 1000 USDT out of your wallet for 1 day. At the end of the week you will get a sum of 5000 * 0.08 / 365 * 6 = 6.57 USDT (for full 6 days) and 4000 * 0.08 / 365 * 1 = 0.87 USDT (for 1 day).</li>
                </ul>
            </div>
        </div>
    )
}

const Savingshelp = () => {
    const [name, setName] = useState('Savings Account')
    const navigate = useNavigate()
  return (
    <div className='p-6'>
        <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
            <div className='flex items-center gap-4 text-white'>
                <SiShopware color='white' size={35} />
                <p className='uppercase font-semibold'>WeHodler</p>
            </div>
            <div className='mt-4'>
                <p>Hello there</p>
                <p>Get help from support right away after looking at the various articles.</p>
            </div>
        </div>
        <div>
            <p className='my-4'><span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> <span className='text-gray-500'>&gt; {name}</span></p>
            <CiSaveDown2 size={40} color='#3b82f6' />
            <h2 className='text-2xl font-bold uppercase my-3'>{name}</h2>
            <p>How to earn interest on your crypto deposit</p>
            <p className='text-gray-500'>2 articles</p>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <Link to={`savingshelpone`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How Crypto Savings works</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`savingshelptwo`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Crypto Savings Conditions</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='my-10'>
            <div className='flex items-center gap-3 text-gray-200 justify-center'>
                <SiShopware color='#e5e7eb' size={35} />
                <p className='uppercase font-semibold'>WeHodler</p>
            </div>
        </div>
    </div>
  )
}

export default Savingshelp