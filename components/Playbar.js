import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHeartLine } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";
import { BiSkipPrevious, BiSkipNext, BiRepeat, BiListUl } from "react-icons/bi";
import { AiFillPlayCircle, AiFillSound } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";


{
  /*🚧 Developers working 🚧*/
}

const Playbar = ( props ) => {

  const { currentSong } = props;

  let audioRef = useRef();
  const [playBtn, setPlayBtn] = useState("M7 6v12l10-6z");

  const playPause = () => {
    if (playBtn === "M7 6v12l10-6z") {
      audioRef.current.play();
      setPlayBtn("M8 7h3v10H8zm5 0h3v10h-3z");
    } else {
      setPlayBtn("M7 6v12l10-6z");
      audioRef.current.pause();
    }
  };

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    handleLoadedData();
  }, []);

  return (
    <div className="fixed h-20 left-0 bottom-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-black flex items-center justify-between md:justify-center p-4 z-40">
      <Link href="#" className="md:mr-2">
        <Image
          className="rounded opacity-92"
          src="https://i.scdn.co/image/ab67616d0000b2739c284a6855f4945dc5a3cd73"
          width={150}
          height={120}
          alt="cover"
        />
      </Link>
      <div className="mr-4 md:mr-0">
        <h5 className="font-medium text-gray-200 mb-1">Mr. Brightside</h5>
        <Link href="#">
          <p className="text-gray-400 text-sm w-[18ch]">The Killers</p>
        </Link>
      </div>
      <button>
        <RiHeartLine className="text-2xl" />
      </button>
      <section className="flex flex-col">
        <div className="md:ml-40 h10 w-120  flex flex-col items-center">
          <div className="flex flex-row items-center text-4xl gap-3">
            <button className="hidden md:block">
              <FaRandom className="text-lg" />
            </button>

            <button className="hidden md:block mb-1">
              <BiSkipPrevious />
            </button>
            {/*===Here goes the audio source*/}
            <audio
              src={currentSong}
              ref={audioRef}
              onLoadedData={handleLoadedData}
              onTimeUpdate={handleTimeUpdate}
              type="audio"
            ></audio>

            <button onClick={() => playPause()} className="mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                style={{ fill: "#ffffff", padding: "0" }}
              >
                <path d={playBtn}></path>
              </svg>
            </button>

            <button className="hidden md:block mb-1">
              <BiSkipNext />
            </button>

            <button className="hidden md:block mb-1">
              <BiRepeat className="text-xl" />
            </button>
          </div>
        </div>
        <div className="w-full">
          <progress
            className="w-full h-4 bg-gray-400 rounded hidden"
            value={currentTime}
            max="3"
          />
          <footer className="ml-20 mb-6 ">
            <div
              className="w-200% mb-2 h-2 rounded absolute bg-gray-500"
              style={{ width: `${duration}%` }}
            />
            <div
              className="w-200% mb-2 h-2 rounded absolute bg-blue-500"
              style={{ width: `${currentTime}%` }}
            />
          </footer>
        </div>
      </section>
      <div className="hidden md:flex ml-40 flex-row gap-2 items-center text-xl">
        <TbMicrophone2 className="text-lg" />
        <BiListUl />
        <AiFillSound />
        <div>- - - - - - -</div>
      </div>
    </div>
  );
};

export default Playbar;
