import ListAlbums from "../../components/ListAlbums";

export default function Library() {
  const lists =[
    {
      "image":"https://i.scdn.co/image/ab67616d0000b2739b752fbc57ef2461541c6ee8",
      "name":"Live from the Royal Albert Hall",
      "info":"The Killers",
      "id":"65500602",
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273696b4e67423edd64784bfbb4",
      "name":"Call me if you get lost",
      "info":"Tyler, The Creator",
      "id":"239516692",
    },
    {
      "image": "https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
      "name":"Random Access Memories",
      "info":"Daft Punk",
      "id":"6575789",
    },
    {
      "image":"https://i.scdn.co/image/ab67616d00001e0255404f712deb84d0650a4b41",
      "name":"Stoney (Deluxe)",
      "info":"Post Malone",
      "id":"14781033",
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b2731a84d71391df7469c5ab8539",
      "name":"Wish You Where Here",
      "info":"Pink Floyd",
      "id":"12114242",
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b27336c5417732e53e23cb219246",
      "name":"MTV Unplugged In New York",
      "info":"Nirvana",
      "id":"119282",
    }
  ]
  
  const lists2 =[
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273ce6ab938251398267d8bab70",
      "name":"¿Cómo terminamos aquí?",
      "info":"Charles Ans",
      "id":"270638092"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273f555f994cd61c8d017f53a27",
      "name":"Battle Born",
      "info":"The Killers",
      "id":"5943609"
    },
    {
      "image": "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe",
      "name":"The Dark Side of the Moon",
      "info":"Pink Floyd",
      "id":"12114240"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b273bd1cd834d1c768e8b7b6354b",
      "name":"Daltónico (Deluxe)",
      "info":"Enjambre",
      "id":"1233031"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b27310e6745bb2f179dd3616b85f",
      "name":"The Off-Season",
      "info":"J-Cole",
      "id":"230155192"
    },
    {
      "image":"https://i.scdn.co/image/ab67616d0000b2736b6a90ef38c75a17582a2a97",
      "name":"Botánica - EP",
      "info":"Nsqk",
      "id":"128238522"
    }
  ]
  
  return (
    <div className="pt-28 mb-8 md:pl-72 p-8">
      <ListAlbums lists={lists} sectionName={'Your Favorites'} />
      <ListAlbums lists={lists2}sectionName={'Recently Played'}/>
    </div>
  )
}
