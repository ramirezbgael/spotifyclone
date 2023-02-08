import React from 'react'
import Link from 'next/link'
import { RiArrowLeftSLine, RiArrowRightSLine, RiMore2Fill } from 'react-icons/ri'

const Header = (props) => {
  
  const {setShowSideBar} = props

  return (
    <header className='fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-spotify-gray/90 flex items-center
     justify-between p-4 z-40'>
      <div className='md:hidden'>
        <RiMore2Fill onClick={() => setShowSideBar(true)} 
        className='text-2xl hover:cursor-pointer p-2 box-content '/>
      </div>
      <div className='hidden md:flex items-center text-2xl gap-2'>
        <RiArrowLeftSLine className='p-1 box-content hover:cursor-pointer bg-spotify-gray rounded-full'>
          <Link onClick={()=>console.log('clicked')} href='/'></Link>
        </RiArrowLeftSLine>
        <RiArrowRightSLine onClick={() => window.history.forward()} className='p-1 box-content hover:cursor-pointer bg-spotify-gray rounded-full'/>
      </div>
      <div className='flex items-center gap-6'>
        <Link href='#' className='hover:text-white transition-colors'>Sign Up</Link>
        <Link href='#' className='py-2 md:py-3 px-4 rounded-full bg-white text-spotify-gray font-medium hover:scale-105 transition-transform'>Log In</Link>
      </div>
    </header>
  )
}

export default Header