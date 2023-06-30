import React from 'react'
import { useNavigate } from 'react-router-dom'
import Blog from './Blog'

const More = () => {
    const navigate = useNavigate()

    const navigateToBlog = () => {
        navigate('./Blog')
    }
    
  return (
    <div className='mt-6 mb-10'>
        <div className='text-center'> 
            <button onClick={navigateToBlog} className='py-2 px-4 rounded-lg bg-blue-600 font-bold text-white cursor-pointer uppercase'>See more</button>
        </div>
    </div>
  )
}

export default More