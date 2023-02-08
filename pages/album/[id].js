import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import Track from '../../components/Track'
import {RiPlayFill, RiHeartLine} from 'react-icons/ri'
import { useRouter } from "next/router";

const Album = () => {

  const [albumData, setAlbumData] = useState({})

  const router = useRouter();
  const { id } = router.query;

  const callAPI = async () => {
    try {
      const res = await fetch(`https://api.deezer.com/album/${id}`);
      const data = await res.json()
      setAlbumData(data)
      console.log(albumData)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI()
  }, []);

  return (
    <div className="pt-28 p md:pl-72 p-8">
      <div className='flex gap-2 items-end'>
        <Image
          src={albumData.cover_big}
          width={200}
          height={200}
          alt='Album'
        />
        <div>
          <p>Album</p>
          <h1 className='text-5xl font-extrabold mb-2 text-white'>{albumData.title}</h1>
          <p className='text-xl'>{albumData.artist?.name}</p>
          <p>{albumData.release_date}</p>
        </div>
      </div>
      <div className='mt-4'>
        <button className='p-2 mt-2 text-4xl bg-spotify-green rounded-full text-spotify-gray absolute'>
          <RiPlayFill/>
        </button>
        <button className='ml-20 mt-4 text-4xl'>
          <RiHeartLine/>
        </button>
      </div>
      <div className='mt-4 flex flex-col gap-2 mb-20'>
        {albumData.tracks?.data.map(track=><h1><Track track={track}/></h1>)}
      </div>
    </div>
  )
}

export default Album