import React from 'react'

export default function HeaderIcons({title,Icon}) {
  return (
    <div className='group flex flex-col items-center'>
        <div className='group-hover:animate-bounce cursor-pointer px-4'>
            {Icon}
        </div>
        <p className='opacity-0 group-hover:opacity-100 cursor-pointer font-bold'>{title}</p>
    </div>
  )
}
