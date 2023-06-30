import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import { SiShopware } from 'react-icons/si'
import { FiBarChart2 } from 'react-icons/fi'
import { BiBookHeart, BiCoinStack } from 'react-icons/bi'
import { BsChatRightDots, BsWallet2 } from 'react-icons/bs'
import { MdOutlineAccountBalance } from 'react-icons/md'
import { CiSaveDown2 } from 'react-icons/ci'
import { FaNetworkWired } from 'react-icons/fa'

const Help = () => {
  return (
    <div className='pb-10'>
      <div className='bg-blue-500 p-6'>
        <div className='flex items-center gap-4 text-white'>
          <SiShopware color='white' size={35} />
          <p className='uppercase font-semibold'>WeHodler</p>
        </div>
        <div className='mt-4'>
          <p>Hello there</p>
          <p>Get help from support right away after looking at the various articles.</p>
        </div>
      </div>

      <div className='grid lg:grid-cols-2'>
        <Link to={`./hodlerhelp`}>
          <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
            <div>
              <FiBarChart2 color='#3b82f6' size={25} />
            </div>
            <div>
              <p className='font-bold text-[15px]'>Hodler</p>
              <p className='text-gray-700'>How to enlarge crypto assets while staying safe</p>
            </div>
            <p className='text-gray-400'>9 articles</p>
          </div>
        </Link> 
    
        <Link to={`./loanhelp`}>
        <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
          <div>
            <BiCoinStack color='#3b82f6' size={25} />
          </div>
          <div>
            <p className='font-bold text-[15px]'>Loan</p>
            <p className='text-gray-700'>How to get cash or crypto using your crypto assets</p>
          </div>
          <p className='text-gray-400'>10 articles</p>
        </div>
        </Link>
    
        <Link to={`./loyalty`}>
          <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
            <div>
              <BiBookHeart color='#3b82f6' size={25} />
            </div>
            <div>
              <p className='font-bold text-[15px]'>Loyalty programs</p>
              <p className='text-gray-700'>How to get loyalty benefits from WeHodler</p>
            </div>
            <p className='text-gray-400'>2 articles</p>
          </div>
        </Link>
    
        <Link to={`./wallethelp`}>
          <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
            <div>
              <BsWallet2 color='#3b82f6' size={25} />
            </div>
            <div>
              <p className='font-bold text-[15px]'>Wallet</p>
              <p className='text-gray-700'>How to navigate &amp; use your WeHodler wallet</p>
            </div>
            <p className='text-gray-400'>16 articles</p>
          </div>
        </Link>
    
        <Link to={`./faq`}>
          <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
            <div>
              <BsChatRightDots color='#3b82f6' size={25} />
            </div>
            <div>
              <p className='font-bold text-[15px]'>F.A.Q</p>
              <p className='text-gray-700'>Common questions about the platform</p>
            </div>
            <p className='text-gray-400'>8 articles</p>
          </div>
        </Link>
    
        <Link to={`./accounthelp`}>
          <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
            <div>
              <MdOutlineAccountBalance color='#3b82f6' size={25} />
            </div>
            <div>
              <p className='font-bold text-[15px]'>Account</p>
              <p className='text-gray-700'>How to manage your account</p>
            </div>
            <p className='text-gray-400'>17 articles</p>
          </div>
        </Link>
    
        <Link to={`./savingshelp`}>
          <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
            <div>
              <CiSaveDown2 color='#3b82f6' size={25} />
            </div>
            <div>
              <p className='font-bold text-[15px]'>Savings Account</p>
              <p className='text-gray-700'>How to earn interest on your crypto deposit</p>
            </div>
            <p className='text-gray-400'>2 articles</p>
          </div>
        </Link>
    
        <Link to={`./affiliatehelp`}>
          <div className='mt-4 w-3/4 rounded-lg mx-auto cursor-pointer p-5 flex flex-col gap-2 border focus:border-blue-500 border-t-blue-500 shadow-md items-start'>
            <div>
              <FaNetworkWired color='#3b82f6' size={25} />
            </div>
            <div>
              <p className='font-bold text-[15px]'>Affiliate Program</p>
              <p className='text-gray-700'>Common questions &amp; answers</p>
            </div>
            <p className='text-gray-400'>10 articles</p>
          </div>
        </Link> 

        
        <div className='mt-6 w-3/4 rounded-lg p-4 flex flex-col items-center mx-auto border border-t-blue-500 shadow-md'>
          <p className='font-bold'>Start a conversation</p>
          <div className='flex items-center gap-2'>
            <img src="" alt="" />
            <div>
              <p className='text-gray-400'>Our usual reply time</p>
              <div className='flex items-center gap-2'><AiOutlineClockCircle color='blue' /> <p className='text-sm'>A few hours</p></div>
            </div>
          </div>
          <div className='mt-4 border cursor-pointer hover:border-gray-400 border-black w-3/5 rounded-xl p-3 flex items-center gap-2 justify-center'>
            <IoMdSend />
            <p>Send us a message</p>
          </div>
        </div>

        <div className='mt-6 w-3/4 rounded-lg p-4 flex flex-col items-center mx-auto border border-t-blue-500 shadow-md'>
          <p className='font-bold'>New request</p>
          <p>Any improvement for exisiting products or a new product request</p>
          <div className='mt-4 border cursor-pointer bg-blue-500 hover:bg-blue-200 border-black w-3/5 rounded-xl p-3 flex items-center gap-2 justify-center'>
            <p className='font-bold'>Leave feedback</p>
          </div>
        </div>
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

export default Help