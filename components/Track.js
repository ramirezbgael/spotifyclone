import React, { useEffect, useState } from 'react'
import { RiPlayFill } from 'react-icons/ri';

const Track = ({ track, count }) => {

  const [trackNumber, setTrackNumber] = useState(()=>count);

  return (
    <div onClick={()=>changeState(track)} className='flex rounded justify-between p-2 hover:cursor-pointer hover:bg-neutral-700 transition-all duration-300 group'>
      <div className='flex gap-3 items-center'>
      <span className='absolute text-lg mr-2 opacity-0 group-hover:opacity-100 transition-all duration-1'><RiPlayFill/></span>
      <span className='opacity-100 mr-2 text-sm group-hover:opacity-0 transition-all duration-1'>{trackNumber}</span> 
        <div>
          <p className='font-semibold text-white'>{track.title}</p>
          <p>{track.artist.name}</p>
        </div>
      </div>
      <div>
        {Math.floor(track.duration/60)}:{track.duration%60 < 10 ? "0" : ""}{track.duration%60}
      </div>
    </div>
  )
}

export default Track