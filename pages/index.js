import ListAlbums from "../components/ListAlbums";

export default function Home() {
  const lists =[
    {
      "image":"https://i.scdn.co/image/ab67706f000000020d89156cb29fff2a3fbc237b",
      "name":"Today's Top Hits",
      "info":"Taylor Swift is in top of Hottest 50!"
    },
    {
      "image":"https://i.scdn.co/image/ab67706c0000da8442f7b254aa36658697ce7fea",
      "name":"Rap Caviar",
      "info":"Music by Metro Boomin, Lil Durk and Moneybagg Yo"
    },
    {
      "image": "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
      "name":"All Out 2010s",
      "info":"The biggest songs of the 2010s"
    },
    {
      "image":"https://i.scdn.co/image/ab67706f000000025e81461d7898c4309ef0e02d",
      "name":"Rock Classics",
      "info":"Rock legends & epic songs that continue to inspire generations"
    },
    {
      "image":"https://i.scdn.co/image/ab67706f00000002019d8ca89209191491b54da9",
      "name":"Viva Latino",
      "info":"Today's top Latin hits, elevando nuestra música"
    },
    {
      "image":"https://i.scdn.co/image/ab67706f00000002fecb9c578f38ebc8eef432cc",
      "name":"Mega Hit Mix",
      "info":"A mega mix of 75 favorites from the last few years!"
    }
  ]
  
  const lists2 =[
    {
      "image":"https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      "name":"Peaceful Piano",
      "info":"Relax and indulge with beautiful piano pieces"
    },
    {
      "image":"https://i.scdn.co/image/ab67706f000000025d87659dcadef82dd0e73f56",
      "name":"Instrumental Study",
      "info":"Focus with soft study music in the background"
    },
    {
      "image": "https://i.scdn.co/image/ab67706f000000025b0a7b8408322a3b9ed15e1e",
      "name":"chill lofi study beats",
      "info":"The perfect study beats"
    },
    {
      "image":"https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b",
      "name":"Jazz Vibes",
      "info":"The original chill instrumental beats playlist"
    },
    {
      "image":"https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
      "name":"Focus Flow",
      "info":"Uptempo instrumental hip hop beats"
    },
    {
      "image":"https://i.scdn.co/image/ab67706f000000025a6fe5537cca0bb20e6abc5f",
      "name":"Creative focus",
      "info":"Get your creative juices flowing with these instrumentals"
    }
  ]
  
  return (
    <div className="pt-28 p md:pl-72 p-8">
      <ListAlbums lists={lists} sectionName={'Spotify Playlists'}/>
      <ListAlbums lists={lists2}sectionName={'Focus'}/>
    </div>
  )
}
