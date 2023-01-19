import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiHeartLine } from 'react-icons/ri'
import { FaRandom } from 'react-icons/fa'
import { BiSkipPrevious, BiSkipNext, BiRepeat, BiListUl } from 'react-icons/bi'
import { AiFillPlayCircle, AiFillSound } from 'react-icons/ai'
import { TbMicrophone2 } from 'react-icons/tb'

const Playbar = () => {

  let audioRef = useRef()
  const [playBtn, setPlayBtn] = useState('M7 6v12l10-6z')
  
  const playPause = () =>{
    if (playBtn === 'M7 6v12l10-6z'){
      audioRef.current.play()
      setPlayBtn('M8 7h3v10H8zm5 0h3v10h-3z')
    } else {
      setPlayBtn('M7 6v12l10-6z')
      audioRef.current.pause()
    }
  }


  return (
    <div className='fixed h-20 left-0 bottom-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-black flex items-center justify-between md:justify-center p-4 z-40'>
      <Link href='#' className='md:mr-2'>
        <Image className='rounded' src='https://i.scdn.co/image/ab67616d0000b2739c284a6855f4945dc5a3cd73' width={65} height={65} alt='cover'/>
      </Link>
      <div className='mr-4 md:mr-0'>
        <h5 className='font-medium text-gray-200 mb-1'>
          Mr. Brightside
        </h5>
        <Link href="#">
          <p className='text-gray-400 text-sm w-[18ch]'>
            The Killers
          </p>
        </Link>
      </div>
      <button>
        <RiHeartLine className='text-2xl'/>
      </button>
      <div className='md:ml-40 h10 flex flex-col items-center'>
        
        <div className='flex flex-row items-center text-4xl gap-3'>
          <button className='hidden md:block'><FaRandom className='text-lg'/></button>
          <button className='hidden md:block'><BiSkipPrevious/></button>
          <audio src="https://cdns-preview-3.dzcdn.net/stream/c-3485e45690a964a3e53644ee66d63f5a-8.mp3" ref={audioRef}></audio>
          <button onClick={()=>playPause()}>
            <svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" viewBox="0 0 24 24" style={{fill: '#ffffff', padding:'0'}}><path d={playBtn}></path></svg>
          </button>
          <button className='hidden md:block'><BiSkipNext/></button>
          <button className='hidden md:block'><BiRepeat className='text-xl'/></button>
        </div>
        <div className='hidden md:block'>
          ------------------------------------------
        </div>
      </div>
      <div className='hidden md:flex ml-40 flex-row gap-2 items-center text-xl'>
        <TbMicrophone2 className='text-lg'/>
        <BiListUl/>
        <AiFillSound/>
        <div>- - - - - - -</div>
      </div>
    </div>
  )
}

export default Playbar