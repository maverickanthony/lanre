import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BiBookHeart } from 'react-icons/bi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { SiShopware } from 'react-icons/si'
import { Link } from 'react-router-dom'

export const LoyaltyOne = () => {
    const [name, setName] = useState('How Loyalty program works')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loyalty programs</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h3 className='font-bold text-[16px] mt-4'>What is Loyalty Program?</h3>
                <p>WeHodler Loyalty program is a perfect complement to other platform's great products.  In addition to your personal crypto investment progress, the program allows you to improve your personal product conditions and get real money by completing simple tasks on the platform. The program is designed in a very simple game format that can suit any customer from a newbie to an advanced crypto investor.</p>
                <h3 className='font-bold text-[16px] mt-4'>What benefits I can get?</h3>
                <ul className='list-disc px-6 py-2'>
                    <li><strong className='text-blue-500'>Crypto Yield account</strong> - earn up to 15% on your crypto assets.</li>
                    <li><strong className='text-blue-500'>Referrals and Bonuses program</strong> - invite friends, complete rewards tasks and get your bonuses.</li>
                </ul>
                <h3 className='font-bold text-[16px] mt-4'>Where can I check my level?</h3>
                <p>You can check your account level on the wallet section of your account, or in the profile section as well.</p>
                <h3 className='font-bold text-[16px] mt-4'>What does the Loyalty level mean?</h3>
                <p>Each level includes the following parameters:</p>
                <ul className='list-disc px-6 py-2'>
                    <li><strong>Level name.</strong> Based on your progress it can change from the basic Newbie to the highest VIP.</li>
                    <li><strong>Savings conditions.</strong> Reflects the improved Yield account conditions - Yield limit and APR.</li>
                    <li><strong>All benefits.</strong> Detailed bonus conditions are available for the particular level.</li>
                    <li><strong>Level progress bar.</strong> Indicates your progress in trading volume.</li>
                </ul>
                <h3 className='font-bold text-[16px] mt-4'>What's the difference between levels?</h3>
                <p>The key difference is bonus conditions. The higher the level, the better conditions:</p>
                <ul className='list-disc px-6 py-2'>
                    <li><strong>Higher Yield Limit.</strong> The amount you can earn interest on can be increased up to 200k USD in crypto.</li>
                    <li><strong>Higher APR.</strong> The APR can be increased up to 15% on your crypto assets. The full list is available in the All benefits section.</li>
                    <li><strong>More coins to select from.</strong> The higher the level, the more coins (wallets) you can choose to get interest on.</li>
                </ul>
                <div className='w-[90%] mx-auto p-6 bg-blue-200 rounded-lg'>
                    <ul className='list-disc px-6'>
                        <li><strong>Newbie</strong> - 1 wallet</li>
                        <li><strong>Basic</strong> - 2 wallets</li>
                        <li><strong>Silver</strong> - 4 wallets</li>
                        <li><strong>Gold</strong> - 6 wallets</li>
                        <li><strong>Platinum</strong> - 7 wallets</li>
                        <li><strong>Diamond</strong> - 8 wallets</li>
                        <li><strong>VIP</strong> - 10 wallets</li>
                    </ul>
                </div>
                <h3 className='font-bold text-[16px] mt-4'>How can I increase my level?</h3>
                <p>Trading with Hodler is the best way to boost your loyalty levels. The more trades are placed on Hodler, the more the progress bar increases.</p>
            </div>
        </div>
    )
}

export const LoyaltyTwo = () => {
    const [name, setName] = useState('How trading volume is calculated')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loyalty programs</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How trading volumes is calculated and how it affects account Loyalty levels</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>At the moment Hodler is the main feature that affects account Loyalty level and allows accessing the best conditions for Yield Account. Let's see how simple it is to generate the volume and benefit from it.</p>
                <h3 className='font-bold'>Important to know</h3>
                <ul className='list-disc py-2 px-6'>
                    <li className='mb-1'><strong>Volume is calculated with Multiplier</strong>. <span className='italic'>For example, the operation with input 1000 USD and Multiplier x20 means that its volume will be 20 000 USD</span>.</li>
                    <li><strong>Volume is calculated for both open Hodler and close Hodler actions</strong>. <span className='italic'>For example, when Hodler has been opened with a total volume of 10 000 USD and was closed with a profit of 500 USD - the volume in your Loyalty program will be 10 000 USD (input of the Hodler) + 10 500 USD (output of the Hodler) = 20 500 USD</span></li>
                </ul>
                <p>To summarize - when you use Hodler, your trading volume always includes Multiplier. Also, volume increased for both open and closed amounts.</p>
                <p>This model assures that your trading activity improves your account's Loyalty level in the most efficient and fast way.</p>
            </div>
        </div>
    )
}

const Loyalty = () => {
    const [name, setName] = useState('Loyalty Program')
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
            <BiBookHeart size={40} color='#3b82f6' />
            <h2 className='text-2xl font-bold uppercase my-3'>{name}</h2>
            <p>How to get loyalty benefits from WeHodler</p>
            <p className='text-gray-500'>2 articles</p>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <Link to={`/help/loyalty/loyaltyone`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How Loyalty program works</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/loyalty/loyaltytwo`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How trading volume is calculated</p>
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

export default Loyalty