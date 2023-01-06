import React, { useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Album = () => {

  const [albumData, setAlbumData] = useState({})

  const getAlbum = async () => {
    await axios.get('https://api.deezer.com/album/65500602')
      .then(res=>{
        setAlbumData(res.data)
      })
      .catch(err=>{
        console.log(err.message)
      })
  }

  useEffect(() => {
    getAlbum()
    console.log(albumData)
  }, []);

  console.log(albumData.name)

  const router = useRouter()
  const {id} = router.query

  return (
    <div  className="pt-28 p md:pl-72 p-8">
      patata {`${albumData?.name}`}
    </div>
  )
}

export default Album