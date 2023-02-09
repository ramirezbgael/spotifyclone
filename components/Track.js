import React from 'react'

const Track = ({track}) => {
  console.log(track)
  return (
    <div className='flex rounded justify-between p-2 hover:cursor-pointer hover:bg-neutral-700 transition-all duration-300'>
      <div className='flex gap-2'>
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