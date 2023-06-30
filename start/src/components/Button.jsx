import React from 'react'

const Button = ({bgColor, text, size, color, borderRadius, fontWeight}) => {
  return (
    <button type='button' style={{backgroundColor: bgColor, color, borderRadius, fontWeight}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button