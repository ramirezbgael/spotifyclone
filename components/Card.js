import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiPlayFill} from 'react-icons/ri'

const Card = (props) => {

  const {info} = props

  return (
    <Link href='/album/patata' className='bg-spotify-gray rounded-lg p-4 hover:bg-spotify-hovergray transition-all duration-300 group'>
      <div className='mb-3 relative'>
        <Image
          src={info.image}
          width={200}
          height={200}
          alt='Album'
          className='rounded drop-shadow-2xl mx-auto'
        />
        <button className='p-2 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 ease-out'>
          <RiPlayFill/>
        </button>
      </div>
      <div>
        <h5 className='font-medium text-gray-200 mb-1'>
          {info.name}
        </h5>
        <p className='text-gray-400 text-sm w-[18ch]'>
          {info.info}
        </p>
      </div>
    </Link>
  )
}

export default Card