import React from 'react'
import Image from 'next/image'
import HeaderIcons from './HeaderIcons'
import {BadgeCheckIcon,CollectionIcon,HomeIcon,
LightningBoltIcon, SearchIcon,UserIcon} from '@heroicons/react/outline'

export default function Header({title, Icon}) {
  return (
    <header className='flex justify-between'>
        

        <div className='text-white flex'>
           
          

            <HeaderIcons title='Home' Icon ={<HomeIcon/>} />
            <HeaderIcons title='Search' Icon ={<SearchIcon/>} />
            <HeaderIcons title='Trending' Icon ={<LightningBoltIcon />} />
            <HeaderIcons title='Collection' Icon ={<CollectionIcon/> } />
            <HeaderIcons title='Verified' Icon ={ <BadgeCheckIcon/>}/>
            <HeaderIcons title='Account' Icon ={<UserIcon/>}/>

        </div>
        <div>
                 <Image src='/Hulu_logo.png' alt='logo' width={150} height={30} />
        </div>


    </header>
  )
}
