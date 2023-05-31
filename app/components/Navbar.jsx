'use client'
import React from 'react'
import {data }from '../request'
import { useRouter } from 'next/navigation'


export default function Navbar() {
  const route = useRouter()
  
      return (
        <nav className='mt-16'>
          <div className='px-16 flex justify-center space-x-10 overflow-x-scroll whitespace-nowrap '>
            {data.map((movie, id) =>(
          <h2 key={id} className='text-xl cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500' 
          onClick={() => route.push(`/genre?=${movie.title}`)}
          >{movie.title}</h2>
         ))}
          </div>
         
        </nav>
  )
}


