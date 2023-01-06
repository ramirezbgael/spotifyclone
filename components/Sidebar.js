import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { RiHome4Fill, RiSearch2Line, RiFoldersLine, RiAddBoxLine, RiHeartFill, RiCloseLine } from "react-icons/ri";

const Sidebar = (props) => {

  const {showSideBar, setShowSideBar} = props

  return (
    <div className={
      `bg-black fixed top-0 w-64 h-full p-6
       flex flex-col justify-between
        ${showSideBar ? 'left-0' : '-left-full'} 
        md:left-0 transition-all duration-300
        z-50`
      }>
      <div className='md:hidden absolute right-4 top-4'>
        <button
         className='text-2xl p-2 box-content' 
         onClick={() => setShowSideBar(false)}
        >
          <RiCloseLine/>
        </button>
      </div>
      <div>
        <div className='mb-8'>
          <Image 
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
            width={130}
            height={130}
            alt='Spotify logo'
          />
        </div>
        <nav>
          <ul className='flex flex-col gap-y-4'>
            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-50 transition-colors'>
                <RiHome4Fill className='text-2xl' /> Home
              </Link>
            </li>
            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-50 transition-colors'>
                <RiSearch2Line className='text-2xl' /> Search
              </Link>
            </li>
            <li className='mb-8'>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-50 transition-colors'>
                <RiFoldersLine className='text-2xl' /> Library
              </Link>
            </li>
            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-50 transition-colors'>
                <RiAddBoxLine className='text-2xl' /> Create playlist
              </Link>
            </li>
            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-50 transition-colors'>
                <RiHeartFill className='text-2xl' /> Liked tracks
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className='flex flex-col gap-y-1'>
            <li>
              <Link href='#' className='text-xs hover:underline'>Cookies</Link>
            </li>
            <li>
              <Link href='#' className='text-xs hover:underline'>Privacy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar