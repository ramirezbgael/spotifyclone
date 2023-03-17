import React, { useRef, useState } from "react";
import Image from "next/image";

{
  /*🚧 Developers working 🚧*/
}
const Playbar = () => {
  const data = {
    "id": 106506512,
    "readable": true,
    "title": "The Hills",
    "title_short": "The Hills",
    "title_version": "",
    "isrc": "USUG11500737",
    "link": "https://www.deezer.com/track/106506512",
    "share": "https://www.deezer.com/track/106506512?utm_source=deezer&utm_content=track-106506512&utm_term=0_1679080221&utm_medium=web",
    "duration": 242,
    "track_position": 5,
    "disk_number": 1,
    "rank": 954225,
    "release_date": "2015-08-28",
    "explicit_lyrics": true,
    "explicit_content_lyrics": 1,
    "explicit_content_cover": 1,
    "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6096b1784a5b1bce1593f014c8829e94-9.mp3",
    "bpm": 0,
    "gain": -9.2,
    "available_countries": [
      "AE",
      "AF",
      "AG",
      "AI",
      "AL",
      "AM",
      "AO",
      "AQ",
      "AR",
      "AS",
      "AT",
      "AU",
      "AZ",
      "BA",
      "BB",
      "BD",
      "BE",
      "BF",
      "BG",
      "BH",
      "BI",
      "BJ",
      "BN",
      "BO",
      "BQ",
      "BR",
      "BT",
      "BV",
      "BW",
      "BY",
      "CA",
      "CC",
      "CD",
      "CF",
      "CG",
      "CH",
      "CI",
      "CK",
      "CL",
      "CM",
      "CO",
      "CR",
      "CU",
      "CV",
      "CW",
      "CX",
      "CY",
      "CZ",
      "DE",
      "DJ",
      "DK",
      "DM",
      "DO",
      "DZ",
      "EC",
      "EE",
      "EG",
      "EH",
      "ER",
      "ES",
      "ET",
      "FI",
      "FJ",
      "FK",
      "FM",
      "FR",
      "GA",
      "GB",
      "GD",
      "GE",
      "GH",
      "GM",
      "GN",
      "GQ",
      "GR",
      "GS",
      "GT",
      "GU",
      "GW",
      "HK",
      "HM",
      "HN",
      "HR",
      "HU",
      "ID",
      "IE",
      "IL",
      "IN",
      "IQ",
      "IR",
      "IS",
      "IT",
      "JM",
      "JO",
      "JP",
      "KE",
      "KG",
      "KH",
      "KI",
      "KM",
      "KN",
      "KP",
      "KR",
      "KW",
      "KY",
      "KZ",
      "LA",
      "LB",
      "LC",
      "LK",
      "LR",
      "LS",
      "LT",
      "LU",
      "LV",
      "LY",
      "MA",
      "MD",
      "ME",
      "MG",
      "MH",
      "MK",
      "ML",
      "MM",
      "MN",
      "MP",
      "MR",
      "MS",
      "MT",
      "MU",
      "MV",
      "MW",
      "MX",
      "MY",
      "MZ",
      "NA",
      "NE",
      "NF",
      "NG",
      "NI",
      "NL",
      "NO",
      "NP",
      "NR",
      "NU",
      "NZ",
      "OM",
      "PA",
      "PE",
      "PG",
      "PH",
      "PK",
      "PL",
      "PN",
      "PS",
      "PT",
      "PW",
      "PY",
      "QA",
      "RO",
      "RS",
      "RU",
      "RW",
      "SA",
      "SB",
      "SC",
      "SD",
      "SE",
      "SG",
      "SI",
      "SJ",
      "SK",
      "SL",
      "SN",
      "SO",
      "ST",
      "SV",
      "SX",
      "SY",
      "SZ",
      "TC",
      "TD",
      "TG",
      "TH",
      "TJ",
      "TK",
      "TL",
      "TM",
      "TN",
      "TO",
      "TR",
      "TV",
      "TZ",
      "UA",
      "UG",
      "US",
      "UY",
      "UZ",
      "VC",
      "VE",
      "VG",
      "VI",
      "VN",
      "VU",
      "WS",
      "YE",
      "ZA",
      "ZM",
      "ZW"
    ],
    "contributors": [
      {
        "id": 4050205,
        "name": "The Weeknd",
        "link": "https://www.deezer.com/artist/4050205",
        "share": "https://www.deezer.com/artist/4050205?utm_source=deezer&utm_content=artist-4050205&utm_term=0_1679080221&utm_medium=web",
        "picture": "https://api.deezer.com/artist/4050205/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/4050205/top?limit=50",
        "type": "artist",
        "role": "Main"
      }
    ],
    "md5_image": "eea9f7fc913300e40307a0ff70dc73cf",
    "artist": {
      "id": 4050205,
      "name": "The Weeknd",
      "link": "https://www.deezer.com/artist/4050205",
      "share": "https://www.deezer.com/artist/4050205?utm_source=deezer&utm_content=artist-4050205&utm_term=0_1679080221&utm_medium=web",
      "picture": "https://api.deezer.com/artist/4050205/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/1000x1000-000000-80-0-0.jpg",
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/4050205/top?limit=50",
      "type": "artist"
    },
    "album": {
      "id": 11107272,
      "title": "Beauty Behind The Madness",
      "link": "https://www.deezer.com/album/11107272",
      "cover": "https://api.deezer.com/album/11107272/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/eea9f7fc913300e40307a0ff70dc73cf/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/eea9f7fc913300e40307a0ff70dc73cf/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/eea9f7fc913300e40307a0ff70dc73cf/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/eea9f7fc913300e40307a0ff70dc73cf/1000x1000-000000-80-0-0.jpg",
      "md5_image": "eea9f7fc913300e40307a0ff70dc73cf",
      "release_date": "2015-08-28",
      "tracklist": "https://api.deezer.com/album/11107272/tracks",
      "type": "album"
    },
    "type": "track"
  }
  // 🚧⤵️ Read song from document⤵️🚧
  let audioRef = useRef();

  // 🚧⤵️ Set current second, duration and current percentage of the song⤵️🚧
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  // 🚧⤵️ Function for setting duration⤵️🚧
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  // 🚧⤵️ Function for setting current second⤵️🚧
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    handlePercentage();
  };

  // 🚧⤵️ Function for calculating the percentage⤵️🚧
  const handlePercentage = () => {
    setCurrentPercentage(Math.ceil((currentTime * 100) / duration));
  };

  // === 🚧 ⤵️ Playing the song ⤵️ 🚧 //
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (isPlaying == false) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  var ended = audioRef.current?.ended;

  {
    /* 🚧⤵️ Heart button ⤵️🚧 */
  }
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    if (liked == false) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  return (
    <div className="fixed h-20 left-0 bottom-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-black flex flex-col items-center justify-between md:justify-center z-40">
      <div className=" h-3/4 w-full flex">
        <div>
          <Image
            src={data.album.cover_big}
            width={60}
            height={60}
            alt="album cover"
          />
        </div>
        <div className=" h-full w-3/4 flex flex-col justify-center pl-2">
          <div className="text-lg font-medium">{data.title}</div>
          <div>{data.artist.name}</div>
        </div>
        <div className=" gap-2 pr-3 items-center flex justify-end w-1/4 h-full">
          <div className="hover: cursor-pointer transition-all duration-200">
            {/* === 💹 Heart Button 💹*/}
            {liked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                onClick={() => handleLike()}
              >
                <path
                  fill="#f55376"
                  d="M42.36,25.63L24,44l-0.01-0.01L5.64,25.63c-4-4-4-10.49,0-14.49c4.18-4.19,10.97-4.19,15.15,0	L21,11.35l2.99,2.99l2.94-2.95l0.26-0.26c2.1-2.09,4.84-3.14,7.6-3.14c2.74,0,5.48,1.05,7.58,3.14	C46.36,15.14,46.36,21.63,42.36,25.63z"
                ></path>
                <path
                  fill="#eb0000"
                  d="M23.99,14.34v29.65L5.64,25.63c-4-4-4-10.49,0-14.49c4.18-4.19,10.97-4.19,15.15,0L21,11.35	L23.99,14.34z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0,0,256,256"
                onClick={() => handleLike()}
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(8,8)">
                    <path d="M16,28.15625l-0.5,-0.29297c-0.51172,-0.29297 -12.5,-7.33203 -12.5,-14.86328c0,-3.85937 3.14063,-7 7,-7c2.54297,0 4.77344,1.36328 6,3.39844c1.22656,-2.03516 3.45703,-3.39844 6,-3.39844c3.85938,0 7,3.14063 7,7c0,7.53125 -11.98828,14.57031 -12.5,14.86328zM10,8c-2.75781,0 -5,2.24219 -5,5c0,5.60547 8.78516,11.44531 11,12.82813c2.21484,-1.38281 11,-7.22266 11,-12.82812c0,-2.75781 -2.24219,-5 -5,-5c-2.75781,0 -5,2.24219 -5,5h-2c0,-2.75781 -2.24219,-5 -5,-5z"></path>
                  </g>
                </g>
              </svg>
            )}
          </div>
          <div>
            {/* === 💹 Play/Pause Button 💹 */}
            {!isPlaying || ended ? (
              <button onClick={() => handlePlay()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <polygon
                    fill="#ffffff"
                    points="13.449,5.439 10,7.159 10,24 39,24 39.989,22.292"
                  ></polygon>
                  <path
                    fill="#ffffff"
                    d="M41,24h-4c0-1.105,0.895-2,2-2S41,22.895,41,24z"
                  ></path>
                  <circle
                    cx="12.159"
                    cy="7.159"
                    r="2.159"
                    fill="#c2c1c0"
                  ></circle>
                  <polygon
                    fill="#c2c1c0"
                    points="13.449,42.561 10,40.841 10,24 39,24 39.989,25.708"
                  ></polygon>
                  <path
                    fill="#c2c1c0"
                    d="M41,24h-4c0,1.105,0.895,2,2,2S41,25.105,41,24z"
                  ></path>
                  <circle
                    cx="12.159"
                    cy="40.841"
                    r="2.159"
                    fill="#c2c1c0"
                  ></circle>
                </svg>
              </button>
            ) : (
              <button onClick={() => handlePlay()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ffffff"
                    d="M20,24H10V8c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2V24z"
                  ></path>
                  <path
                    fill="#c2c1c0"
                    d="M18,42h-6c-1.1,0-2-0.9-2-2V24h10v16C20,41.1,19.1,42,18,42z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M38,24H28V8c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2V24z"
                  ></path>
                  <path
                    fill="#c2c1c0"
                    d="M36,42h-6c-1.1,0-2-0.9-2-2V24h10v16C38,41.1,37.1,42,36,42z"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="h-1/4 w-full">
        <audio
          src={data.preview}
          ref={audioRef}
          onLoadedData={handleLoadedData}
          onTimeUpdate={handleTimeUpdate}
          type="audio"
          id="my-song"
        />
        <footer>
          <div className="w-full h-2 absolute bg-gray-500" />
          <div
            className="w-full mb-2 h-2 absolute bg-blue-100 transition-all"
            style={{ width: `${currentPercentage}%` }}
          />
        </footer>
      </div>
    </div>
  );
};

export default Playbar;
