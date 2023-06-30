import React from 'react'
import { FormInputs } from '../components'
import { useStateContext } from '../contexts/ContextProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Verify = () => {

    const { fullUserData, setFullUserData, userData, title, canSubmit, page, setPage, disablePrev, disableNext, prevHide, nextHide, submitHide, setVerifyMessage, setVerifyStatus } = useStateContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = {
            uuid: userData.uuid,
            firstname: fullUserData.bfirstName,
            lastname: fullUserData.blastName,
            email: userData.email,
            dob: fullUserData.bdob,
            country: fullUserData.bcountry,
            zipcode: fullUserData.bzipcode,
            address: fullUserData.baddress,
            optin: fullUserData.optIn ? 'yes' : 'no',
            beneficial: fullUserData.sbeneficial ? 'yes' : 'no',
            moi: fullUserData.smoi
        }
        if(fullUserData.sbeneficial && fullUserData.smoi !== '') {
            axios.post('http://localhost:8080/fulluser', values)
            .then(res => {
                setVerifyMessage(true)
                setVerifyStatus(true)
                
                setTimeout(() => {
                    navigate(-1)
                }, 2000);
                
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div className='p-6'>
        <form onSubmit={handleSubmit} className='w-full max-w-[600px] border-blue-400 rounded-[10px] p-2'>
            <header className='flex justify-between text-center'>
                <h2 className='font-bold'>{title[page]}</h2>
                <div className='flex gap-2'>
                    <button type='button' className={`${prevHide} rounded-[10px] outline font-bold cursor-pointer px-2 py-1 focus:outline-blue-300`} onClick={handlePrev} disabled={disablePrev}>Back</button>
                    <button type='button' className={`${nextHide} rounded-[10px] outline font-bold cursor-pointer px-2 py-1 focus:outline-blue-300`} onClick={handleNext} disabled={disableNext}>Next</button>
                    <button type='submit' className={`${submitHide} rounded-[10px] bg-blue-500 text-white font-bold uppercase cursor-pointer px-2 py-1 focus:outline-blue-300`} disabled={!canSubmit}>Submit</button>
                </div>
            </header>
            <FormInputs />
        </form>
    </div> 
  )
}

export default Verify