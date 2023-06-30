import React from 'react'
import { AiOutlineBell, AiOutlineDelete, AiOutlineFileText, AiOutlineHistory, AiOutlineIdcard, AiOutlineKey, AiOutlineMail, AiOutlinePercentage, AiOutlineRight } from 'react-icons/ai'
import { BsChat, BsChatFill } from 'react-icons/bs'
import { FiCopy } from 'react-icons/fi'
import { Dashbar } from '../components'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const Account = () => {

  const { userData, auth, setAuth, setLoggedIn, verifyStatus} = useStateContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    axios.get('http://localhost:8080/logout', {
      withCredentials: true,
    })
    .then( res => {
      if(res.data.Status === "Successfully logged out"){
        navigate('/signin')
        setLoggedIn(false)
      } else {
        alert('error')
      }
    }).catch(err => console.log(err))
  }

  return (
    <div className='p-6 h-[93vh] overflow-scroll'>
      <div>
        <p className='my-3 text-gray-500 text-sm'>{userData.email}</p>
        <div>
          <p className='text-gray-600 text-sm'>Account ID</p>
          <p className='text-blue-600 flex items-center gap-2 cursor-pointer'>{userData.uuid} <FiCopy /></p>
        </div>
        {!verifyStatus && <Link to={`/dashboard/verify`}>
          <div className='flex items-center justify-between bg-blue-500 p-3 rounded-lg my-6 text-white w-4/5 cursor-pointer'>
            <AiOutlineIdcard className='p-1 bg-blue-700 rounded-lg' size={25} />
            <div className='mr-auto ml-6'>
              <p className='font-bold'>Identity Verification</p>
              <p>Unlock platform basic functions</p>
            </div>
            <AiOutlineRight size={25}  />
          </div>
        </Link>}
      </div>
      <div className='border-y-1 py-4'>
        <div className='flex items-center gap-2'>
          <AiOutlineMail size={25} />
          <p className='font-bold'>Email</p>
          <p className='text-white p-1 uppercase bg-green-500 rounded-md text-sm'>verified</p>
        </div>
        <p className='text-gray-500 text-sm'>{userData.email}</p>
      </div>
      <div>
        <p className='uppercase text-gray-600 py-2 text-sm bg-gray-100 ml-2'>Help</p>
        <Link target='_blank' to={`../help`}>
          <div className='flex items-center gap-3 py-3 cursor-pointer'>
            <BsChat size={24} />
            <p className='font-bold'>Contact support</p>
          </div>
        </Link>
      </div>

      <div>
        <p className='uppercase text-gray-600 py-2 text-sm bg-gray-100 ml-2'>Account</p>
        <Link to={`/dashboard/authentication`}>
          <div className='flex items-center gap-3 py-3 justify-between cursor-pointer'>
            <AiOutlineKey size={24} />
            <p className='font-bold mr-auto ml-4'>Two-factor authentication <span className={`p-1 text-sm rounded-md  ${userData.authyQ ? 'bg-green-500' : 'bg-gray-400'} text-white ml-4`}>{userData.authyQ ? 'Enabled' : 'Disabled'}</span></p>
            <AiOutlineRight size={24} className='text-gray-300' />
          </div>
        </Link>
        <Link to={`/dashboard/history`}>
          <div className='flex items-center gap-3 py-3 border-t-1 justify-between cursor-pointer'>
            <AiOutlineHistory size={24} />
            <p className='font-bold mr-auto ml-4'>History</p>
            <AiOutlineRight size={24} className='text-gray-300' />
          </div>
        </Link>
        <Link target='_blank' to={`../help/faq/faqhelpthree`}>
          <div className='flex items-center gap-3 py-3 border-y-1 justify-between cursor-pointer'>
            <AiOutlinePercentage size={24} />
            <p className='font-bold mr-auto ml-4'>Fees & Commissions</p>
            <AiOutlineRight size={24} className='text-gray-300' />
          </div>
        </Link>
      </div>

      <div>
        <p className='uppercase text-gray-600 py-2 text-sm bg-gray-100'>Application</p>
        <Link to={`/dashboard/notifications`}>
          <div className='flex items-center gap-3 py-3 justify-between cursor-pointer'>
            <AiOutlineBell size={24} />
            <p className='font-bold mr-auto ml-4'>Notifications</p>
            <AiOutlineRight size={24} className='text-gray-300' />
          </div>
        </Link>
        <Link target='_blank' to={`../legal`}>
          <div className='flex items-center gap-3 py-3 border-y-1 justify-between cursor-pointer'>
            <AiOutlineFileText size={24} />
            <p className='font-bold mr-auto ml-4'>Legal & Info</p>
            <AiOutlineRight size={24} className='text-gray-300' />
          </div>
        </Link>
        <div className='text-center my-4'>
        {
        auth ? 
          <div>
            <p className='text-sm text-green-400'>Authenticated</p>
            <button onClick={handleLogout} className='underline hover:text-green-300 cursor-pointer text-blue-500'>Sign Out</button>
          </div> :
          <div>
            <p className='text-sm text-green-400'>You have been logged out</p>
            <Link to={`/signin`} className='cursor-pointer hover:text-green-300 underline'><p>Go to Login</p></Link>
          </div>
        }
        </div>
        <Link to={`/dashboard/delete-account`}>
          <div className='flex items-center gap-3 py-3 border-b-1 justify-between cursor-pointer'>
            <AiOutlineDelete size={24} />
            <p className='font-bold mr-auto ml-4'>Delete account</p>
            <AiOutlineRight size={24} className='text-gray-300' />
          </div>
        </Link>
      </div>
      <Dashbar />
    </div>
  )
}

export default Account