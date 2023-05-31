'use client'
import React, { useEffect } from 'react';
import axios from 'axios';




export default function Main() {

  useEffect(()=>{
    const  request = axios.get('https://api.themoviedb.org/3/search/movie?query=Batman&callback=test')
  })
  
  return (
  <div>

  </div>
  )
}
