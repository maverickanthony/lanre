import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineLoading } from 'react-icons/ai'
import axios from 'axios'
import { useStateContext } from '../contexts/ContextProvider'

const Delete = () => {

    const navigate = useNavigate()
    const {userData} = useStateContext()

    const deleteAccount = (id) => {
        axios.delete('http://localhost:8080/delete-user'+id)
        .then(res => {
            if(res.data.updated) {
                navigate('/signin')
            } else {
                alert('Error deleting account, please try again.')
            }
        })
    }

  return (
    <div className='p-6'>
        <div className='flex items-center'>
            <AiOutlineClose size={30} className='cursor-pointer' onClick={()=> navigate(-1)} />
            <h2 className='uppercase font-bold mx-auto'>Delete account</h2>
        </div>
        <div className='mt-6'>
            <p>You are attempting to delete your user account and all the data associated with it. Please note that after your account is deleted you will not be able to retrieve any funds left in the account.</p>
        </div>
        <div className='mt-6 text-center'>
            <h2 className='font-bold text-lg uppercase mb-4'>Are you sure you want to delete your account. </h2>
            <button onClick={()=> deleteAccount(userData.uuid)} className='bg-red-500 text-white hover:bg-red-300 cursor-pointer font-bold py-2 w-[70%] block mx-auto rounded-lg'>Delete my account</button>
            <p className='text-sm text-gray-400 mt-4'>Please note that this action is irreversible.</p>
        </div>
    </div>
  )
}

export default Delete