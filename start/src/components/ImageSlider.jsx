import React, { useState} from 'react'


const ImageSlider = ({group, text, stars, title, key}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='p-4 ml-6'>
        <div className='w-full h-full rounded-sm'>
            <div>{stars}</div>
            <div className='font-bold text-2xl'>{title}</div>
            <div className='text-sm'>{group}</div>
            <div>{text}</div>
        </div>
    </div> 
  )
}

export default ImageSlider 