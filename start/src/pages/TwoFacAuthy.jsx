import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'
import { MdOutlineDoneOutline } from 'react-icons/md'

const TwoFacAuthy = () => {

    const navigate = useNavigate()
    const {userData, setUserData} = useStateContext()
    const [start, setStart] = useState(false)
    const [secret, setSecret] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [authyCode, setAuthyCode] = useState('')
    const handleChange = (e) => {
        setAuthyCode(e.target.value)
    }

    const startTwoFac = () => {
        axios.put('http://localhost:8080/starttwofac', {uuid: userData.uuid})
        .then(res => {
            setSecret(res.data.text)
        })
        setStart(true)
    }

    const disableTwoFac = () => {
        axios.put('http://localhost:8080/disabletwofac', {uuid: userData.uuid, authy: 'disabled'})
        .then(res => {
            if(res.data.updated) {
                setUserData(prev => ({
                    ...prev,
                    authyQ: false 
                }))
                navigate(-1)
            }
        })
        
    }

    const handleSubmit = () => {
        const values = {
            token: authyCode,
            secret: secret,
            uuid: userData.uuid
        }
        axios.post('http://localhost:8080/verifyauthy', values)
        .then(res => {
            if(res.data.verified) {
                setConfirm(true)
                updateAuthyStatus()
                navigate('/signin')
            } else {
                alert ('Authentication failed')
            }
        })

    }

    const updateAuthyStatus = () => {
        axios.put('http://localhost:8080/updateauthy', {uuid: userData.uuid, authy: 'enabled'})
        .then(res => {
            if(res.data.updated) {
                setUserData(prev => ({
                    ...prev,
                    authyQ: true 
                }))
            }
        })
    }

    

  return (
    <div className='p-6'>
        <div className='flex items-center'>
            <AiOutlineClose size={30} className='cursor-pointer' onClick={()=> navigate(-1)} />
            <h2 className='font-bold text-xl ml-[30%]'>Two-factor Auth</h2>
        </div>
        {!start && <div>
            <div className='flex p-4 items-center gap-6 border mt-4 rounded-md'>
                <div>
                    <p className='text-lg font-bold'>Authenicator App</p>
                    <p className='text-gray-400'>Get free verification codes in the authenticator app on your device</p>
                </div>
                {!userData.authyQ && <button onClick={startTwoFac} className='block p-3 font-semibold rounded-lg  text-white bg-blue-500'>Enable</button>}
                {userData.authyQ && <button onClick={disableTwoFac} className='block p-3 font-semibold rounded-lg text-white bg-blue-500'>Disable</button>}
            </div>
        </div>}

       {start && <div>
            <div>
                <h2 className='text-xl font-bold text-center'>Pair Google Authenticator</h2>
            </div>
            <div className='mt-6'>
                <p>Pair device</p>
                <p className='font-bold'>First</p>
                <p className='text-gray-400 text-sm'>Enter this code in your authenticator app</p>
                <p className='font-bold'>{secret}</p>
                <button className='p-2 bg-blue-100 text-blue-500 rounded-md flex items-center gap-1'><AiOutlineCopy /> <p>Copy</p></button>
                <div className='mt-4'>
                    <p className='font-bold'>Then</p>
                    <p className='text-gray-400 text-sm'>Enter the code your authenticator app shows you after adding</p>
                    <label htmlFor="authyCode">
                        <input type="number" placeholder='6-digit code' name="authyCode" id="authyCode" value={authyCode} onChange={handleChange} maxLength='6' className='p-3 mt-2 border rounded-lg w-[70%]' />
                    </label>
                    <p className='text-gray-400 text-sm mt-2'>Not sure what that means? You may need to install Authy, Microsoft Authenticator or Google Authenticator</p>
                    <p className='text-gray-400 text-sm mt-2'>You will be logged out after activation</p>
                </div>
                <button onClick={handleSubmit} className='block mt-6 w-[90%] bg-blue-500 text-white font-bold py-2 rounded-lg'>Enable</button>
            </div>
        </div>}
        {confirm && <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold text-lg'>You have successfully activated 2FA</h2>
            <div>
                <MdOutlineDoneOutline size={60} color='#99f6e4' />
            </div>
        </div>}
    </div>
  )
}

export default TwoFacAuthy