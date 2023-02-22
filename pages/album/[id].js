import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import Track from '../../components/Track'
import {RiPlayFill, RiHeartLine, RiHeartFill} from 'react-icons/ri'
import { useRouter } from "next/router";

const Album = () => {

  const [heartStatus, setHeartStatus] = useState(0)

  const heartClick = () => {
    if (heartStatus == 0){
      setHeartStatus(1)
    } else {
      setHeartStatus(0)
    }
  }

  const [albumData, setAlbumData] = useState({})

  const router = useRouter();
  const { id } = router.query;

  const callAPI = async () => {
    try {
      const res = await fetch(`https://api.deezer.com/album/${id}`);
      const data = await res.json()
      setAlbumData(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI()
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div className="pt-28 p md:pl-72 p-8">
      <div className='flex flex-col gap-2 items-start  md:flex-row md:items-end'>
        <Image
          src={albumData.cover_big}
          width={300}
          height={300}
          alt='Album'
          className='mb-2 md:mb-0'
        />
        <div className='md:ml-2'>
          <p className='text-xs ml-1 font-bold text-white'>ALBUM</p>
          <h1 className='text-6xl font-extrabold mb-2 text-white'>{albumData.title}</h1>
          <p className='text-xl text-white font-semibold'>{albumData.artist?.name}</p>
          <p>{albumData.release_date}</p>
        </div>
      </div>
      <div className='mt-4'>
        <button className='p-2 mt-2 ml-1 text-4xl hover:-translate-y-1 hover:bg-spotify-lightgreen bg-spotify-green rounded-full text-spotify-gray absolute transition-all duration-300'>
          <RiPlayFill/>
        </button>
        <button className='ml-20 mt-4 text-4xl' onClick={()=>heartClick()}>
        {
          heartStatus == 0 ? 
            <RiHeartLine className='transition-all duration-300' /> :
            <RiHeartFill className='text-spotify-green transition-all duration-300' />
        }
      </button>
      </div>
      <div className='mt-4 flex flex-col gap-2 mb-20'>
        {albumData.tracks?.data.map((track, index)=> (
            <Track key={track.id} count={index + 1} track={track} />
          ))}
      </div>
    </div>
  )
}



export default Album