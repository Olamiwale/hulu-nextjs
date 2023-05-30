import React from 'react'

export default function HeaderIcons({title,Icon}) {
  return (
    <div className='group'>
        <div className='group-hover:animate-bounce cursor-pointer'>
            {Icon}
        </div>
        <p className='opacity-0 group-hover:opacity-100 cursor-pointer'>{title}</p>
    </div>
  )
}
