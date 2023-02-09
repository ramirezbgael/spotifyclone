import ListAlbums from "../../components/ListAlbums";

export default function Home() {
  const lists =[
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
      "name":"Divide (Deluxe)",
      "info":"Ed Sheeran",
      "id":"15478674"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
      "name":"Un Verano Sin Ti",
      "info":"Bad Bunny",
      "id":"316164367"
    },
    {
      "image": "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
      "name":"beerbongs & bentleys",
      "info":"Post Malone",
      "id":"62183462",
    },
    {
      "image":"https://i.scdn.co/image/ab67616d00001e02a13ac79ec7e3ac62bd4ca4e8",
      "name":"Dua Lipa (Deluxe)",
      "info":"Dua Lipa",
      "id":"42194891"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
      "name":"WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
      "info":"Billie Eilish",
      "id":"91598612"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
      "name":"SOUR",
      "info":"Olivia Rodrigo",
      "id":"231552772"
    }
  ]
  
  const lists2 =[
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273b7e976d2b35c767f9012cb72",
      "name":"1989",
      "info":"Taylor Swift",
      "id":"9007779"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d00001e0256ac7b86e090f307e218e9c8",
      "name":"thank u, next",
      "info":"Ariana Grande",
      "id":"86773062"
    },
    {
      "image": "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
      "name":"Purpose (Deluxe)",
      "info":"Justin Bieber",
      "id":"11674708"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
      "name":"Scorpion",
      "info":"Drake",
      "id":"69319552"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d00001e0277fdcfda6535601aff081b6a",
      "name":"Fine Line",
      "info":"Harry Styles",
      "id":"122664252"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d00001e026d4056466fc11f6408be2566",
      "name":"21",
      "info":"Adele",
      "id":"192713382"
    }
  ]
  
  return (
    <div className="pt-28 mb-8 md:pl-72 p-8">
      <ListAlbums lists={lists} sectionName={'Spotify\'s Most Listened'}/>
      <ListAlbums lists={lists2} sectionName={'Classics'}/>
    </div>
  )
}
