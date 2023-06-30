import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'
import moment from 'moment'

const DashHistory = () => {
    const navigate = useNavigate()
    const {userData, loanData, savingsData, hodlerData, depositData, withdrawalData} = useStateContext()
    
  return (
    <div className='p-6'>
        <div className='flex items-center'>
            <AiOutlineClose size={30} className='cursor-pointer' onClick={()=> navigate(-1)} />
            <h3 className='uppercase font-bold mx-auto'>History</h3>
        </div>
        <div className='mt-6 p-4'>
           {depositData.length > 0  ?
            <div>
                <div>
                    {depositData.length > 0 && 
                        <div>
                            {depositData.map(each => (
                                <p key={each.id}>You deposited <span className='font-bold uppercase'>{each.method}{each.amount}</span> on {moment(each.date).format('YYYY-MM-DD')}</p>
                            ))}
                        </div>
                    }
                </div>
                <div className='mt-4'>
                    {loanData.length > 0 && 
                        <div>
                            {loanData.map(each => (
                                <p key={each.id}>You borrowed <span className='font-bold uppercase'>{each.method}{each.amount}</span> on {moment(each.date).format('YYYY-MM-DD')}</p>
                            ))}
                        </div>
                    }
                </div>
                <div className='mt-4'>
                    {hodlerData.length > 0 && 
                        <div>
                            {hodlerData.map(each => (
                                <p key={each.id}>You opened a position of <span className='font-bold uppercase'>{each.amount * each.multiplier} {each.currency}</span> on {moment(each.date).format('YYYY-MM-DD')}</p>
                            ))}
                        </div>
                    }
                </div>
                <div className='mt-4'>
                    {savingsData.length > 0 && 
                        <div>
                            {savingsData.map(each => (
                                <p key={each.id}>New savings <span className='font-bold uppercase'>{each.method}{each.amount}</span> opened on {moment(each.date).format('YYYY-MM-DD')}</p>
                            ))}
                        </div>
                    }
                </div>
                <div className='mt-4'>
                    {withdrawalData.length > 0 && 
                        <div>
                            {withdrawalData.map(each => (
                                <p key={each.id}>You placed a withdrawal request of <span className='font-bold uppercase'>{each.method}{each.amount}</span> on {moment(each.date).format('YYYY-MM-DD')}</p>
                            ))}
                        </div>
                    }
                </div>
            </div> :
            <p>You currently have no history. </p>}
        </div>
    </div>
  )
}

export default DashHistory